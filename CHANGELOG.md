# 📝 Changelog

All notable changes to **CanvasCode** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-09-14

### 🎉 Initial Public Release

Turn any webpage into an interactive Figma/PPT canvas for instant visual micro-adjustments and multimodal AI prompt compilation.

#### ✨ Key Features
- **8-Handle PPT/Figma Sizing**: Corner and edge handles for smooth box resizing, with `Shift`-key aspect-ratio lock and real-time pixel HUD indicator.
- **120 FPS Magnetic Dragging**: High-performance GPU-accelerated drag-and-drop (`translate3d` + `rAF`) with automatic magnetic snapping and dynamic alignment guidelines.
- **In-place Text Editing & Deletion**: Double-click any text element to edit inline; hit `Delete` or `Backspace` to prune layout components.
- **Complete Undo / Redo**: Global `Ctrl + Z` and `Ctrl + Y` history stack (supporting up to 30 snapshots) for all mutations.
- **1px / 10px Pixel Nudge**: Keyboard directional arrow keys for micro-adjustments (`Arrow` = 1px, `Shift + Arrow` = 10px).
- **Auto-Dodge Floating Toolbar**: Draggable glassmorphic floating control panel with 4-direction viewport edge collision avoidance.
- **1-Click Multimodal Prompt & Screenshot Export**: Instant visual capture to clipboard alongside structured Markdown prompts with Tailwind CSS class mapping for modern multimodal AI coding assistants.
- **Zero Runtime Dependencies & Shadow DOM Isolation**: 100% vanilla JavaScript with full encapsulation inside Shadow Root, preventing any CSS leakage into host web apps.
