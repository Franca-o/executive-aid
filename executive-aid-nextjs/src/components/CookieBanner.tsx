"use client";

import { useEffect, useState } from "react";
import CookiePreferencesModal from "./CookiePreferencesModal";

const COOKIE_KEY = "ea_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(
      COOKIE_KEY,
      JSON.stringify({ necessary: true, analytics: true })
    );
    setVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem(
      COOKIE_KEY,
      JSON.stringify({ necessary: true, analytics: false })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white p-4">
        <div className="max-w-6xl mx-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm">
            We use cookies to improve your experience, analyze traffic, and
            personalize content. You can accept, reject, or manage preferences.
          </p>

          <div className="flex gap-2">
            <button
              onClick={rejectAll}
              className="border border-white px-4 py-2 text-sm"
            >
              Reject
            </button>

            <button
              onClick={() => setShowPrefs(true)}
              className="border border-white px-4 py-2 text-sm"
            >
              Preferences
            </button>

            <button
              onClick={acceptAll}
              className="bg-white text-black px-4 py-2 text-sm"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>

      {showPrefs && (
        <CookiePreferencesModal
          onClose={() => setShowPrefs(false)}
          onSave={(prefs) => {
            localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
            setShowPrefs(false);
            setVisible(false);
          }}
        />
      )}
    </>
  );
}
