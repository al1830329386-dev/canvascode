# 🎨 CanvasCode

<div align="center">

<h3>Turn Any Webpage into an Interactive Figma/PPT Canvas</h3>

<p><strong>Visual Micro-Adjustments in Real Browser • 1-Click Multimodal AI Prompt Compiler</strong></p>

<p>像做 PPT 一样在网页与 HTML 上可视化拖拽拉伸微调，一键生成供 AI 编程使用的精准规格书与纯净代码</p>

<p align="center">
  <a href="https://al1830329386-dev.github.io/canvascode/"><img src="https://img.shields.io/badge/Web%20Studio-免安装在线体验-6366f1.svg?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Web Studio" /></a>
  <a href="https://github.com/al1830329386-dev/canvascode/releases"><img src="https://img.shields.io/badge/version-1.0.0-blue.svg?style=for-the-badge" alt="Version" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-GPL--3.0-blue.svg?style=for-the-badge" alt="License: GPL-3.0" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Architecture-Web%20%7C%20Extension%20%7C%20Tauri-brightgreen.svg?style=for-the-badge" alt="Architecture" /></a>
  <a href="https://github.com/al1830329386-dev/canvascode/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome" /></a>
</p>

<p align="center">
  <a href="https://al1830329386-dev.github.io/canvascode/">🌐 <strong>旗舰模式：Web Studio 在线试玩</strong></a> •
  <a href="#-产品形态矩阵网页端为主插件为辅">💻 产品形态矩阵</a> •
  <a href="#-为什么做-canvascode">💡 为什么做 CanvasCode</a> •
  <a href="#-核心硬核特性word-级排版--ppt-级手势">✨ 核心功能</a> •
  <a href="#️-快捷键速查表">⌨️ 快捷键</a> •
  <a href="#-进阶外挂chrome--edge-浏览器扩展使用">🔌 进阶扩展版</a> •
  <a href="#-搭配现代-ai-编程助手的工作流">🤖 AI 协同</a> •
  <a href="#-english-overview">🌐 English</a>
</p>

<p align="center">
  <img src="assets/demo.gif" alt="CanvasCode Live Demo - Visual Micro-Adjustments on Real Webpages" width="880" />
</p>

</div>

---

## 🚀 旗舰体验：CanvasCode Web Studio (免安装网页端)

> **首选使用方式**：无需下载任何文件、无需安装插件，任何浏览器点击即用：  
> 👉 **在线体验链接**：**[https://al1830329386-dev.github.io/canvascode/](https://al1830329386-dev.github.io/canvascode/)**

* **任意 HTML 拖拽即调**：直接把本地 `.html` 文件拖入浏览器，自动解析渲染为可视化画布。
* **代码片段快速粘贴**：支持随时粘贴任意 HTML / Tailwind 代码片段，即调即测。
* **4 大行业预设模板**：
  - **SaaS 官网**：Hero 大标题、渐变 CTA 按钮、Feature 卡片。
  - **电商卡片**：商品大图、原价与折扣标签、立即购买悬浮交互。
  - **移动 App**：用户中心、快捷金刚区、订单状态列表。
  - **数据看板**：关键 GMV 指标、转化趋势图表卡、交易流水明细。
* **多端真机视口切换**：桌面宽屏 (1100px)、平板端 (768px)、iPhone 真机黄金比例 (375px × 630px 带圆角与灵动岛)。
* **纯净代码一键导出**：微调拉伸、改字改色后，一键复制剥离了引擎标记的纯净 HTML 源码与 Tailwind CSS 类。

---

## 💻 产品形态矩阵：网页端为主，插件为辅

为满足不同前端场景，CanvasCode 提供三层梯度产品矩阵：

| 产品形态 | 推荐权重 | 适用场景 | 核心优势 |
| :--- | :--- | :--- | :--- |
| **CanvasCode Web Studio (网页旗舰版)** | ⭐⭐⭐⭐⭐ **首推主推** | 本地代码快速调试、原型排版搭建、零门槛跨端分享 | **0 门槛秒开**：免安装、免插件，支持任意 HTML 拖入与纯净代码导出 |
| **CanvasCode 浏览器扩展 (Extension)** | ⭐⭐⭐ **进阶外挂** | 针对**任意线上运行的第三方生产网站**进行实时调试与修改 | **突破同源沙箱限制**：在公司内网后台、线上系统或竞品网页上一键唤出微调工具 |
| **CanvasCode Desktop (独立桌面版)** | ⭐⭐ **本地深度协同** | 基于 Tauri v2 + Rust 构建的独立工程化工作台 | **文件系统双向联动**：利用 Rust 原生能力直接安全回写磁盘前端源码 (`.tsx` / `.vue`) |

---

## 💡 为什么做 CanvasCode？

用 AI 生成网页虽然神速，但真正写过前端的朋友都懂：**最折磨人的永远是剩下的 10% 细节微调**。
- 某个卡片总觉得窄了十几像素，看起来很局促；
- 按钮底色不够亮，想换个更清爽的高定色彩；
- 标题跟副标题行距太贴，视觉呼吸感不够；
- 页面角落多出了几个没用的占位元素，想随手删掉……

这时候如果纯靠打字去跟 AI 描述：
> *“把第二排左边那个卡片调宽一点，右侧外边距加 8px，颜色改成偏浅一点的蓝……”*

实际结果往往很让人抓狂：**你打了 5 分钟字，AI 改了 3 轮不仅没对齐，还经常改错其他容器的 class，甚至直接把整页的布局改散架。**

**既然我们最习惯的排版直觉是像做 PPT 一样直接用手去拖、拉、拽，为什么不能直接在网页上改好呢？**

这就是做 **CanvasCode** 的初衷：
让你直接在浏览器里像玩画布一样自由拖拽位置、拉伸宽高、双击改文字、换颜色。调到满意后，**一键导出纯净代码或结构化样式改动说明**，直接粘给 AI，省去所有打字扯皮的沟通成本。

---

## ⚡ 纯文字沟通 vs CanvasCode 直觉操作

| 纯打字跟 AI 扯皮 😫 | 用 CanvasCode 直接上手 ✨ |
| :--- | :--- |
| **口述很抽象**：“卡片往右挪一点，稍微调大点” | **所见即所得**：鼠标直接抓起边框平移，拉伸到最舒服的尺寸 |
| **AI 容易改偏**：改错了兄弟组件，甚至改坏原有排版 | **精准定位**：自动捕获被改元素的唯一定位符，样式差值精确到像素，不伤无辜代码 |
| **反复消耗精力**：打字 5 轮来回试错，耗费大量时间与上下文 | **改完即走**：一键生成纯净新 HTML 代码或标准 Tailwind 样式变更规格 |
| **记不住属性名**：遇到冷门 CSS 属性还要翻文档查类名 | **零心智负担**：Word 经典功能分区，像搭积木一样随心微调 |

---

## ✨ 核心硬核特性：Word 级排版 + PPT 级手势

### 1. PPT 级四周任意边框拖拽平移
- 彻底摒弃遮挡视线的冗余拖拽手柄，鼠标悬停在组件的**上、下、左、右任意一条边框**，光标即时变为四向抓手手势。
- 按住边框即可随手平移组件位置，带微蓝半透明发光反馈与 GPU 毫秒级硬件加速。

### 2. 磁吸对齐与辅助标线
- 拖拽组件靠近相邻元素或居中轴线时，自动感应吸附并亮起粉红色智能对齐标线。
- 导航栏专属磁吸开关随时一键切换：开启 = 智能对齐吸附；关闭 = 纯自由无阻尼移动。

### 3. 沉浸式原地改文字（In-Place Edit）
- 彻底告别浏览器丑陋且割裂的 `prompt()` 弹窗。
- **双击任意文字**（标题、正文、按钮文案），文字即刻变为原生可输入光标，带紫色微发光聚焦框；敲完按 `Enter` 立即保存，按 `Esc` 原样撤销。

### 4. 经典 Word Ribbon 分区属性检查器
微调面板对标经典 Word / Office 严谨模块化分区，彻底告别散乱堆叠：
- **字体与文字格式**：字号微调步进（A⁻ / 数值 / A⁺）+ 加粗按钮 + 专属文字颜色盘。
- **外观与形状底色**：独立背景色盘 + **0~64px 平滑圆角动态滑动条**（带实时数值徽章与一键全圆）。
- **尺寸与间距对称布局**：`宽 [-][+]` 紧贴 `高 [-][+]`，右侧对齐 `100%宽` 与 `自适应`；`外距 M [-][+]` 紧贴 `内距 P [-][+]`，配备一键清零。
- **层级排列与操作底栏**：Z-Index 上移/下移、同级对调、截图导出、元素隐藏与全部重置。

### 5. 图层 Z-Index 相对升降（原地不动改变遮挡）
- 还原真实 PPT/Word 设计心智：点击 **`[ 上移一层 ]` / `[ 下移一层 ]`** 时，组件**100% 保持在原处绝对不动**，只改变垂直于屏幕的堆叠覆盖关系。
- 另提供独立的 **`[ ⇄ 对调位置 ]`** 按钮，专门用于网格或流式布局中与隔壁卡片对换物理排序次序。

### 6. 双向循环层级穿透（选父级 / 选子级）
- 遇到复杂嵌套卡片时，工具条顶部配备 **`[ ⇪ 选父级 ]`** 与 **`[ ⇩ 选子级 ]`** 双向导航，轻松循环下钻卡片内部的图片、标题、价格或按钮。

### 7. 8 色高定设计师微光色盘 + 渐变色轮
- 内置深黑、中灰、纯白、科技蓝、翡翠绿、优雅紫、珊瑚红、暖阳橙 8 色预设。
- 搭配微型渐变色轮圆钮，支持调用原生取色器选取任意自定义 HEX 颜色，并自动联动 Tailwind 色系映射。

### 8. 全生命周期撤销与重做
- 位移、拉伸、改字、圆角、调色、层级升降与删除，全部自动压入本地撤销栈。
- 完整支持 **`Ctrl + Z`（撤销）** 与 **`Ctrl + Y`（重做）**，随便折腾无负担。

---

## ⌨️ 快捷键速查表

| 按键 / 操作 | 功能描述 | 适用场景 |
| :--- | :--- | :--- |
| **鼠标单击** | 选中网页元素，呼出高亮选框与属性面板 | 组件挑选与定位 |
| **鼠标双击** | 原地直接打字编辑文字文案 | 标题、段落、按钮文案微调 |
| **按住四周任意边框拖拽** | 平移组件位置（靠近邻近元素自动磁吸吸附） | 宏观版式快速重排 |
| **拖拽四周 8 个角柄** | 自由拉伸容器宽度与高度 | 尺寸微调 |
| **`Shift` + 拖拽角柄** | 锁定当前宽高比进行**等比例缩放** | 图片、图标、头像缩放 |
| **`Delete` / `Backspace`** | 快速隐藏选中的元素 | 剔除多余组件 |
| **`Ctrl + Z`** | 撤销上一步操作（支持位移/拉伸/改字/改色等全部操作） | 恢复上一步 |
| **`Ctrl + Y`** (`Ctrl+Shift+Z`) | 重做已撤销的操作 | 恢复下一步 |
| **`↑` `↓` `←` `→` 方向键** | 1px 像素级微调组件坐标 | 精细对齐 |
| **`Shift` + 方向键** | 10px 快速移动组件坐标 | 大步长位移 |
| **`S` 键** | 切换磁吸对齐功能的开启与关闭 | 自由拖拽与规则对齐切换 |
| **`Esc` / 点击空白区域** | 取消当前组件选择，退出编辑状态 | 页面浏览恢复 |

---

## 🔌 进阶外挂：Chrome / Edge 浏览器扩展使用

当你需要对**外部任意正在运行的第三方网站**（例如线上生产系统、公司内网、竞品页面）进行一键入侵微调时，可使用扩展版：

1. 克隆本项目到本地：
   ```bash
   git clone https://github.com/al1830329386-dev/canvascode.git
   ```
2. 打开 Chrome 或 Edge，进入扩展管理页：
   * Chrome：`chrome://extensions`
   * Edge：`edge://extensions`
3. 打开右上角的 **【开发者模式 (Developer Mode)】**；
4. 点击左上角的 **【加载已解压的扩展程序 (Load Unpacked)】**；
5. 选择项目根目录文件夹即可完成安装！
6. 在任意网页点击浏览器右上角的 CanvasCode 图标，即可即刻在当前页面唤起微调画布！

---

## 🤖 搭配现代 AI 编程助手的工作流

CanvasCode 与 Cursor、Windsurf、Claude Code、GitHub Copilot、v0 等多模态 AI 工具形成完美闭环：

```text
┌─────────────────────────────────────────────────────────────┐
│ 1. 打开 Web Studio (网页版) 或在任意网页点击插件图标         │
│ 2. 像做 PPT 一样随手拉伸、平移卡片、双击改文字、换颜色      │
│ 3. 点击【导出 HTML】或【导出截图 + 变更规格】               │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. 切换到你的 AI 编程助手窗口                               │
│ 5. Ctrl + V 粘贴高清渲染图与自动生成的 Tailwind 规格        │
│ 6. AI 零歧义秒级读懂视觉意图，精准修改你的前端代码！         │
└─────────────────────────────────────────────────────────────┘
```

---

## 🏗️ 架构与技术实现

* **零外部依赖 (Zero Dependencies)**：核心微调引擎 100% 采用原生标准 JavaScript 与 DOM API 编写，无任何庞大冗余的 npm 依赖包。
* **Shadow DOM 沙箱隔离**：所有控制手柄、属性检查器与选框均封装于原生 Closed Shadow DOM 中，绝对不污染宿主网页，宿主 CSS 也无法破坏微调面板。
* **GPU 硬件加速**：位移与形变基于 `transform: translate3d` 与 `requestAnimationFrame`，拖拽毫无阻滞感。
* **Tailwind CSS 智能转换器**：内置常用样式与 Tailwind 映射器，自动将实时十六进制颜色、像素尺寸换算为标准的 Tailwind 规范类名。

---

## 📄 开源协议与版权声明 (License)

本项目采用 [GNU General Public License v3.0 (GPL-3.0)](LICENSE) 开源协议。

* **自由与开源保障**：您可以免费使用、学习和修改本项目源码。
* **衍生开源义务 (Copyleft)**：基于本项目或包含本项目代码的任何衍生项目，必须同样以 GPL-3.0 协议完整公开源代码。禁止任何未经授权的闭源转售行为。
* **原作者与版权归属**：Copyright (C) 2026 **Allen (@al1830329386-dev)** (and CanvasCode Contributors).

欢迎 Star 🌟、Fork 🍴 和提交 Pull Request！

<p align="center">
  Made with ❤️ by <strong>Allen (<a href="https://github.com/al1830329386-dev">@al1830329386-dev</a>)</strong> for developers and designers.
</p>
