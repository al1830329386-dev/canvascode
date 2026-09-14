# 🎨 CanvasCode

<div align="center">

<h3>Turn Any Webpage into an Interactive Figma/PPT Canvas</h3>

<p><strong>Visual Micro-Adjustments in Real Browser • 1-Click Multimodal AI Prompt Compiler</strong></p>

<p>像做 PPT 一样在真实网页上拖拽拉伸微调，一键生成供 AI 编程使用的精准规格书与视觉截图</p>

<p align="center">
  <a href="https://github.com/al1830329386-dev/canvascode/releases"><img src="https://img.shields.io/badge/version-1.0.0-blue.svg?style=for-the-badge" alt="Version" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-GPL--3.0-blue.svg?style=for-the-badge" alt="License: GPL-3.0" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Platform-Chrome%20%7C%20Edge%20%7C%20Brave-purple.svg?style=for-the-badge" alt="Platform" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Dependencies-Zero-orange.svg?style=for-the-badge" alt="Zero Dependencies" /></a>
  <a href="https://github.com/al1830329386-dev/canvascode/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome" /></a>
</p>

<p align="center">
  <a href="#-什么是-canvascode">🌟 核心亮点</a> •
  <a href="#-痛点-vs-解决方案">⚡ 痛点对比</a> •
  <a href="#-8-大核心功能特性">✨ 功能特性</a> •
  <a href="#️-快捷键速查表">⌨️ 快捷键</a> •
  <a href="#-快速安装与使用">🚀 安装指南</a> •
  <a href="#-搭配现代-ai-编程助手的工作流">🤖 AI 协同</a> •
  <a href="#️-未来演进路线-roadmap">🗺️ 路线图</a> •
  <a href="#-english-overview">🌐 English</a>
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

### 方式二：本地 0 安装体验测试页

直接双击打开项目中的 `test-page.html`，无需安装任何扩展即可在浏览器中体验 CanvasCode 完整的 8 手柄拉伸、磁吸吸附、双击改字与 Prompt 导出！

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

- [x] **v1.0.0 (当前版本 - Chrome 扩展)**：
  - [x] PPT / Figma 级 8 控点拉伸与 Shift 宽高比锁定
  - [x] 120 FPS GPU 磁吸拖拽与标尺智能吸附
  - [x] 双击改文字与 Delete / Backspace 快速删除
  - [x] 全局撤销/重做堆栈 (Ctrl+Z / Ctrl+Y)
  - [x] 键盘 1px / 10px 像素级精准微调
  - [x] 悬浮面板自由拖拽与视口智能防挡避让 (Auto-Dodge)
  - [x] 一键高清网页截图与结构化 Prompt 多模态导出
- [ ] **v2.0.0 (独立桌面端跨平台应用 - Desktop App)**：
  - 基于 **Tauri / Rust** 打造超轻量桌面客户端；
  - **直通本地文件系统**：突破浏览器沙箱限制，在画布上拖拽拉伸的修改，直接通过 Babel / SWC AST 解析写回本地源文件（如 `App.tsx`、`index.vue`），结合 Vite / Turbopack 实现真正的**所见即所得本地代码热更新**！
- [ ] **主流 IDE 编辑器官方扩展生态**：在编辑器侧边栏内嵌 Webview 画布，修改成果直接打通内嵌终端与 AI 对话窗口。
- [ ] **多端响应式模拟画布**：一键切换 iPhone 16 Pro、iPad、MacBook 等多种预设分辨率容器进行对比微调。

---

<div id="-english-overview"></div>

## 🌐 English Overview

**CanvasCode** is an open-source browser extension designed to eliminate the friction between front-end visual adjustments and AI code generation.

### The Core Problem
When generating web apps using AI coding tools, 90% of the UI is generated well, but the final 10% (margins, sizes, alignments, colors) requires repetitive prompt iterations. Describing spatial changes in text (*"move this 8px right and make it slightly wider"*) frequently causes AI hallucinations and broken CSS layouts.

### How CanvasCode Solves It
1. **Figma/PPT-Style Resizing**: 8 interactive control handles for arbitrary sizing, with `Shift`-key aspect-ratio locking and real-time pixel HUDs.
2. **120 FPS Magnetic Snapping**: GPU-accelerated dragging (`translate3d` + `rAF`) with automatic magnetic snapping to neighboring edges and centers.
3. **Instant Text Editing & Deletion**: Double-click any element to edit text in place; hit `Delete`/`Backspace` to prune elements.
4. **Complete Undo / Redo**: Global `Ctrl + Z` and `Ctrl + Y` history snapshots for all transformations.
5. **1px Keyboard Micro-adjustments**: Precise movement using Arrow keys (1px) and `Shift + Arrow` (10px).
6. **Smart Auto-Dodge Toolbar**: Floating panel with 4-direction viewport collision avoidance and free dragging.
7. **1-Click Multimodal Export**: Captures clean full-resolution screenshots directly to your clipboard and compiles structured Markdown prompts with Tailwind CSS mappings for modern multimodal AI coding tools.
8. **100% Local & Private**: Sandboxed in a Shadow DOM with zero network telemetry or tracking.

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


