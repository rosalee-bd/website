import React, { useState, useEffect } from 'react';
import { XIcon } from './icons';

interface ImageViewerProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ imageUrl, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300); // match animation duration
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
        onClick={handleClose}
        aria-hidden="true"
      ></div>
      <div
        className={`relative max-w-4xl max-h-[90vh] w-full ${isClosing ? 'animate-fade-zoom-out' : 'animate-fade-zoom-in'}`}
      >
        <button
          onClick={handleClose}
          className="absolute -top-4 -right-4 md:top-2 md:right-2 z-10 p-2 bg-white/80 rounded-full text-black hover:bg-white transition-colors"
          aria-label="Close image view"
        >
          <XIcon className="w-6 h-6" />
        </button>
        <img src={imageUrl} alt="Expanded view" className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default ImageViewer;
