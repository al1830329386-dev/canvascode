# 🎨 CanvasCode

<div align="center">

<h3>Turn Any Webpage into an Interactive Figma/PPT Canvas</h3>

<p><strong>Visual Micro-Adjustments in Real Browser • 1-Click Multimodal AI Prompt Compiler</strong></p>

<p>像做 PPT 一样在真实网页上拖拽拉伸微调，一键生成供 AI 编程使用的精准规格书与视觉截图</p>

<p align="center">
  <a href="https://al1830329386-dev.github.io/canvascode/"><img src="https://img.shields.io/badge/Web%20Studio-免安装在线试玩-indigo.svg?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Web Studio" /></a>
  <a href="https://github.com/al1830329386-dev/canvascode/releases"><img src="https://img.shields.io/badge/version-1.0.0-blue.svg?style=for-the-badge" alt="Version" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-GPL--3.0-blue.svg?style=for-the-badge" alt="License: GPL-3.0" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Desktop-Tauri%20%7C%20Rust-brightgreen.svg?style=for-the-badge" alt="Desktop: Tauri" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Browser-Chrome%20%7C%20Edge-purple.svg?style=for-the-badge" alt="Browser: Extension" /></a>
  <a href="https://github.com/al1830329386-dev/canvascode/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome" /></a>
</p>

<p align="center">
  <a href="https://al1830329386-dev.github.io/canvascode/">🚀 免安装在线试玩 (Web Studio)</a> •
  <a href="#-为什么做-canvascode">💡 为什么做 CanvasCode</a> •
  <a href="releases/README.md">📦 软件下载中心</a> •
  <a href="#-双形态架构浏览器插件--桌面独立工作台-studio">💻 双形态模式</a> •
  <a href="#-核心好用特性">✨ 功能特性</a> •
  <a href="#️-快捷键速查表">⌨️ 快捷键</a> •
  <a href="#-快速安装与启动桌面端">🚀 安装与启动</a> •
  <a href="#-搭配现代-ai-编程助手的工作流">🤖 AI 协同</a> •
  <a href="#-english-overview">🌐 English</a>
</p>

<p align="center">
  <img src="assets/demo.gif" alt="CanvasCode Live Demo - Visual Micro-Adjustments on Real Webpages" width="880" />
</p>

</div>

---

## 💡 为什么做 CanvasCode？

用 AI 生成网页虽然神速，但真正写过前端的朋友都懂：**最折磨人的永远是剩下的 10% 细节微调**。
- 某个卡片总觉得窄了十几像素，看起来很局促；
- 按钮底色不够亮，想换个更清爽的色彩；
- 标题跟副标题行距太贴，视觉呼吸感不够；
- 页面角落多出了几个没用的占位元素，想随手删掉……

这时候如果纯靠打字去跟 AI 描述：
> *“把第二排左边那个卡片调宽一点，右侧外边距加 8px，颜色改成偏浅一点的蓝……”*

实际结果往往很让人抓狂：**你打了 5 分钟字，AI 改了 3 轮不仅没对齐，还经常改错其他容器的 class，甚至直接把整页的布局改散架。**

**既然我们最习惯的排版直觉是像用 Figma 或做 PPT 一样直接用手去拖、拉、拽，为什么不能直接在网页上改好呢？**

这就是做 **CanvasCode** 的初衷：
让你直接在浏览器里像玩画布一样自由拖拽位置、拉伸宽高、双击改文字、换颜色。调到满意后，**一键导出纯净高清对比图 + 结构化的样式改动说明**，直接粘给 AI，省去所有打字扯皮的沟通成本。

---

## ⚡ 纯文字沟通 vs CanvasCode 直觉操作

| 纯打字跟 AI 扯皮 😫 | 用 CanvasCode 直接上手 ✨ |
| :--- | :--- |
| **口述很抽象**：“卡片往右挪一点，稍微调大点” | **所见即所得**：鼠标直接拽到合适位置，8 个手柄拉到最舒服的尺寸 |
| **AI 容易改偏**：改错了兄弟组件，甚至改坏原有排版 | **精准定位**：自动捕获被改元素的唯一定位符，样式差值精确到像素，不伤无辜代码 |
| **反复消耗精力**：打字 5 轮来回试错，耗费大量时间与上下文 | **改完即走**：一键生成视觉对比图与标准样式规格，直接粘进 AI 对话框 |
| **记不住属性名**：遇到冷门 CSS 属性还要翻文档查类名 | **零心智负担**：实时显示像素尺寸，像搭积木一样随心微调 |

---

## 💻 双形态架构：浏览器插件 + 桌面独立工作台 (Studio)

CanvasCode 现已提供两种使用形态，满足不同场景下的前端排版与微调需求：

### 1. 🌐 浏览器扩展版 (Browser Extension)
* **轻量免安装**：直接装入 Chrome / Edge / Brave 浏览器。
* **随时随地介入**：在日常网页浏览、远程生产系统、或任何已运行的 Web 页面上一键开启 PPT 级视觉画布。
* **即调即走**：调完一键生成视觉对比截图与精准 Markdown 规格，随手粘给 AI 助手。

### 2. 🖥️ CanvasCode Studio 独立桌面工作台 (Desktop App)
* **超轻量原生架构**：基于 **Tauri + Rust** 打造，可执行文件仅 **~13MB**，内存消耗仅为 Electron 的十分之一。
* **多端设备模拟器**：内置常用视口一键切换（桌面宽屏 `1440×900`、iPad 平板 `820×1180`、iPhone 手机 `393×852`、自由响应式容器）。
* **画布缩放与居中**：支持 `Fit` 自适应、`50% ~ 200%` 画布缩放、点阵网格辅助背景。
* **右侧实时属性面板 (Inspector)**：双向绑定！直接在右侧面板输入精确数值调整宽、高、内边距、字号、圆角或选取色彩。
* **本地代码直接同步 (Code Sync)**：通过 Rust 原生系统能力突破浏览器沙箱，画布上的可视化修改可直接选择本地源文件（`.tsx` / `.vue` / `.html`）一键写回磁盘！

---

## ✨ 核心好用特性

### 1. 📐 像 PPT 一样自由拉伸尺寸（8 个控制手柄）
* 点选任意卡片、容器、图片或按钮，四周立即唤出 **8 个控制手柄**（四角 + 四边）。
* 拖动过程中实时悬浮显示具体宽高像素（例如 `360px × 220px`）。
* **按住 `Shift` 键拖角手柄**可等比例缩放，保证图片和图标绝对不拉伸变形。

### 2. 🧲 磁吸对齐与辅助线（拖拽丝滑不卡顿）
* 底层采用 GPU 硬件加速，大页面拖动也保持 120 FPS 丝滑顺手。
* 拖拽组件靠近相邻卡片或居中轴线时，会自动感应吸附并亮起红色对齐线。
* 按 **`S` 键** 随时开闭磁吸，或者在拖动时**按住 `Alt` 键**临时进入纯自由移动。

### 3. ⌨️ 双击直接改文字，Delete 键随手删除
* 标题、正文、按钮上的文案，**直接鼠标双击**即可原地打字编辑，改完即见效果。
* 界面上多余的占位块或无用组件，选中后按键盘 **`Delete` 或 `Backspace`** 一键清爽剔除。

### 4. ↩️ 完整的撤销与重做（手滑改错不用慌）
* 拉伸、拖位移、改字、删组件、调样式，每一步改动都自动记录在历史栈中。
* 随时按 **`Ctrl + Z`（撤销）** 和 **`Ctrl + Y`（重做）**，随便折腾，改后悔了随时退回。

### 5. 🎯 键盘方向键像素级微调
* 选中组件后，轻按键盘 **方向键（↑ ↓ ← →）** 即可进行 1 像素级的精密微调。
* 按住 **`Shift` + 方向键** 可按 10 像素步长快速平移，专治强迫症对不齐。

### 6. 🛡️ 悬浮工具栏智能避让（绝不挡视线）
* 工具栏支持鼠标按住顶部把手 `⠿` 自由拖动停放；**双击顶部**立即恢复自动跟随。
* 内置视口边界感应，组件靠近屏幕边缘时工具栏会自动避让到上下侧边，绝不傻傻挡住你正在调的按钮。
* 随时按 **`Esc` 键** 或点击空白处取消选中。

### 7. 📸 一键导出截图与规格说明
* 点击【📸 一键截图 + 图文一体导出】，系统自动隐藏手柄和辅助线，捕获纯净的高清渲染图并写入系统剪贴板。
* 同时对比 DOM 修改前后的具体差异，生成带组件选择器、修改说明和 Tailwind CSS 类的标准 Markdown 规格书。
* 图片配上规格说明一起贴给多模态 AI，AI 既能“看懂”视觉改动，又有精确的像素代码依据。

### 8. 🔒 纯本地运行与 Shadow DOM 隔离
* 整个插件的操作界面完全封装在独立 Shadow DOM 内，绝不会污染宿主网页的样式，网页 CSS 也不会干扰插件。
* 100% 纯本地运行，不包含任何外部埋点和请求，干干净净。

---

## ⌨️ 快捷键速查表

| 按键 / 操作 | 功能描述 | 适用场景 |
| :--- | :--- | :--- |
| **鼠标单击** | 选中网页元素，呼出高亮外框与微调工具栏 | 组件挑选 |
| **鼠标双击** | 快速编辑当前组件的文字内容 | 文案即改即见 |
| **拖拽顶部手柄 ⠿** | 拖动整个组件位置（靠近时自动磁吸对齐） | 宏观版式重排 |
| **拖拽四周 8 个角柄** | 自由拉伸尺寸（宽度 / 高度） | 容器大小调整 |
| **`Shift` + 拖拽角柄** | 锁定当前宽高比，进行**等比例缩放** | 图片/图标/头像缩放 |
| **`Delete` / `Backspace`** | 快速隐藏或删除选中的元素 | 剔除多余组件 |
| **`Ctrl + Z`** | 撤销上一步操作（支持拉伸/平移/修改/删除） | 恢复上一步 |
| **`Ctrl + Y`** (`Ctrl+Shift+Z`) | 重做已撤销的操作 | 恢复下一步 |
| **`↑` `↓` `←` `→` 方向键** | 1px 像素级微调组件坐标 | 精细对齐 |
| **`Shift` + 方向键** | 10px 大步长移动组件坐标 | 快速位移 |
| **`S` 键** | 切换磁吸对齐功能的开启与关闭 | 自由拖拽与规则排版切换 |
| **拖拽时按住 `Alt`** | 临时忽略所有磁吸辅助线，进入绝对自由移动 | 特殊微调 |
| **`Esc` / 点击空白区域** | 取消当前组件选择，或关闭导出弹窗 | 退出编辑状态 |
| **双击工具栏顶部** | 立即重置工具栏位置至智能防挡自动跟随 | 窗口复位 |

---

## 🚀 快速安装与使用

### 方式一：Chrome / Edge 扩展安装（推荐）

1. 将本项目克隆或下载解压到本地：
   ```bash
   git clone https://github.com/al1830329386-dev/canvascode.git
   ```
2. 打开 Chrome 或 Edge 浏览器，在地址栏输入：
   * Chrome: `chrome://extensions`
   * Edge: `edge://extensions`
3. 打开右上角的 **【开发者模式 (Developer Mode)】** 开关；
4. 点击左上角的 **【加载已解压的扩展程序 (Load Unpacked)】** 按钮；
5. 选择解压出的 `canvascode` 根目录文件夹即可完成安装！
6. *(可选)* 如果你想在本地打开的 HTML 文件（如 `file:///...`）中使用，请点击该扩展的【详细信息】，开启 **【允许访问文件网址】**。

### 方式二：运行 CanvasCode Studio 独立桌面工作台 🖥️

1. 克隆本项目并确保安装了 Rust 开发环境（`rustc --version`）：
   ```bash
   git clone https://github.com/al1830329386-dev/canvascode.git
   cd canvascode
   ```
2. 直接编译并运行桌面端：
   ```bash
   # 直接运行已编译的二进制
   npm run desktop:start
   # 或通过 Cargo 源码编译运行
   cargo run --manifest-path src-tauri/Cargo.toml
   ```
3. 桌面端启动后：
   * 在顶部地址栏输入你想调试的前端开发地址（如 `http://localhost:5173`、`http://localhost:3000` 或直接加载演示页）。
   * 点击顶部设备图标切换 iPhone、iPad 或桌面宽屏分辨率。
   * 在右侧 Inspector 面板实时双向修改尺寸、字号与色彩，或点击【⚡ 同步到本地文件】直接回写源码！

### 方式三：本地 0 安装体验测试页

直接双击打开项目中的 `test-page.html`，无需安装任何扩展或桌面环境，即可在任意浏览器中秒级体验完整的 8 手柄拉伸、磁吸对齐与 Prompt 导出！

---

## 🤖 搭配现代 AI 编程助手的工作流

CanvasCode 针对现代主流多模态 AI 辅助编程工具进行了专门的 Prompt 编译器优化：

```
+-------------------------------------------------------+
|  1. 在浏览器打开你的项目 (localhost / 生产环境)      |
|  2. 点击 CanvasCode 图标进入画布模式                  |
|  3. 鼠标拉伸、磁吸拖拽、换色、改字、删冗余元素        |
|  4. 点击 [📸 一键截图 + 图文一体导出]                |
|  5. 自动捕获高清截图 (已复制剪贴板) + 复制 Markdown   |
+-------------------------------------------------------+
                           │
                           ▼
+-------------------------------------------------------+
|  6. 切换到你的 AI 编程助手或对话界面                 |
|  7. Ctrl + V 粘贴图片与结构化 Prompt                  |
|  8. AI 秒级读懂视觉意图，精准修改你的 TSX / Vue / HTML |
+-------------------------------------------------------+
```

---

## 🏗️ 架构与技术实现 (Under the Hood)

* **零依赖运行环境 (Zero Dependencies)**：无任何庞大的外部 npm 运行时依赖，保持极小体积与极致加载速度。
* **Shadow DOM 沙箱隔离**：核心操作控件完全由 Web Components 原生 Shadow DOM 驱动，杜绝 CSS 命名空间冲突。
* **GPU 硬件加速引擎**：拖拽与平移计算基于 `requestAnimationFrame` (rAF) 与 CSS Transform，保证 120 FPS 丝滑操作体验。
* **Tailwind CSS 智能转换器**：内置常用样式的 Tailwind 类名映射器，自动将 `background-color: #10b981` 转换为 `bg-emerald-500`，将 `width: 320px` 转换为 `w-[320px]`，输出工业级规范代码。
* **基于 HTML5 Canvas 的多模态渲染**：内置轻量截图引擎，自动屏蔽调试层渲染，直接导出纯净修改结果。

---

## 🗺️ 未来演进路线 (Roadmap)

- [x] **v1.0.0 (Chrome / Edge 扩展)**：
  - [x] PPT / Figma 级 8 控点拉伸与 Shift 宽高比锁定
  - [x] 120 FPS GPU 磁吸拖拽与标尺智能吸附
  - [x] 双击改文字与 Delete / Backspace 快速删除
  - [x] 全局撤销/重做堆栈 (Ctrl+Z / Ctrl+Y)
  - [x] 键盘 1px / 10px 像素级精准微调
  - [x] 悬浮面板自由拖拽与视口智能防挡避让 (Auto-Dodge)
  - [x] 一键高清网页截图与结构化 Prompt 多模态导出
- [x] **v1.5.0 (CanvasCode Studio 独立桌面工作台)**：
  - [x] 基于 **Tauri v2 + Rust** 打造超轻量桌面客户端（仅 ~13MB 独立二进制，极致低内存）；
  - [x] **多端响应式模拟画布**：一键切换 iPhone 手机、iPad 平板与宽屏桌面视口；
  - [x] **实时属性检查器 (Inspector)**：右侧属性面板双向绑定，实时敲入像素数值精准调参；
  - [x] **本地源码直接同步 (Direct Code Sync)**：利用 Rust 系统级 IPC 突破浏览器沙箱限制，修改可一键安全回写到本地磁盘前端源文件！
- [ ] **v2.0.0 (AST 无损代码热替换与 IDE 插件生态)**：
  - [ ] 结合 Babel / SWC AST 解析实现组件级 TSX / JSX / Vue 模板无损语义替换；
  - [ ] 主流 IDE 编辑器侧边栏嵌入式 Webview 扩展生态。

---

<div id="-english-overview"></div>

## 🌐 English Overview

### 💡 Why CanvasCode?

Building web UIs with AI is remarkably fast and exciting. But as every developer knows all too well: **the most exhausting part is always that final 10% of detail polishing**.
- A card feels about 12 pixels too narrow and looks cramped;
- A button's background color feels dull and needs a fresher shade;
- The heading and subtitle are suffocatingly close, lacking visual breathing room;
- An awkward placeholder icon in the corner needs to be tossed out...

When you're forced to describe these visual tweaks in plain text:
> *"Make the second card on the left slightly wider, add 8px right margin, and change the blue to a lighter hue..."*

The reality is frustrating: **You spend 5 minutes typing, the AI takes 3 attempts, and instead of aligning properly, it edits the wrong sibling class or breaks your entire flex/grid layout.**

**Since our natural intuition for layout design is to grab things with our hands and drag, stretch, and reposition them—just like in Figma or PPT—why can't we do that directly on the live webpage?**

That is the single mission behind **CanvasCode**:
Turn your live browser into an interactive canvas. Drag positions, stretch bounding boxes with 8 handles, double-click to edit text, and pick colors directly on the live DOM. Once you're happy with how it looks, **1-click export a clean high-res screenshot and structured Markdown specifications** straight into your AI chat—saving you from endless back-and-forth prompt wrestling.

---

### ⚡ Text Prompts vs. CanvasCode Intuitive Workflow

| Text-Only AI Prompting 😫 | Hands-On with CanvasCode ✨ |
| :--- | :--- |
| **Vague & Abstract**: *"Nudge this card right a bit, make it slightly wider"* | **True WYSIWYG**: Grab the element with your mouse, stretch with 8 handles to the exact sweet spot |
| **AI Hallucinations**: Modifies wrong sibling containers or wrecks global CSS | **Pinpoint Targeting**: Automatically captures the unique DOM selector with pixel-accurate CSS diffs |
| **Context Exhaustion**: 5 rounds of prompting eating up token windows | **One-Shot Resolution**: 1-click export of visual screenshot + standard Tailwind CSS classes |
| **CSS Mental Overload**: Constantly looking up CSS syntax for simple adjustments | **Zero Cognitive Load**: Real-time pixel HUD indicator, adjust visually like building blocks |

---

### 💻 Dual Form Factor: Browser Extension + Desktop Studio

CanvasCode is designed to seamlessly adapt to your frontend workflow with two dedicated form factors:

#### 1. 🌐 Browser Extension (Chrome / Edge / Brave)
* **Zero-Setup Portability**: Installs directly into your daily browser.
* **Inspect Anywhere**: Launch on localhost development servers, staging environments, or live production web apps.
* **Instant Export**: Make micro-tweaks and export clean visual screenshots + Markdown diffs directly into your AI chat window.

#### 2. 🖥️ CanvasCode Studio (Standalone Desktop App)
* **Ultra-Lightweight Native Core**: Built with **Tauri v2 & Rust**, delivering a tiny **~13MB** binary with 10x lower memory overhead compared to typical Electron apps.
* **Multi-Device Responsive Frames**: 1-click preview and tweak across Desktop (`1440×900`), iPad (`820×1180`), iPhone (`393×852`), and fluid responsive layouts.
* **Canvas Controls**: Dot-grid background, canvas zoom (`50% ~ 200%`), and auto-fitting.
* **Real-Time Property Inspector**: Bidirectional property panel to directly edit width, height, padding, colors, border radius, and font size with live canvas synchronization.
* **Direct Local Code Sync**: Powered by native Rust system calls to bypass browser sandboxing—write visual modifications directly back to your local source code (`.tsx`, `.vue`, `.html`) on disk!

---

### ✨ Core Features

#### 1. 📐 Figma/PPT-Style Resizing (8 Control Handles)
* Click any card, container, image, or button to immediately spawn **8 control handles** (4 corners + 4 edges).
* A real-time floating HUD displays live width and height in pixels (e.g., `360px × 220px`).
* **Hold the `Shift` key while dragging corner handles** to lock the aspect ratio—preventing images and icons from distorting.

#### 2. 🧲 120 FPS Magnetic Snapping & Alignment Guidelines
* Built on GPU hardware acceleration (`requestAnimationFrame` + `translate3d`), remaining buttery-smooth even on dense, complex web pages.
* Dragging an element near neighboring cards or container centers automatically snaps with glowing red alignment guide lines.
* Toggle magnetic snapping on/off anytime with the **`S` key**, or **hold `Alt` while dragging** for temporary freeform movement.

#### 3. ⌨️ Instant In-Place Text Editing & Delete Key Removal
* **Double-click** any heading, paragraph, badge, or button text to edit copy directly in place with instant visual feedback.
* Clean up unnecessary layout clutter by selecting any unwanted element and hitting **`Delete`** or **`Backspace`**.

#### 4. ↩️ Comprehensive Undo & Redo (Zero-Stress Tweaking)
* Every action—resizing, dragging, text editing, styling changes, and deletions—is tracked in a local history snapshot stack.
* Full support for **`Ctrl + Z` (Undo)** and **`Ctrl + Y` (Redo)**. Experiment freely and revert mistakes in a millisecond.

#### 5. 🎯 1px / 10px Keyboard Precision Nudge
* Select an element and use the **Arrow keys (`↑` `↓` `←` `→`)** for 1-pixel precision positioning.
* Hold **`Shift` + Arrow keys** to jump by 10 pixels, satisfying even the strictest pixel-perfectionists.

#### 6. 🛡️ Auto-Dodge Floating Toolbar (Never Blocks Your View)
* Drag the toolbar freely by the top grip handle (`⠿`); **double-click the handle** to reset to smart auto-follow.
* Built-in viewport collision detection automatically repositions the panel to the opposite edge when nearing screen boundaries, ensuring your target element is never obscured.
* Press **`Esc`** or click any empty area to deselect or close modals.

#### 7. 📸 1-Click Multimodal Export (Screenshot + Structured Prompt)
* Click **【📸 1-Click Screenshot + Export Prompt】**: CanvasCode automatically hides handles and guidelines to take a clean screenshot directly to your system clipboard.
* Simultaneously compiles a structured Markdown document containing exact DOM selectors, user notes, and computed Tailwind CSS class diffs (e.g., `w-[360px] bg-emerald-500 rounded-2xl`).
* Paste both the screenshot and the prompt into your multimodal AI coding assistant for deterministic, one-shot code updates.

#### 8. 🔒 100% Local & Shadow DOM Sandboxed
* The entire CanvasCode UI is encapsulated within an isolated **Closed Shadow DOM**, guaranteeing zero CSS leakage into or from the host page.
* Operates 100% locally with zero external network tracking or telemetry.

---

### ⌨️ Keyboard Shortcuts Cheatsheet

| Key / Action | Description | Best For |
| :--- | :--- | :--- |
| **Left Click** | Select element, reveal handles & toolbar | Element picking |
| **Double Click** | Edit text content in place | Instant copy changes |
| **Drag Top Grip `⠿`** | Move element position (with magnetic snap) | Layout rearrangement |
| **Drag 8 Handles** | Resize element dimensions (width / height) | Sizing containers |
| **`Shift` + Drag Corner** | Lock aspect ratio for proportional scaling | Images, icons, avatars |
| **`Delete` / `Backspace`** | Hide or delete selected element | Pruning clutter |
| **`Ctrl + Z`** | Undo previous modification | Reverting mistakes |
| **`Ctrl + Y`** (`Ctrl+Shift+Z`) | Redo previously undone action | Re-applying tweaks |
| **`↑` `↓` `←` `→` Arrow Keys** | 1px micro-nudge positioning | Pixel alignment |
| **`Shift` + Arrow Keys** | 10px fast movement | Rapid repositioning |
| **`S` Key** | Toggle magnetic snapping on/off | Switching drag modes |
| **Hold `Alt` while dragging** | Temporarily bypass all magnetic snapping | Fine freeform placement |
| **`Esc` / Click Blank Area** | Deselect element / close dialogs | Exiting edit mode |
| **Double Click Toolbar Grip** | Reset toolbar position to auto-follow | Panel repositioning |

---

### 🚀 Quick Start & Installation

#### Option 1: Chrome / Edge Extension (Recommended)

1. Clone or download this repository:
   ```bash
   git clone https://github.com/al1830329386-dev/canvascode.git
   ```
2. Open Chrome or Edge and navigate to:
   * Chrome: `chrome://extensions`
   * Edge: `edge://extensions`
3. Enable **Developer mode** in the top-right corner;
4. Click **Load unpacked** in the top-left;
5. Select the cloned `canvascode` directory to install!
6. *(Optional)* To test on local HTML files (`file:///...`), click **Details** on the extension and enable **"Allow access to file URLs"**.

#### Option 2: CanvasCode Studio Desktop App (Tauri + Rust) 🖥️

1. Ensure Rust toolchain is installed (`rustc --version`):
   ```bash
   git clone https://github.com/al1830329386-dev/canvascode.git
   cd canvascode
   ```
2. Run or build the desktop app:
   ```bash
   # Run precompiled binary
   npm run desktop:start
   # Or build with Cargo
   cargo run --manifest-path src-tauri/Cargo.toml
   ```
3. In CanvasCode Studio:
   * Enter your local dev server URL (e.g. `http://localhost:5173` or `http://localhost:3000`) into the top address bar.
   * Switch between responsive device frames (Desktop, iPad, iPhone).
   * Edit properties visually in the right Inspector panel, or click **【⚡ Sync to Local File】** to write changes directly back to your source code on disk!

#### Option 3: Standalone Sandbox Test Page (Zero Install)

Simply double-click `test-page.html` in your browser. You can immediately test all 8-handle resizing, magnetic snapping, text editing, and prompt export with zero installation required!

---

### 🤖 AI Workflow Diagram

```text
+-------------------------------------------------------+
|  1. Open your web app (localhost or production)       |
|  2. Click CanvasCode extension icon to enter canvas   |
|  3. Drag, resize, edit text, pick colors visually     |
|  4. Click [📸 1-Click Screenshot + Export Prompt]     |
|  5. Clean screenshot copied to clipboard + Prompt     |
+-------------------------------------------------------+
                           │
                           ▼
+-------------------------------------------------------+
|  6. Switch to your multimodal AI coding assistant      |
|  7. Press Ctrl + V to paste screenshot & prompt       |
|  8. AI applies the precise CSS / TSX / Vue patch!     |
+-------------------------------------------------------+
```

---

### 🏗️ Under the Hood

* **Zero Dependencies**: 100% vanilla JavaScript with zero bloated build steps or runtime npm dependencies.
* **Shadow DOM Encapsulation**: Complete isolation from host CSS to prevent style collisions.
* **GPU Hardware Acceleration**: Transitions throttled with `requestAnimationFrame` and CSS transforms for smooth 120 FPS interaction.
* **Tailwind CSS Compiler**: Automatically converts visual style changes (e.g., `#10b981` → `bg-emerald-500`, `320px` → `w-[320px]`) into standard utility classes.
* **Client-Side Canvas Renderer**: Native high-res screenshot capture that hides editing artifacts automatically.

---

## ⭐ Star 走势与支持 (Star History)

如果 CanvasCode 对你的前端微调排版或 AI 辅助开发有所帮助，请为这个开源项目点一个 **Star ⭐️**！你的支持是作者持续优化演进的最大动力！

<p align="center">
  <a href="https://star-history.com/#al1830329386-dev/canvascode&Date">
    <img src="https://api.star-history.com/svg?repos=al1830329386-dev/canvascode&type=Date" alt="CanvasCode Star History Chart" width="700" />
  </a>
</p>

---

## 📄 开源协议与版权声明 (License & Copyright)
 
 本项目采用 [GNU General Public License v3.0 (GPL-3.0)](LICENSE) 强开源协议。
 
* **自由与开源保障**：您可以免费使用、学习和修改本项目源码。
* **衍生开源义务 (Copyleft)**：基于本项目或包含本项目代码的任何衍生项目，必须同样以 GPL-3.0 协议完整公开源代码。禁止任何未经授权的闭源转售行为。
* **原作者与版权归属**：Copyright (C) 2026 **Allen (@al1830329386-dev)** (and CanvasCode Contributors).

欢迎 Star 🌟、Fork 🍴 和提交 Pull Request！

<p align="center">
  Made with ❤️ by <strong>Allen (<a href="https://github.com/al1830329386-dev">@al1830329386-dev</a>)</strong> for developers and creators.
</p>


