# 📦 CanvasCode 软件发布与下载中心 (Release Center)

欢迎来到 **CanvasCode** 官方软件发布中心！这里提供经过编译打包的开箱即用版本，无需配置开发环境即可直接下载使用。

---

## 📥 最新发布版本 (v1.0.0)

### 1. 🖥️ CanvasCode Studio 独立桌面客户端 (Windows x64)

> 适合日常前端排版微调、响应式设备多端调试、直接将微调样式同步回写本地前端源文件（`.tsx` / `.vue` / `.html`）的开发者。

* **软件包名称**：[`canvascode-studio-windows-x64-v1.0.0.zip`](canvascode-studio-windows-x64-v1.0.0.zip)
* **体积**：仅 **~2.59 MB**（解压后可执行程序 `canvascode-studio.exe` 仅 **8.5 MB**，非 Electron 臃肿架构，极低内存消耗）
* **运行平台**：Windows 10 / Windows 11 (x64)
* **系统要求**：内置 Microsoft Edge WebView2 Runtime（Windows 10/11 系统通常已预装）
* **SHA-256 校验和**：
  ```text
  A6B6CDA5D879CF6E188A5ABD6603BC35C7D6A8389DC7FE5BCEAB4A183C862B3A
  ```

#### 🚀 桌面客户端使用说明：
1. 下载 `canvascode-studio-windows-x64-v1.0.0.zip` 并解压到任意目录；
2. 双击运行 `canvascode-studio.exe`；
3. 在顶部地址栏输入你的前端开发服务（例如 `http://localhost:5173`、`http://localhost:3000`）或直接使用内置沙箱；
4. 点击顶部设备图标切换 iPhone、iPad 或桌面宽屏分辨率，右侧 Inspector 实时双向微调，一键同步代码回写本地！

---

### 2. 🌐 CanvasCode 浏览器扩展 (Chrome / Edge / Brave)

> 适合日常随时随地在浏览器中拉伸网页、快速生成视觉截图与精准 Markdown 规格书配合 AI 对话的开发者。

* **软件包名称**：[`canvascode-extension-v1.0.0.zip`](canvascode-extension-v1.0.0.zip)
* **体积**：仅 **~23 KB**（零外部运行时依赖，纯原生 Shadow DOM 隔离）
* **支持浏览器**：Google Chrome, Microsoft Edge, Brave, 360极速浏览器等所有 Chromium 内核浏览器
* **SHA-256 校验和**：
  ```text
  B2CE1E0105EECF0D3FDD09935D99F9C3829AAF5DD84A5DF787C8E8A9938575E5
  ```

#### 🚀 浏览器扩展安装说明：
1. 下载 `canvascode-extension-v1.0.0.zip` 并解压到本地文件夹；
2. 打开浏览器扩展管理页面：
   * Chrome：`chrome://extensions`
   * Edge：`edge://extensions`
3. 开启右上角 **【开发者模式】** 开关；
4. 点击 **【加载已解压的扩展程序】**，选择解压后的文件夹即可安装完成！

---

## 🔒 安全与完整性校验

在 Windows PowerShell 中可运行以下命令校验软件包哈希值：

```powershell
Get-FileHash -Algorithm SHA256 .\canvascode-studio-windows-x64-v1.0.0.zip
Get-FileHash -Algorithm SHA256 .\canvascode-extension-v1.0.0.zip
```

---

## 📄 开源协议 (License)

CanvasCode 采用 **[GNU General Public License v3.0 (GPL-3.0)](../LICENSE)** 强开源协议保护。
版权所有 (C) 2026 **Allen (@al1830329386-dev)** 及 CanvasCode 贡献者。
