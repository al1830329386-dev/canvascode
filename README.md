# 🎨 CanvasCode

<div align="center">

<h3>Turn Any Webpage into an Interactive Figma/PPT Canvas</h3>

<p><strong>Visual Micro-Adjustments in Real Browser • 1-Click Multimodal AI Prompt Compiler (Cursor / Claude / Gemini / Windsurf)</strong></p>

<p>像做 PPT 一样在真实网页上拖拽拉伸微调，一键生成供 AI 编程使用的精准规格书与视觉截图</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/version-1.0.0-blue.svg?style=for-the-badge" alt="Version" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-GPL--3.0-blue.svg?style=for-the-badge" alt="License: GPL-3.0" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Platform-Chrome%20%7C%20Edge%20%7C%20Brave-purple.svg?style=for-the-badge" alt="Platform" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Dependencies-Zero-orange.svg?style=for-the-badge" alt="Zero Dependencies" /></a>
  <a href="#"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome" /></a>
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

## 🌟 什么是 CanvasCode？

**CanvasCode** 是一款专为**独立开发者、全栈工程师、UI/UX 设计师与 AI 创客**打造的浏览器端无代码可视化微调扩展。

当你使用 **v0 / Bolt.new / Lovable / Cursor** 快速生成前端界面时，往往 **90% 的页面结构已经成型，但剩下的 10% 细节**（边距不对齐、卡片太窄、按钮颜色不够亮、标题行距太挤）需要来回反复微调。用纯文字向 AI 描述这些细微调整极度痛苦，AI 常常**理解偏差、改错位置、破坏原有布局**。

**CanvasCode 彻底颠覆这一过程：**
> 像在 **Figma** 或 **PPT** 里排版一样，直接在运行中的真实网页上：**自由拖拽、8 个控制点拉伸尺寸、双击改文字、换色调边距**。点击一键导出，自动生成**高清改动对比截图**与**结构化 Tailwind / CSS 代码规格 Prompt**，直接粘贴给 AI，**一次命中，100% 落地！**

---

## ⚡ 痛点 vs 解决方案

| 传统纯文字与 AI 对话 😫 | 使用 CanvasCode 的神级工作流 ✨ |
| :--- | :--- |
| **模糊口述**：“把那个卡片往右挪一点，宽度调大一些，颜色换成亮一点的翠绿色” | **所见即所得**：直接用鼠标拖动卡片，8 个手柄拉伸到最舒适的尺寸，拾色器精准选色 |
| **AI 产生幻觉**：AI 改错了兄弟容器的 class，改乱了 flex / grid 布局结构 | **精准定位**：自动捕获 DOM 元素唯一选择器、前后具体尺寸与样式差值，零误伤 |
| **反复消耗 Token**：打字 5 分钟，AI 改了 3 轮依然对不齐，耗尽上下文窗口 | **一次性解决**：图文一体导出，同时包含**视觉对比截图**与**标准 Tailwind 类名**，AI 秒懂 |
| **必须懂专业 CSS 术语**：不懂 flex-shrink、box-sizing、rem 计算的新手寸步难行 | **零门槛操作**：实时像素 HUD 尺寸指示，像玩积木一样自由组合与调整 |

---

## ✨ 8 大核心功能特性

### 1. 📐 PPT / Figma 级 8 控制手柄自由拉伸变形
* **全向尺寸调整**：点击选中任意卡片、容器、图片或按钮，四周立即呼出 **8 个控制点**（四角 + 四边）。
* **实时像素 HUD**：拖拽过程中实时悬浮显示当前宽高（例如 `360px × 220px`）。
* **等比例缩放（Shift 锁定）**：按住 **`Shift` 键拖动角手柄**，自动保持原有宽高比进行等比放大或缩小，防止图片或组件失真变形！

### 2. 🧲 120 FPS GPU 磁吸拖拽与红线智能对齐
* **极致性能**：底层采用 `requestAnimationFrame` 与 CSS `translate3d` 硬件加速技术，千级节点复杂页面拖拽依然丝滑不卡顿。
* **智能磁吸吸附**：拖动元素靠近相邻卡片或兄弟节点的边界、中轴线时，**自动感应磁吸并弹出红色虚线对齐标尺**。
* **自由模式随时切**：支持一键切换【磁吸开启 / 自由平移】（快捷键：**`S` 键**），或在拖拽时**按住 `Alt` 键**临时忽略磁吸。

### 3. ⌨️ 双击极速改文字与快捷隐藏删除
* **双击即刻编辑**：页面上任何标题、段落、按钮或标签，直接**鼠标双击**即可唤起内联文本修改器，所改即所见。
* **一键移除冗余**：选中任意不需要的组件后，直接敲击键盘 **`Delete`** 或 **`Backspace`** 键，瞬间从画布中隐藏剔除。

### 4. ↩️ 完整无缝的撤销与重做系统 (Undo / Redo)
* **全量状态追溯**：不管是手柄拉伸、磁吸拖动、方向键平移、样式属性变更、文字修改还是元素删除，全部接入历史快照栈。
* **全平台快捷键**：全面支持 **`Ctrl + Z`（撤销）** 与 **`Ctrl + Y` / `Ctrl + Shift + Z`（重做）**，亦可点击工具栏面板中的按钮进行操作，误操作零焦虑。

### 5. 🎯 键盘 1px 像素级微调标尺
* **精密点阵微调**：选中元素后，敲击键盘方向键 **`↑` `↓` `←` `→`**，即可实现 1 像素级的微距定位。
* **步进飞跃**：按住 **`Shift` + 方向键** 可按 10 像素大步长快速移动，底部 HUD 坐标尺实时反馈。

### 6. 🛡️ 智能防挡悬浮微调面板 (Auto-Dodge)
* **全局自由拖拽**：按住工具栏顶部的把手 `⠿`，可将工具栏随意拖至屏幕任意角落停放；**双击顶部**立即恢复自动跟随。
* **四向视口避让**：自动计算组件与浏览器可视窗口边界，优先停靠上方，空间不足自动智能避让到下方、侧边或屏幕安全区域，绝不遮挡你正在微调的元素。
* **全键盘脱困**：随时按下 **`Esc` 键** 或点击页面空白区域，立即取消当前选中或关闭弹出层。

### 7. 📸 一键高清截图 + 图文一体 Prompt 编译器
* **全自动纯净截图**：点击【📸 一键截图 + 图文一体导出】，系统自动瞬间隐藏选框、手柄、标尺与工具栏，捕获纯净的高清渲染图，并**自动写入系统剪贴板**。
* **结构化 Prompt 编译器**：自动对比 DOM 修改前后的计算样式差异，生成包含【组件选择器】、【修改动机】、【自然语言指令】与【推荐 Tailwind CSS 类名（如 `w-[360px] bg-emerald-500 rounded-2xl`）】的标准 Markdown 规格书。
* **多模态大模型绝配**：把截图与 Prompt 同时喂给 **Claude 3.7 Sonnet / Cursor Agent / GPT-4o**，多模态视差校验 + 精确代码规格，AI 落地成功率达 100%！

### 8. 🔒 纯本地运行与 Shadow DOM 沙箱隔离
* **零样式污染**：所有 CanvasCode 的控制器、浮窗与提示框完全封装在 **Closed Shadow DOM** 内，宿主网页的任何 CSS 规则都不会影响扩展，扩展也绝不污染宿主样式。
* **绝对隐私安全**：100% 纯本地离线执行，无任何外发追踪请求，不收集任何用户隐私数据。

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
   git clone https://github.com/your-username/canvascode.git
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
|  6. 切换到 Cursor / Claude 3.7 / GPT-4o / Windsurf   |
|  7. Ctrl + V 粘贴图片与结构化 Prompt                  |
|  8. AI 秒级读懂视觉意图，精准修改你的 TSX / Vue / HTML |
+-------------------------------------------------------+
```

### 推荐配合的大模型与 IDE：
* **Cursor (Composer / Agent)**：直接把截图和 Markdown 规格书粘贴进 `Ctrl + L` 或 Composer，零歧义执行。
* **Claude 3.7 Sonnet / Claude Code CLI**：业界最强多模态视觉推理能力，结合 CanvasCode 提供的精确选择器与像素差值，生成极高质量的代码补丁。
* **GPT-4o (ChatGPT Canvas)**：精准识别前后视觉对比，自动替换 Tailwind 类名。
* **Windsurf (Cascade)**：直接在 Cascade 流中提交多模态改动指令。

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
- [ ] **VS Code / Cursor 官方扩展生态**：在编辑器侧边栏内嵌 Webview 画布，修改成果直接打通内嵌终端与 AI 对话窗口。
- [ ] **多端响应式模拟画布**：一键切换 iPhone 16 Pro、iPad、MacBook 等多种预设分辨率容器进行对比微调。

---

<div id="-english-overview"></div>

## 🌐 English Overview

**CanvasCode** is an open-source browser extension designed to eliminate the friction between front-end visual adjustments and AI code generation.

### The Core Problem
When generating web apps using **Cursor, v0, or Bolt**, 90% of the UI is generated well, but the final 10% (margins, sizes, alignments, colors) requires repetitive prompt iterations. Describing spatial changes in text (*"move this 8px right and make it slightly wider"*) frequently causes AI hallucinations and broken CSS layouts.

### How CanvasCode Solves It
1. **Figma/PPT-Style Resizing**: 8 interactive control handles for arbitrary sizing, with `Shift`-key aspect-ratio locking and real-time pixel HUDs.
2. **120 FPS Magnetic Snapping**: GPU-accelerated dragging (`translate3d` + `rAF`) with automatic magnetic snapping to neighboring edges and centers.
3. **Instant Text Editing & Deletion**: Double-click any element to edit text in place; hit `Delete`/`Backspace` to prune elements.
4. **Complete Undo / Redo**: Global `Ctrl + Z` and `Ctrl + Y` history snapshots for all transformations.
5. **1px Keyboard Micro-adjustments**: Precise movement using Arrow keys (1px) and `Shift + Arrow` (10px).
6. **Smart Auto-Dodge Toolbar**: Floating panel with 4-direction viewport collision avoidance and free dragging.
7. **1-Click Multimodal Export**: Captures clean full-resolution screenshots directly to your clipboard and compiles structured Markdown prompts with Tailwind CSS mappings for **Claude 3.7**, **Cursor**, and **GPT-4o**.
8. **100% Local & Private**: Sandboxed in a Shadow DOM with zero network telemetry or tracking.

---

## 📄 开源协议与版权声明 (License & Copyright)
 
 本项目采用 [GNU General Public License v3.0 (GPL-3.0)](LICENSE) 强开源协议。
 
* **自由与开源保障**：您可以免费使用、学习和修改本项目源码。
* **衍生开源义务 (Copyleft)**：基于本项目或包含本项目代码的任何衍生项目，必须同样以 GPL-3.0 协议完整公开源代码。禁止任何未经授权的闭源转售行为。
* **原作者与版权归属**：Copyright (C) 2026 **Allen** (and CanvasCode Contributors).

欢迎 Star 🌟、Fork 🍴 和提交 Pull Request！

<p align="center">
  Made with ❤️ by <strong>Allen</strong> for developers and creators who believe in multimodal AI-assisted design.
</p>

