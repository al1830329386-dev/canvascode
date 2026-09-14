# Contributing to CanvasCode

First off, thank you for considering contributing to **CanvasCode**! It's people like you that make open-source tools great.

CanvasCode is licensed under the [GNU General Public License v3.0 (GPL-3.0)](LICENSE). By contributing to this repository, you agree that your contributions will be licensed under the GPL-3.0 license.

---

## 🛠️ Local Development & Testing

CanvasCode is intentionally built with **zero external build tools or runtime dependencies** (100% pure vanilla JavaScript and Web APIs).

### Loading Extension Locally:
1. Open Chrome or Edge and navigate to `chrome://extensions/` (or `edge://extensions/`).
2. Enable **Developer mode** (开发者模式) in the top-right corner.
3. Click **Load unpacked** (加载已解压的扩展程序).
4. Select this project root directory (`ai-visual-tweak` / `canvascode`).
5. Open `test-page.html` or any web application to test the visual adjustments.

### Code Quality & Verification:
Before submitting a pull request, please verify that your changes introduce no JavaScript syntax errors:

```bash
node -c tweak-engine.js
node -c background.js
```

---

## 📜 Development Guidelines

1. **Zero Runtime Dependencies**: Do not introduce npm bundles or external JS libraries that break standalone loading unless thoroughly discussed.
2. **Style Isolation**: All injected elements, handles, and toolbars MUST live strictly inside the `ShadowRoot` container (`#ai-visual-tweak-host`). Never inject global `<style>` tags into the host document.
3. **120 FPS Interaction**: Ensure dragging and resizing avoid layout thrashing by throttling updates with `requestAnimationFrame`.
4. **Clean Git History**: Write clear, descriptive commit messages following standard conventional commits (e.g., `feat:`, `fix:`, `docs:`, `perf:`).

---

## 🐛 Reporting Bugs & Suggesting Features

- Use the GitHub Issue Tracker.
- Check if the issue has already been reported before creating a new one.
- Provide a clear description, browser version, and reproduction steps.
