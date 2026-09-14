/**
 * CanvasCode Studio — Desktop Workbench Orchestration Engine
 * Copyright (C) 2026 Allen (@al1830329386-dev)
 * Licensed under GNU General Public License v3.0 (GPL-3.0).
 */

(function () {
  // State
  let currentZoom = 1.0;
  let currentDevice = "desktop";
  let activeElement = null;
  let diffHistory = [];
  let isSnappingEnabled = true;

  // DOM References
  const targetUrlInput = document.getElementById("target-url-input");
  const btnLoadUrl = document.getElementById("btn-load-url");
  const btnOpenFile = document.getElementById("btn-open-file");
  const previewIframe = document.getElementById("preview-iframe");
  const deviceFrame = document.getElementById("device-frame");
  const deviceUrlDisplay = document.getElementById("device-url-display");
  const canvasArtboard = document.getElementById("canvas-artboard");
  const canvasViewport = document.getElementById("canvas-viewport");

  // Zoom controls
  const btnZoomIn = document.getElementById("btn-zoom-in");
  const btnZoomOut = document.getElementById("btn-zoom-out");
  const btnZoomReset = document.getElementById("btn-zoom-reset");
  const zoomLevelText = document.getElementById("zoom-level-text");

  // Canvas Actions
  const btnSnapToggle = document.getElementById("btn-snap-toggle");
  const btnUndo = document.getElementById("btn-undo");
  const btnRedo = document.getElementById("btn-redo");
  const btnExportPrompt = document.getElementById("btn-export-prompt");
  const btnSyncCode = document.getElementById("btn-sync-code");

  // Sidebar Tabs
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  // Inspector Inputs
  const targetTagDisplay = document.getElementById("target-tag-display");
  const propWidth = document.getElementById("prop-width");
  const propHeight = document.getElementById("prop-height");
  const propMargin = document.getElementById("prop-margin");
  const propPadding = document.getElementById("prop-padding");
  const propBgColor = document.getElementById("prop-bg-color");
  const propBgHex = document.getElementById("prop-bg-hex");
  const propRadius = document.getElementById("prop-radius");
  const propFontSize = document.getElementById("prop-font-size");
  const propTextColor = document.getElementById("prop-text-color");
  const propTextHex = document.getElementById("prop-text-hex");
  const tailwindPreviewBox = document.getElementById("tailwind-preview-box");

  // Diff & Sync
  const diffBadge = document.getElementById("diff-badge");
  const diffCount = document.getElementById("diff-count");
  const diffListContainer = document.getElementById("diff-list-container");
  const btnClearAllDiff = document.getElementById("btn-clear-all-diff");
  const syncProjectPath = document.getElementById("sync-project-path");
  const btnBrowseFolder = document.getElementById("btn-browse-folder");
  const syncDiffDisplay = document.getElementById("sync-diff-display");
  const btnApplySync = document.getElementById("btn-apply-sync");

  // --- 1. Device Preset Switching ---
  document.querySelectorAll(".device-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".device-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const device = btn.getAttribute("data-device");
      setDevicePreset(device);
    });
  });

  function setDevicePreset(device) {
    currentDevice = device;
    deviceFrame.className = `device-frame ${device}`;
    fitZoomForDevice(device);
  }

  function fitZoomForDevice(device) {
    const viewportWidth = canvasViewport.clientWidth - 80;
    const viewportHeight = canvasViewport.clientHeight - 80;
    let targetW = 1440;
    let targetH = 900;

    if (device === "tablet") {
      targetW = 848;
      targetH = 1208;
    } else if (device === "mobile") {
      targetW = 417;
      targetH = 876;
    } else if (device === "responsive") {
      applyZoom(1.0);
      return;
    }

    const scaleX = viewportWidth / targetW;
    const scaleY = viewportHeight / targetH;
    const bestScale = Math.min(scaleX, scaleY, 1.0);
    applyZoom(Math.max(0.4, Math.floor(bestScale * 20) / 20));
  }

  // --- 2. Canvas Zooming ---
  function applyZoom(zoom) {
    currentZoom = Math.min(2.0, Math.max(0.25, zoom));
    canvasArtboard.style.transform = `scale(${currentZoom})`;
    zoomLevelText.textContent = `${Math.round(currentZoom * 100)}%`;
  }

  btnZoomIn.onclick = () => applyZoom(currentZoom + 0.1);
  btnZoomOut.onclick = () => applyZoom(currentZoom - 0.1);
  btnZoomReset.onclick = () => fitZoomForDevice(currentDevice);

  // --- 3. URL Loading & Engine Injection ---
  function loadUrl(rawUrl) {
    let url = rawUrl.trim();
    if (!url) return;
    if (!url.startsWith("http://") && !url.startsWith("https://") && !url.startsWith("file://")) {
      url = "http://" + url;
    }
    deviceUrlDisplay.textContent = url;
    previewIframe.src = url;
  }

  btnLoadUrl.onclick = () => loadUrl(targetUrlInput.value);
  targetUrlInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") loadUrl(targetUrlInput.value);
  });

  btnOpenFile.onclick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".html,.htm";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const fileUrl = URL.createObjectURL(file);
        targetUrlInput.value = file.name;
        deviceUrlDisplay.textContent = file.name;
        previewIframe.src = fileUrl;
      }
    };
    input.click();
  };

  // Inject Tweak Engine into preview iframe on load
  previewIframe.onload = () => {
    try {
      const iDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
      if (!iDoc) return;

      // Inject tweak-engine script if not already present
      if (!iDoc.getElementById("canvascode-engine-script")) {
        const script = iDoc.createElement("script");
        script.id = "canvascode-engine-script";
        script.src = new URL("../tweak-engine.js", window.location.href).href;
        iDoc.body.appendChild(script);

        // Setup message listener for bridge
        setupIframeBridge(previewIframe.contentWindow);
      }
    } catch (err) {
      console.warn("Cross-origin iframe detected. Some inspector features may require same-origin or local server proxy.", err);
    }
  };

  // --- 4. Sidebar Tabs Switching ---
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const tabId = "tab-" + btn.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // --- 5. Bridge & Bidirectional Inspector Binding ---
  function setupIframeBridge(iWin) {
    // Listen for custom element selection events dispatched from tweak-engine
    iWin.addEventListener("canvascode:elementSelected", (e) => {
      const detail = e.detail;
      if (!detail) return;
      activeElement = detail;
      updateInspectorFields(detail);
    });

    iWin.addEventListener("canvascode:stateChanged", (e) => {
      const detail = e.detail;
      if (!detail) return;
      diffHistory = detail.history || [];
      updateDiffChangelog();
      btnUndo.disabled = !detail.canUndo;
      btnRedo.disabled = !detail.canRedo;
    });
  }

  function updateInspectorFields(data) {
    targetTagDisplay.innerHTML = `
      <span class="tag-type">${data.tagName || "div"}</span>
      <span class="tag-id">${data.id ? "#" + data.id : ""}</span>
      <span class="tag-classes">${data.className ? "." + data.className.split(" ").join(".") : ""}</span>
    `;

    propWidth.value = data.width ? Math.round(data.width) : "";
    propHeight.value = data.height ? Math.round(data.height) : "";
    propMargin.value = data.margin || "0px";
    propPadding.value = data.padding || "0px";
    propBgColor.value = data.bgColorHex || "#ffffff";
    propBgHex.value = data.bgColorHex || "#ffffff";
    propRadius.value = data.borderRadius ? parseInt(data.borderRadius) : 0;
    propFontSize.value = data.fontSize ? parseInt(data.fontSize) : 14;
    propTextColor.value = data.textColorHex || "#000000";
    propTextHex.value = data.textColorHex || "#000000";

    updateTailwindPreview(data);
  }

  function updateTailwindPreview(data) {
    const classes = [];
    if (data.width) classes.push(`w-[${Math.round(data.width)}px]`);
    if (data.height) classes.push(`h-[${Math.round(data.height)}px]`);
    if (data.borderRadius) classes.push(`rounded-[${data.borderRadius}]`);
    if (data.bgColorHex) classes.push(`bg-[${data.bgColorHex}]`);
    if (data.textColorHex) classes.push(`text-[${data.textColorHex}]`);

    tailwindPreviewBox.innerHTML = `<code>${classes.join(" ") || "/* 暂无样式覆盖 */"}</code>`;
  }

  // Two-way bindings: Property changes in sidebar update the live element
  [propWidth, propHeight, propRadius, propFontSize].forEach(input => {
    input.addEventListener("input", () => {
      sendInspectorUpdate();
    });
  });

  propBgColor.addEventListener("input", () => {
    propBgHex.value = propBgColor.value;
    sendInspectorUpdate();
  });
  propBgHex.addEventListener("change", () => {
    propBgColor.value = propBgHex.value;
    sendInspectorUpdate();
  });

  propTextColor.addEventListener("input", () => {
    propTextHex.value = propTextColor.value;
    sendInspectorUpdate();
  });
  propTextHex.addEventListener("change", () => {
    propTextColor.value = propTextHex.value;
    sendInspectorUpdate();
  });

  function sendInspectorUpdate() {
    try {
      const iWin = previewIframe.contentWindow;
      if (iWin && iWin.__canvascodeApplyInspectorUpdate) {
        iWin.__canvascodeApplyInspectorUpdate({
          width: propWidth.value ? propWidth.value + "px" : null,
          height: propHeight.value ? propHeight.value + "px" : null,
          backgroundColor: propBgColor.value,
          borderRadius: propRadius.value ? propRadius.value + "px" : null,
          fontSize: propFontSize.value ? propFontSize.value + "px" : null,
          color: propTextColor.value
        });
      }
    } catch (e) {}
  }

  // --- 6. Diff Changelog & Sync Panel ---
  function updateDiffChangelog() {
    diffBadge.textContent = diffHistory.length;
    diffCount.textContent = diffHistory.length;

    if (diffHistory.length === 0) {
      diffListContainer.innerHTML = `<div class="empty-state">暂无改动，在画布上直接拖拽或修改元素即可生成记录</div>`;
      syncDiffDisplay.textContent = "/* 暂无代码待同步 */";
      return;
    }

    diffListContainer.innerHTML = diffHistory.map((item, index) => `
      <div class="diff-card">
        <div class="diff-card-header">
          <span>${item.selector || "元素 #" + (index + 1)}</span>
          <button class="btn-text-danger" onclick="revertDiffItem(${index})">还原</button>
        </div>
        <div style="color:#94a3b8;font-size:11px;">${item.summary || "样式已微调"}</div>
      </div>
    `).join("");

    // Update code sync diff display
    syncDiffDisplay.textContent = diffHistory.map(item => {
      return `// 目标: ${item.selector}\n+ ${item.tailwindClasses || item.cssText || "custom styles"}`;
    }).join("\n\n");
  }

  window.revertDiffItem = function(index) {
    try {
      const iWin = previewIframe.contentWindow;
      if (iWin && iWin.__canvascodeRevertDiff) {
        iWin.__canvascodeRevertDiff(index);
      }
    } catch (e) {}
  };

  btnClearAllDiff.onclick = () => {
    try {
      const iWin = previewIframe.contentWindow;
      if (iWin && iWin.__canvascodeResetAll) {
        iWin.__canvascodeResetAll();
      }
    } catch (e) {}
  };

  // --- 7. Buttons: Snapping, Undo, Redo, Export, Sync ---
  btnSnapToggle.onclick = () => {
    isSnappingEnabled = !isSnappingEnabled;
    btnSnapToggle.classList.toggle("active", isSnappingEnabled);
    try {
      const iWin = previewIframe.contentWindow;
      if (iWin && iWin.__canvascodeToggleSnap) {
        iWin.__canvascodeToggleSnap(isSnappingEnabled);
      }
    } catch (e) {}
  };

  btnUndo.onclick = () => {
    try {
      const iWin = previewIframe.contentWindow;
      if (iWin && iWin.__canvascodeUndo) iWin.__canvascodeUndo();
    } catch (e) {}
  };

  btnRedo.onclick = () => {
    try {
      const iWin = previewIframe.contentWindow;
      if (iWin && iWin.__canvascodeRedo) iWin.__canvascodeRedo();
    } catch (e) {}
  };

  btnExportPrompt.onclick = () => {
    try {
      const iWin = previewIframe.contentWindow;
      if (iWin && iWin.__canvascodeTriggerExport) {
        iWin.__canvascodeTriggerExport();
      }
    } catch (e) {}
  };

  btnSyncCode.onclick = () => {
    // Switch to sync tab
    tabBtns.forEach(b => b.classList.remove("active"));
    tabPanes.forEach(p => p.classList.remove("active"));
    const syncTabBtn = document.querySelector('.tab-btn[data-tab="sync"]');
    if (syncTabBtn) syncTabBtn.classList.add("active");
    document.getElementById("tab-sync").classList.add("active");
  };

  btnApplySync.onclick = async () => {
    if (diffHistory.length === 0) {
      alert("当前没有改动需要同步。请先在画布上微调组件！");
      return;
    }

    const projectPath = syncProjectPath.value.trim();
    if (!projectPath) {
      alert("请输入或选择您的本地前端工程目录！");
      return;
    }

    // Call Tauri Rust Backend if available
    if (window.__TAURI__ && window.__TAURI__.core) {
      try {
        const res = await window.__TAURI__.core.invoke("apply_code_sync", {
          projectPath: projectPath,
          diffItems: diffHistory
        });
        alert("🎉 恭喜！改动已成功写回本地源文件！\n" + res);
      } catch (err) {
        alert("写回失败: " + err);
      }
    } else {
      // Browser preview mode fallback
      alert("🎉 [模拟模式] 代码已生成！在桌面端运行时将直接写入:\n" + projectPath);
    }
  };

  // Initial responsive zoom fit on load
  window.addEventListener("resize", () => {
    fitZoomForDevice(currentDevice);
  });
  setTimeout(() => fitZoomForDevice("desktop"), 300);
})();
