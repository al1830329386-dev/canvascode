/**
 * CanvasCode v1.0.0 — Background Service Worker
 * Copyright (C) 2026 Allen (and CanvasCode Contributors)
 * Licensed under GNU General Public License v3.0 (GPL-3.0).
 */
chrome.action.onClicked.addListener(async (tab) => {
  if (!tab || !tab.id) return;

  const url = tab.url || "";
  // Ignore browser internal URLs
  if (url.startsWith("chrome://") || url.startsWith("edge://") || url.startsWith("about:") || url.startsWith("chrome-extension://")) {
    return;
  }

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["tweak-engine.js"]
    });
  } catch (err) {
    console.error("Failed to inject AI Visual Tweak:", err);
  }
});
