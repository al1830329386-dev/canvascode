# Privacy Policy for CanvasCode

> Last Updated: September 14, 2026

CanvasCode ("we", "our", or "the extension") is committed to protecting your privacy. This Privacy Policy explains our practices regarding user data collection and use.

## 1. Information We Do NOT Collect
- **No Personal Data**: The extension does not collect any personal information (such as your name, email address, physical address, IP address, or device identifiers).
- **No Browsing History**: We do not monitor, log, or track the websites you visit or your browsing history.
- **No Keystroke Logging**: The extension does not record or transmit any keystrokes outside of the local keyboard shortcuts used to control the extension (e.g. arrow keys for element positioning or Ctrl+Z for undo).
- **No Authentication / Account**: The extension operates completely anonymously without requiring user sign-in or accounts.

## 2. How the Extension Operates
- **100% Local Execution**: All features—including visual element selection, CSS inspection, dimension stretching, drag-and-drop alignment, screenshot capture via HTML5 Canvas, and AI Prompt generation—run strictly locally inside your web browser.
- **Zero External Network Requests**: The extension does not send any HTTP/HTTPS requests to any remote analytics server, tracking service, or external API.
- **Local Storage**: Any temporary session state (such as undo history or modified element diffs) is held solely in browser memory and is discarded when the tab is closed or the session is exited.

## 3. Permissions Used and Why
- `activeTab`: Used solely to inject the visual tweak overlay into the specific webpage you explicitly choose to inspect when clicking the extension icon.
- `scripting`: Used to run the client-side tweak engine script in the active tab upon your request.
- `tabs`: Used to verify tab URLs to avoid injection into protected internal browser pages (such as `chrome://` URLs).
- `host_permissions` (`<all_urls>`, `file://*/*`): Required so developers can inspect and tweak elements on any web application or local HTML file they are actively developing.

## 4. Third-Party Sharing
We do not sell, rent, trade, or share any user data with third parties, advertisers, or data brokers.

## 5. Contact
If you have any questions or feedback regarding this Privacy Policy, please open an issue in the project's repository.
