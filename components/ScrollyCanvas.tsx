"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const currentScrollProgress = useRef(0);

    // Total frames in the sequence (approx 119 as per user)
    // I will check the actual count or assume 120 for now and handle missing ones gracefully
    const frameCount = 120;

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const imagePromises: Promise<void>[] = [];

            for (let i = 0; i < frameCount; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    // Construct filename: frame_000.png
                    // Need to pad index with zeros
                    const paddedIndex = i.toString().padStart(3, "0");
                    img.src = `/frames/frame_${paddedIndex}.png`;
                    img.onload = () => {
                        loadedImages[i] = img;
                        resolve();
                    };
                    img.onerror = () => {
                        console.warn(`Failed to load image index ${i}`);
                        // Resolve anyway to avoid blocking
                        resolve();
                    };
                });
                imagePromises.push(promise);
            }

            await Promise.all(imagePromises);
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];

        // Responsive Canvas Logic (Object-fit: cover)
        // Use device pixel ratio for high-DPI displays (important for mobile)
        const dpr = window.devicePixelRatio || 1;
        const displayWidth = window.innerWidth;
        const displayHeight = window.innerHeight;

        // Set actual size in memory (scaled by device pixel ratio)
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;

        // Scale the context to account for device pixel ratio
        ctx.scale(dpr, dpr);

        // Set display size (CSS pixels)
        canvas.style.width = displayWidth + "px";
        canvas.style.height = displayHeight + "px";

        const scale = Math.max(displayWidth / img.width, displayHeight / img.height);
        const x = (displayWidth / 2) - (img.width / 2) * scale;
        const y = (displayHeight / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, displayWidth, displayHeight);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Throttle frame updates on mobile for better performance
    const lastFrameTime = useRef(0);
    const frameThrottle = 16; // ~60fps on desktop, adjust for mobile

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        currentScrollProgress.current = latest;

        const now = Date.now();
        // Throttle more aggressively on mobile devices
        const isMobile = window.innerWidth < 768;
        const throttleTime = isMobile ? 33 : frameThrottle; // ~30fps on mobile, 60fps on desktop

        if (now - lastFrameTime.current < throttleTime) return;
        lastFrameTime.current = now;

        // Map scroll 0-1 to frame index
        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(latest * frameCount)
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded && images.length > 0) {
            renderFrame(0);
        }
    }, [isLoaded, images]);

    // Handle window resize for mobile orientation changes
    useEffect(() => {
        const handleResize = () => {
            if (isLoaded && images.length > 0) {
                const currentIndex = Math.min(
                    frameCount - 1,
                    Math.floor(currentScrollProgress.current * frameCount)
                );
                renderFrame(currentIndex);
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("orientationchange", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("orientationchange", handleResize);
        };
    }, [isLoaded, images]);

    return (
        <div ref={containerRef} className="relative h-[400vh] sm:h-[450vh] md:h-[500vh] bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white text-sm sm:text-base">
                        Loading...
                    </div>
                )}
                <canvas ref={canvasRef} className="block w-full h-full object-cover" />
            </div>
        </div>
    );
}
