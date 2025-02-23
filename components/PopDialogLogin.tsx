"use client";

import { FC, useEffect, useState } from "react";
import 'animate.css';

const ChatBubbleLoginPopup: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show the dialog on page refresh
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsAnimating(true); // Start fading out
    setTimeout(() => {
      setIsVisible(false); // Hide after animation
      setIsAnimating(false); // Reset animation state
    }, 500); // Duration of the fade out animation
  };

  return (
    isVisible && (
      <div 
        className={`absolute top-16 right-24 z-50 p-4 bg-color-hitam text-white rounded-bl-lg border border-color-accent shadow-lg flex items-center transition-transform ${isAnimating ? 'animate__animated animate__fadeOutUp ' : 'animate__animated animate__fadeInDown animate__delay-1s'}`}
      >
        <div className="relative">
          <div className="max-w-xs">
            <h2 className="font-semibold text-lg md:text-xs">Tekan Tombol Profil Untuk Pengalaman Lebih!</h2>
            <p className="mt-1 text-sm md:text-base">Akses lebih banyak fitur dengan masuk ke akun anda.</p>
            <button
              className="mt-1 text-sm text-white rounded-md border border-color-accent bg-color-dark px-3 py-1"
              onClick={handleClose}
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ChatBubbleLoginPopup;
