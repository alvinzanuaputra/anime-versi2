"use client";

import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import YouTube from 'react-youtube';
import type { TFullAnime } from "@/types";
import ErrorBoundary from '@/components/ErrorBoundary';

const Youtubeplay = forwardRef(({ dataAnime }: { dataAnime: TFullAnime }, ref) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false); // State untuk melacak status pemutaran video
    let player: any = null; // Pastikan untuk memberi tipe

    const updateMediaQuery = () => {
        setIsMobile(window.innerWidth <= 768);
        setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1200);
    };

    useEffect(() => {
        setIsClient(true);
        updateMediaQuery();
        window.addEventListener('resize', updateMediaQuery);
        return () => {
            window.removeEventListener('resize', updateMediaQuery);
        };
    }, []);

    const opts = {
        width: isMobile ? 'auto' : isTablet ? '1024' : '1200',
        height: isMobile ? '360' : isTablet ? '768' : '640',
        playerVars: {
            autoplay: 0, // Tidak langsung memutar video
        },
    };

    useImperativeHandle(ref, () => ({
        toggleVideo: () => {
            if (isPlaying) {
                player && player.pauseVideo(); // Pause video jika sedang diputar
            } else {
                player && player.playVideo(); // Play video jika sedang pause
            }
            setIsPlaying(!isPlaying); // Toggle status pemutaran
        },
    }));

    const _onReady = (event: any) => {
        player = event.target;
    };

    if (!dataAnime?.data?.trailer?.youtube_id) {
        return <div>No trailer available</div>;
    }

    return (
        isClient && (
            <ErrorBoundary>
                <YouTube
                    className="relative"
                    videoId={dataAnime.data.trailer.youtube_id}
                    onReady={_onReady}
                    opts={opts}
                    onError={() => alert('Video ini tidak tersedia lagi!')}
                />
            </ErrorBoundary>
        )
    );
});

// Menambahkan displayName pada komponen yang menggunakan forwardRef
Youtubeplay.displayName = 'Youtubeplay';

export default Youtubeplay;
