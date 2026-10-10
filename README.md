# Lugar's Personal Homepage

这是 Lutong (Lugar) Zou 的个人学术主页源码，主要用于展示个人简介、教育与研究经历、论文/项目成果，以及音乐、摄影等个人内容。

项目基于 Create React App、React 18 和 TypeScript 构建，使用 Material UI 组织界面，通过 React Router 实现单页应用路由，并部署至 GitHub Pages。

- 站点地址：[https://LugarZou.github.io](https://LugarZou.github.io)
- 源码仓库：[https://github.com/LugarZou/LugarZou.github.io](https://github.com/LugarZou/LugarZou.github.io)

## 页面与功能

| 路径          | 页面             | 主要内容                                                 |
| ------------- | ---------------- | -------------------------------------------------------- |
| `/`         | Overview         | 首页欢迎语、研究兴趣和个人照片                           |
| `/CV`       | Curriculum Vitae | 个人信息、教育经历、研究经历、语言、奖项和技术工具       |
| `/works`    | Works            | 按研究方向组织的论文、预印本、Workshop 工作与项目        |
| `/besides`  | Besides          | 中英文个人介绍、音乐播放器、相册与朋友相关内容           |
| `/Showcase` | Showcase         | 技能主题图片墙；路由仍然有效，但入口目前从顶部导航中隐藏 |

顶部栏提供站内导航和 Google Scholar 链接；所有页面共享背景、页头和页脚。

## 技术栈

### 核心框架

| Package              | 版本        | 用途                                                                      |
| -------------------- | ----------- | ------------------------------------------------------------------------- |
| `react`            | `^18.2.0` | 组件与状态管理基础                                                        |
| `react-dom`        | `^18.2.0` | 将 React 应用挂载到浏览器 DOM                                             |
| `typescript`       | `^4.9.5`  | 静态类型检查与 TSX 支持                                                   |
| `react-router-dom` | `^6.18.0` | 使用`createBrowserRouter`、嵌套路由和 `<Outlet>` 组织页面             |
| `react-scripts`    | `5.0.1`   | Create React App 提供的开发服务器、Webpack/Babel 构建、测试和 ESLint 配置 |

### UI 与样式

| Package                 | 版本                 | 用途                                           |
| ----------------------- | -------------------- | ---------------------------------------------- |
| `@mui/material`       | `^5.14.17`         | 页面布局、排版、卡片、弹窗、列表等主要 UI 组件 |
| `@mui/icons-material` | `^5.13.7`          | 导航、履历、播放控制等图标                     |
| `@mui/lab`            | `^5.0.0-alpha.152` | CV 页面中的时间线组件                          |
| `@emotion/react`      | `^11.11.1`         | MUI 默认 CSS-in-JS 运行时                      |
| `@emotion/styled`     | `^11.11.0`         | MUI`styled()` 组件样式支持                   |
| `@react-spring/web`   | `^9.7.3`           | Web 动画库；已安装，但当前源码中没有直接使用   |

页面主要采用 MUI 的 `sx`、主题与响应式断点进行样式组织。`public/index.html` 还从 Google Fonts 加载了 Playfair Display 和 Parisienne 字体。

### 内容、测试与工具

| Package                                               | 版本          | 用途                                                                       |
| ----------------------------------------------------- | ------------- | -------------------------------------------------------------------------- |
| `markdown-to-jsx`                                   | `^7.2.1`    | Markdown 到 React 组件的转换；目前只被`src/NotUsedNow/` 中的备用组件使用 |
| `web-vitals`                                        | `^2.1.4`    | CRA 默认的页面性能指标采集入口；当前未传入上报函数                         |
| `@testing-library/react`                            | `^13.4.0`   | React 组件测试与渲染                                                       |
| `@testing-library/jest-dom`                         | `^5.16.5`   | DOM 断言扩展                                                               |
| `@testing-library/user-event`                       | `^13.5.0`   | 测试中的用户交互模拟                                                       |
| `@types/react`                                      | `^18.2.14`  | React 的 TypeScript 类型声明                                               |
| `@types/react-dom`                                  | `^18.2.6`   | React DOM 的 TypeScript 类型声明                                           |
| `@types/node`                                       | `^16.18.38` | Node.js API 与构建环境的类型声明                                           |
| `@types/jest`                                       | `^27.5.2`   | Jest 测试 API 的类型声明                                                   |
| `@types/markdown-to-jsx`                            | `^7.0.1`    | Markdown 组件的补充类型声明                                                |
| `@types/react-router-dom`                           | `^5.3.3`    | React Router DOM 的旧版补充类型包；当前应用代码实际使用 v6 API             |
| `@babel/plugin-proposal-private-property-in-object` | `^7.21.11`  | 兼容 CRA/Babel 的依赖声明缺失问题，避免开发服务器启动警告                  |
| `gh-pages`                                          | `^5.0.0`    | 将`build/` 发布到 GitHub Pages                                           |

依赖的准确版本以 `package-lock.json` 为准。仓库没有通过 `.nvmrc` 或 `package.json#engines` 固定 Node.js 版本。

## 代码结构

```text
.
├── public/                     # 不经过模块导入的公开静态文件与 HTML 模板
│   ├── index.html              # 页面模板、站点标题、字体链接和 #root 节点
│   ├── manifest.json           # PWA/安装元数据
│   ├── robots.txt
│   └── favicon.ico, logo*.png
├── src/
│   ├── index.tsx               # 浏览器入口，挂载 App 并调用 Web Vitals 入口
│   ├── App.tsx                 # 应用组件，接入 RouterProvider
│   ├── Router.tsx              # 全站路由表
│   ├── Root/
│   │   ├── Root.tsx            # 共享布局、主题、背景、Header、Outlet 和 Footer
│   │   ├── Header.tsx          # 顶部标题、导航、Scholar 与搜索图标
│   │   └── Footer.tsx          # 图片来源致谢与版权信息
│   ├── Content/
│   │   ├── Overview/           # 首页简介与主视觉
│   │   ├── CV/                 # 履历页、时间线、院校图标、语言和奖项
│   │   ├── Works/              # 研究成果页、成果卡片及结构化数据
│   │   │   ├── Works.tsx       # 按研究主题渲染成果列表
│   │   │   ├── WorkCard.tsx    # 单项成果卡片与类型标签
│   │   │   └── WorkData.ts     # 研究主题和成果数据源
│   │   ├── Besides/            # 个人内容、音乐播放器与相册弹窗
│   │   └── Showcase/           # 技能图片墙与自定义 Typography
│   ├── Images/                 # 头像、背景、论文示意图、相册和其他图片/PDF
│   ├── Music/                  # 音乐源文件
│   ├── NotUsedNow/             # 当前页面树未使用的 Markdown 展示组件
│   ├── Sidebar.tsx             # 当前未启用的侧边栏组件
│   ├── App.css                 # CRA 模板遗留样式，当前页面基本未使用
│   ├── index.css               # 全局字体和基础样式
│   ├── App.test.tsx            # CRA 模板测试
│   ├── setupTests.ts           # Jest DOM 测试初始化
│   └── reportWebVitals.ts      # 性能指标适配器
├── package.json                # npm 脚本、依赖和 GitHub Pages 地址
├── package-lock.json           # 锁定依赖树
├── tsconfig.json               # TypeScript 编译配置
├── deploy_site.sh              # 交互式构建、推送和发布脚本
├── .gitignore
└── README.md
```

本地可能还会看到以下被 Git 忽略的内容：

- `node_modules/`：npm 安装生成的依赖目录。
- `build/`：`npm run build` 生成的生产构建目录。
- `node_modules.tar.xz`：本地依赖归档，不属于项目源码。

## 应用层级与数据流

```text
public/index.html (#root)
└── src/index.tsx
    └── App
        └── RouterProvider
            └── Root（共享主题与页面框架）
                ├── Header
                ├── Outlet
                │   ├── Overview
                │   ├── CV
                │   ├── Works
                │   ├── Besides
                │   └── Showcase
                └── Footer
```

各层职责如下：

1. `index.tsx` 和 `App.tsx` 负责应用启动与路由接入。
2. `Router.tsx` 只定义 URL 到页面组件的映射。
3. `Root/` 提供跨页面复用的视觉外壳。
4. `Content/` 按页面域拆分功能；页面内部再拆为展示组件和数据。
5. `Works/WorkData.ts` 是成果页的集中数据源，新增论文通常不需要改动卡片组件。
6. `Images/` 和 `Music/` 保存内容资源，其中图片通常通过 ES Module 导入参与构建。

## 本地开发

### 1. 安装依赖

```bash
npm ci
```

`npm ci` 会严格按 `package-lock.json` 安装，适合复现当前依赖树。需要主动更新依赖时再使用 `npm install`。

### 2. 启动开发服务器

```bash
npm start
```

默认访问 [http://localhost:3000](http://localhost:3000)。源码改动后页面会自动刷新，类型或 ESLint 问题会显示在终端和浏览器中。

### 3. 执行测试

```bash
npm test
```

该命令默认进入 Jest 交互式监听模式。一次性运行可使用：

```bash
npm test -- --watchAll=false
```

> 当前 `App.test.tsx` 仍是 CRA 的示例测试，断言页面包含 “learn react”。它尚未随个人主页内容更新，因此不能代表当前站点的有效测试覆盖。

### 4. 生成生产构建

```bash
npm run build
```

优化后的静态站点会生成到 `build/`。该目录已被 `.gitignore` 排除，不应手工维护。

### 其他脚本

| 命令               | 说明                                                                             |
| ------------------ | -------------------------------------------------------------------------------- |
| `npm run deploy` | 先自动执行`predeploy`（即 `npm run build`），再用 `gh-pages -d build` 发布 |
| `npm run eject`  | 将 CRA 隐藏的构建配置复制到仓库；这是不可逆操作，通常无需执行                    |

## 内容维护指南

### 更新首页

- 欢迎语、身份和研究方向：`src/Content/Overview/Overview.tsx`
- 首页人物照片和主视觉布局：`src/Content/Overview/MainFeaturedPost.tsx`
- 全站标题、导航项和背景：`src/Root/Root.tsx`
- Scholar 链接与页头交互：`src/Root/Header.tsx`

### 更新履历

- 个人信息与 Tools：`src/Content/CV/CV.tsx`
- 教育、研究时间线：`src/Content/CV/CVtimeline.tsx`
- 奖项：`src/Content/CV/RewardList.tsx`
- 语言：`src/Content/CV/LanguageList.tsx`
- 院校 SVG 图标：`src/Content/CV/CVIcon.tsx`

### 新增研究成果

在 `src/Content/Works/WorkData.ts` 的对应 `workTopics` 项中加入一条 `WorkEntry`。每条记录包含：

- `title`：成果标题。
- `author_before`、`author_me`、`author_after`：作者列表，页面会加粗本人姓名。
- `description`：摘要式介绍。
- `image`、`imageWidth`、`imageLabel`：示意图、桌面端宽度和无障碍文本。
- `published_where`、`ref_address`：按钮文字与目标链接。
- `kind`：`Publication`、`Preprint`、`Workshop` 或 `Project`，决定卡片标签颜色。

如需新增研究方向，则添加一个包含 `title`、`description` 和 `works` 的 `WorkTopic`。

### 更新相册

将图片放入 `src/Images/`，并遵循以下文件名格式：

```text
AlbumPhoto1.png
AlbumPhoto2.jpg
AlbumPhoto3.webp
```

`AlbumCard.tsx` 使用 Webpack 的 `require.context` 自动收集 `AlbumPhoto*.(png|jpg|jpeg|webp)`，并按文件名中的数字排序，无需逐张导入。相册封面由 `bird_zhangdaqian.jpg` 提供。

### 更新图文集

图文弹窗的内容保存在 `src/Content/Besides/StoryCard.tsx` 的 `storySlides` 数组中。每一页包含 `title` 和中英文正文，也可以按需提供图片与图片替代文字；`title` 为空字符串时不会渲染标题。新增或替换图文时，更新顶部的图片导入和对应数组项即可。

### 更新音乐

1. 将音频文件加入 `src/Music/`。
2. 在 `src/Content/Besides/MediaCard.tsx` 的 `musicFiles` 数组中登记文件名。
3. 文件名按 `作者-曲目.mp3`（也支持 `.mp4`/`.mov`）解析，例如 `Chopin-Op52,No4.mp3`。

播放器目前不是从本地 bundle 引用音频，而是拼接 `GITHUB_RAW_PREFIX` 后从 GitHub Raw 加载。因此仓库所有者、仓库名或默认分支变化时，需要同步更新该常量；当前常量仍指向 `LugarZou/LugarZou.github.io` 的 `master` 分支。

## 部署

`package.json` 中的 `homepage` 为 `https://LugarZou.github.io`，构建时会据此生成资源路径。最小发布流程为：

```bash
npm run deploy
```

这会重新构建项目，并将 `build/` 内容发布至 `gh-pages` 分支。

仓库还提供了一个完整的交互式流程：

```bash
./deploy_site.sh
```

脚本会依次：

1. 显示当前 Git 状态并请求确认。
2. 如果工作区有变更，询问是否执行 `git add -A` 并创建提交。
3. 执行生产构建。
4. 将当前源码分支推送到指定远程仓库。
5. 调用 `npm run deploy` 发布站点。

默认远程仓库为 `origin`，也可以传入其他 remote：

```bash
./deploy_site.sh upstream
```

由于脚本可选择暂存工作区中的全部文件，执行前应先检查 `git status`。

## 当前仓库说明

- `Showcase` 已注册路由，但导航入口被注释；可直接访问 `/Showcase`。
- `Sidebar.tsx` 和 `src/NotUsedNow/` 不在当前页面渲染树中，属于保留代码。
- `markdown-to-jsx` 只服务于上述备用 Markdown 组件；`@react-spring/web` 当前没有直接引用。
- `App.test.tsx` 是未更新的 CRA 模板测试，测试前需要按现有页面内容重写。
- 站点使用 `BrowserRouter` 风格的 History 路由。若更换静态托管平台，需要为子路径刷新配置回退到 `index.html`。
- 图片、PDF 与音频体积较大；新增媒体资源时建议先压缩，以控制仓库和生产构建体积。

## 版权与素材

页面内容与个人作品归仓库作者所有。页脚注明部分背景/主题图片来自 Unsplash 创作者 Alex Suprun、Dmytro Demidko 和 Jackson Sophat；其他素材在复用前请分别确认其来源与授权。

仓库当前未提供独立的开源许可证文件。

## 课程作业子站（`public/CS1710/`）

CRA 会把 `public/` 下的内容原样复制进 `build/`，所以课程产物直接放在 `public/` 的子目录里即可，
不需要经过 React 或 `scripts/postbuild.mjs` 的路由列表——`src/Router.tsx` 里没有 `/CS1710` 路由，
GitHub Pages 遇到真实存在的静态目录会直接返回它，SPA 不参与。

```
public/CS1710/
├─ index.html   隐藏落地页：列出各 milestone 的原型链接
└─ m6/          Milestone 6 的 SvelteKit 构建产物
```

这个子站**不在主站导航里**，落地页带 `noindex`，只通过直接链接访问（课程助教、组员）。
后续 milestone 按 `public/CS1710/<milestone>/` 继续往下加，并在落地页里补一张卡片。

产物由课程仓库 `HarvardCourse/CS1710/` 下的项目构建，构建时必须带上子路径，例如：

```bash
BASE_PATH=/CS1710/m6 npm run build
```

另外，GitHub Pages 默认跑 Jekyll，会静默忽略所有以下划线开头的目录。SvelteKit 默认把产物
放在 `_app/`，部署后会全部 404，页面只剩预渲染的外壳。因此课程子站的 SvelteKit 项目都要在
构建配置里把 `appDir` 改成不带下划线的名字（M6 用的是 `app`）。没有改用 `.nojekyll`，是为了
不必把 `npm run deploy` 的 `gh-pages -d build` 改成 `--dotfiles`，以免影响主站的发布方式。
