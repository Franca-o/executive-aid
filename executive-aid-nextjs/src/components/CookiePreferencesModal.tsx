"use client";

import { useState } from "react";

export default function CookiePreferencesModal({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave: (prefs: { necessary: boolean; analytics: boolean }) => void;
}) {
  const [analytics, setAnalytics] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-white text-black p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Cookie Preferences</h2>

        <div className="mb-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked disabled />
            Necessary cookies (required)
          </label>
        </div>

        <div className="mb-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
            />
            Analytics cookies
          </label>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="border px-4 py-2 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={() =>
              onSave({ necessary: true, analytics })
            }
            className="bg-black text-white px-4 py-2 text-sm"
          >
            Save preferences.
          </button>
        </div>
      </div>
    </div>
  );
}
