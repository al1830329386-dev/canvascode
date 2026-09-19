# CanvasCode

<div align="center">

<p><strong>In-Browser Visual DOM Inspector & Multimodal AI Prompt Compiler</strong></p>
<p>在真实浏览器与 HTML 环境中像编辑画布一样可视化微调布局，自动编译为 Tailwind CSS 与结构化 AI 提示词</p>

<p align="center">
  <a href="https://al1830329386-dev.github.io/canvascode/"><img src="https://img.shields.io/badge/Web%20Studio-Live%20Demo-6366f1.svg?style=flat-square&logo=googlechrome&logoColor=white" alt="Web Studio" /></a>
  <a href="https://github.com/al1830329386-dev/canvascode/releases"><img src="https://img.shields.io/badge/release-v1.0.0-blue.svg?style=flat-square" alt="Version" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-GPL--3.0-blue.svg?style=flat-square" alt="License: GPL-3.0" /></a>
  <a href="https://github.com/al1830329386-dev/canvascode"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" /></a>
</p>

<p align="center">
  <a href="https://al1830329386-dev.github.io/canvascode/"><strong>在线体验 Web Studio</strong></a> •
  <a href="#overview">项目概述</a> •
  <a href="#product-matrix">形态矩阵</a> •
  <a href="#features">功能特性</a> •
  <a href="#quickstart">快速开始</a> •
  <a href="#hotkeys">快捷键规范</a> •
  <a href="#architecture">架构实现</a> •
  <a href="#english">English</a>
</p>

<p align="center">
  <img src="assets/demo.gif" alt="CanvasCode Interface Preview" width="880" />
</p>

</div>

---

<div id="overview"></div>

## 项目概述 (Overview)

现代前端开发与 AI 辅助编程极大加速了代码原型的生成，但在版式细节微调阶段（间距微调、容器尺寸收放、文字原位修正、层级遮挡调整），开发者往往需要在文本描述、开发者工具（DevTools）与源码之间反复切换，沟通与试错成本高昂。

**CanvasCode** 是一个面向真实 Web 环境的可视化 DOM 微调引擎与 Prompt 编译器。它直接在浏览器中为任意 DOM 元素赋予直观的物理编辑能力，并将可视化调整实时转换为精准的 Tailwind CSS 类名与结构化变更规格，打通“可视化调整 → 机器代码输出”的完整工作流。

---

<div id="product-matrix"></div>

## 产品形态矩阵 (Product Matrix)

CanvasCode 针对不同的工程开发场景，提供多层级的使用形态：

| 形态 | 定位 | 接入方式 | 典型场景 |
| :--- | :--- | :--- | :--- |
| **Web Studio** *(主推形态)* | 独立在线沙箱工作台 | 浏览器直接访问，零安装 | 本地 HTML 拖入即调、多端视口预览、模板原型快速搭建与纯净源码导出 |
| **Browser Extension** *(进阶形态)* | 任意网页外挂调试工具 | Chrome / Edge 扩展程序 | 针对正在运行的任意第三方网站（本地开发服务、线上系统、测试环境）一键注入微调 |
| **Script Tag** *(嵌入形态)* | 前端项目内联集成 | `<script src="tweak-engine.js"></script>` | 前端工程内部集成，供设计团队、产品经理或测试人员在预览环境中协作调参 |

---

<div id="features"></div>

## 核心技术特性 (Features)

### 1. 原位直接交互 (Direct In-Place Manipulation)
- **4 边框平移与磁吸吸附**：鼠标悬停于组件四周任意边缘（上/下/左/右）即可抓起平移，利用 GPU 硬件加速（`translate3d`）保持毫秒级流畅响应；移动靠近邻近元素或居中轴线时触发标线吸附。
- **原位文字直改 (In-Place Typography)**：双击任意文本节点即可原地进入编辑状态，按 `Enter` 保存，`Esc` 撤销，彻底消除阻断性的模态弹窗。
- **相对层级原地升降 (Non-Destructive Stacking Context)**：支持 `[上移一层]` 与 `[下移一层]`，通过相对定位与 `z-index` 调整视觉覆盖关系，确保元素保持物理绝对位置不变；另备有独立的物理次序同级对调。
- **双向树级穿透导航 (Hierarchy Traversal)**：提供 `[选父级]` 与 `[选子级]` 导航按钮，便于在复杂多层嵌套的 Flex / Grid 容器中快速循环下钻目标节点。

### 2. 模块化属性检查器 (Segmented Inspector)
- **文字样式**：字号微调步进器、字体加粗切换与独立文字配色板。
- **填充与外观**：容器背景色盘、0~64px 动态平滑圆角滑动条与全圆胶囊预设。
- **对称尺寸与间距控制器**：宽度与高度双联对称步进，配合自适应与全宽快捷键；外边距（Margin）与内边距（Padding）等宽排布并支持一键清零。
- **色轮与预设调色盘**：8 款高定工程色系搭配原生拾色器，自动换算对应 Tailwind 语义色。

### 3. 代码与 Prompt 编译器 (Code & Prompt Synthesis)
- **纯净源码一键导出**：一键生成脱除所有调试标识的纯净 HTML 源码。
- **Tailwind 类名双向映射**：计算属性差异并自动合成标准 Tailwind 类（如 `w-[320px] bg-emerald-500 rounded-xl`）。
- **结构化差异清单**：自动输出带有唯一定位选择器、变更前后对比及样式属性的标准 Markdown 报告，供 Cursor、Windsurf、Claude Code、Copilot 等多模态工具直接消费。

### 4. 运行时安全与沙箱隔离 (Architecture & Sandboxing)
- **Closed Shadow DOM 封装**：微调引擎的全部 UI 控件与覆盖层均运行在独立的封闭 Shadow DOM 内，实现与宿主网页样式的双向绝对隔离。
- **全生命周期历史栈**：内置完备的状态快照回放机制，全局支持 `Ctrl + Z`（撤销）与 `Ctrl + Y`（重做）。
- **零外部运行时依赖 (Zero Dependencies)**：纯标准原生 JavaScript 实现，无任何庞杂的第三方库与网络上报逻辑。

---

<div id="quickstart"></div>

## 快速开始 (Quickstart)

### 选项 A：在线使用 Web Studio (推荐)
直接访问已部署的 Web Studio 站点：  
👉 **[https://al1830329386-dev.github.io/canvascode/](https://al1830329386-dev.github.io/canvascode/)**
- 将本地 `.html` 文件直接拖拽进工作台即可开始微调。
- 支持在桌面端（1100px）、平板端（768px）与手机端（375px 真机比例）之间自由切换。

### 选项 B：安装 Chrome / Edge 浏览器扩展 (用于任意网页)
1. 克隆代码仓库：
   ```bash
   git clone https://github.com/al1830329386-dev/canvascode.git
   ```
2. 在浏览器打开扩展管理页面：
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`
3. 开启右上角 **开发者模式 (Developer Mode)**。
4. 点击 **加载已解压的扩展程序 (Load Unpacked)**，选中本仓库根目录即可。
5. 在任意网页点击工具栏 CanvasCode 图标即可唤出微调工具。

### 选项 C：嵌入已有前端项目
直接在 HTML 页面底部引入微调引擎脚本：
```html
<script src="tweak-engine.js"></script>
```

---

<div id="hotkeys"></div>

## 控制与快捷键规范 (Controls & Shortcuts)

| 操作 / 快捷键 | 功能定义 | 适用范围 |
| :--- | :--- | :--- |
| **单击元素** | 激活选中目标，呼出边界选框与属性面板 | 元素定位 |
| **双击文本** | 原地进入文本可编辑状态 | 文案修改 |
| **拖动四边框** | 平移组件坐标（默认启用磁吸吸附） | 版式调整 |
| **拖动 8 角点手柄** | 自由缩放组件宽高尺寸 | 容器尺寸调整 |
| **`Shift` + 拖角点** | 锁定纵横比进行等比缩放 | 图像、图标 |
| **`Delete` / `Backspace`** | 隐藏当前选中元素 | 冗余节点剔除 |
| **`Ctrl + Z`** | 撤销上一步操作 | 历史回滚 |
| **`Ctrl + Y`** | 重做已撤销的操作 | 历史前进 |
| **方向键 `↑` `↓` `←` `→`** | 1px 像素级微调坐标 | 精密对齐 |
| **`Shift` + 方向键** | 10px 步长快速微调 | 大步距位移 |
| **`S` 键** | 切换磁吸辅助对齐的开启/关闭 | 移动模式切换 |
| **`Esc` / 点击空白区域** | 取消当前选中状态 | 退出微调状态 |

---

<div id="architecture"></div>

## 架构说明 (Architecture)

```text
┌─────────────────────────────────────────────────────────────┐
│                       Host Page DOM                         │
│                                                             │
│   [Target Element] ◄────── Mutation Observer / In-Place     │
│          ▲                                                  │
└──────────┼──────────────────────────────────────────────────┘
           │ Custom Events / DOM Mutation
┌──────────┴──────────────────────────────────────────────────┐
│                 CanvasCode Core (Shadow DOM)                │
│  ┌────────────────────────┐    ┌─────────────────────────┐  │
│  │  Selection & Transform │    │   Segmented Inspector   │  │
│  │  - 4-Border Drag Engine│    │   - Typography / Colors │  │
│  │  - Snapping Guidelines │    │   - Sizing & Spacing    │  │
│  │  - 8-Handle Resizer    │    │   - Layer Stacking (Z)  │  │
│  └────────────────────────┘    └─────────────────────────┘  │
│  ┌────────────────────────┐    ┌─────────────────────────┐  │
│  │  State & History Stack │    │   Compiler & Exporter   │  │
│  │  - Undo / Redo (Ctrl+Z)│    │   - Tailwind Synthesizer│  │
│  │  - Action Deserializer │    │   - Structured Markdown │  │
│  └────────────────────────┘    └─────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

<div id="english"></div>

## English Overview

CanvasCode is a lightweight, zero-dependency visual DOM editor and multimodal AI prompt synthesizer designed for the real-world web. It turns any webpage or HTML document into an interactive visual canvas, enabling developers and designers to fine-tune spacing, dimensions, typography, and hierarchy directly on live DOM nodes, then compile visual changes into standard Tailwind CSS utilities and structured AI prompts.

### Technical Highlights
- **Direct DOM Manipulation**: PPT-style 4-border dragging with magnetic alignment lines, in-place inline text editing, and non-destructive z-index adjustments.
- **Segmented Inspector**: Modular property panel providing typography steppers, shape styling, symmetric margin/padding steppers, and dynamic border radius controls.
- **AI Code Synthesis**: Generates clean HTML exports, computed Tailwind CSS utility classes, and structured prompt diffs for LLM assistants (Cursor, Claude Code, Copilot).
- **Zero Dependencies & Closed Shadow DOM**: 100% vanilla JavaScript with strict style isolation from host application CSS.
- **Product Matrix**: Flagship zero-setup **Web Studio** for web testing, companion **Browser Extension** for third-party live page inspection, and embeddable **Script Tag**.

---

## 许可证 (License)

本项目基于 [GNU General Public License v3.0 (GPL-3.0)](LICENSE) 开源。

Copyright (C) 2026 **Allen (@al1830329386-dev)** and CanvasCode Contributors.
