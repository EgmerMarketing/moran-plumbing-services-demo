"use client";

import { useState, useEffect } from "react";

export default function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [readerMode, setReaderMode] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedPrefs = localStorage.getItem("a11y-preferences");
    if (savedPrefs) {
      const prefs = JSON.parse(savedPrefs);
      setReaderMode(prefs.readerMode || false);
      setFontSize(prefs.fontSize || 100);
      setHighContrast(prefs.highContrast || false);
      setReducedMotion(prefs.reducedMotion || false);
    }
  }, []);

  // Apply preferences to document
  useEffect(() => {
    const html = document.documentElement;
    
    // Reader Mode
    if (readerMode) {
      html.classList.add("reader-mode");
    } else {
      html.classList.remove("reader-mode");
    }

    // Font Size
    html.style.fontSize = `${fontSize}%`;

    // High Contrast
    if (highContrast) {
      html.classList.add("high-contrast");
    } else {
      html.classList.remove("high-contrast");
    }

    // Reduced Motion
    if (reducedMotion) {
      html.classList.add("reduced-motion");
    } else {
      html.classList.remove("reduced-motion");
    }

    // Save preferences
    localStorage.setItem(
      "a11y-preferences",
      JSON.stringify({ readerMode, fontSize, highContrast, reducedMotion })
    );
  }, [readerMode, fontSize, highContrast, reducedMotion]);

  const resetAll = () => {
    setReaderMode(false);
    setFontSize(100);
    setHighContrast(false);
    setReducedMotion(false);
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-gold text-black p-3 rounded-full shadow-lg hover:bg-gold-dark transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div
          id="accessibility-panel"
          role="dialog"
          aria-label="Accessibility settings"
          aria-modal="true"
          className="fixed bottom-20 right-4 z-50 bg-charcoal border border-zinc-700 rounded-lg shadow-2xl p-6 w-80"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-white">Accessibility</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gold rounded"
              aria-label="Close accessibility settings"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            {/* Reader Mode Toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="reader-mode" className="text-white text-sm font-medium">
                Reader Mode
              </label>
              <button
                id="reader-mode"
                role="switch"
                aria-checked={readerMode}
                onClick={() => setReaderMode(!readerMode)}
                className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold ${
                  readerMode ? "bg-gold" : "bg-zinc-600"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    readerMode ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>

            {/* Font Size */}
            <div>
              <label htmlFor="font-size" className="text-white text-sm font-medium block mb-2">
                Font Size: {fontSize}%
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFontSize(Math.max(80, fontSize - 10))}
                  className="bg-zinc-700 text-white w-8 h-8 rounded flex items-center justify-center hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-gold"
                  aria-label="Decrease font size"
                >
                  A-
                </button>
                <input
                  id="font-size"
                  type="range"
                  min="80"
                  max="150"
                  step="10"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="flex-1 h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-gold"
                  aria-valuemin={80}
                  aria-valuemax={150}
                  aria-valuenow={fontSize}
                />
                <button
                  onClick={() => setFontSize(Math.min(150, fontSize + 10))}
                  className="bg-zinc-700 text-white w-8 h-8 rounded flex items-center justify-center hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-gold"
                  aria-label="Increase font size"
                >
                  A+
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="high-contrast" className="text-white text-sm font-medium">
                High Contrast
              </label>
              <button
                id="high-contrast"
                role="switch"
                aria-checked={highContrast}
                onClick={() => setHighContrast(!highContrast)}
                className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold ${
                  highContrast ? "bg-gold" : "bg-zinc-600"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    highContrast ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>

            {/* Reduced Motion Toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="reduced-motion" className="text-white text-sm font-medium">
                Reduce Motion
              </label>
              <button
                id="reduced-motion"
                role="switch"
                aria-checked={reducedMotion}
                onClick={() => setReducedMotion(!reducedMotion)}
                className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold ${
                  reducedMotion ? "bg-gold" : "bg-zinc-600"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    reducedMotion ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetAll}
              className="w-full mt-2 py-2 text-sm text-zinc-400 hover:text-white border border-zinc-700 rounded hover:border-zinc-500 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
            >
              Reset to Default
            </button>
          </div>

          {/* WCAG Info */}
          <p className="mt-4 text-xs text-zinc-500">
            This site follows WCAG 2.1 accessibility guidelines.
          </p>
        </div>
      )}
    </>
  );
}
