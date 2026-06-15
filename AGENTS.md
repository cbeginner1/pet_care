# 项目说明

## 项目概览

这是一个宠物洗护门店展示页项目，品牌文案为“沐爪宠物洗护”。当前主要实现是一个 Next.js App Router 单页应用，页面内容包含首页 Hero、服务介绍、店内环境轮播、安心流程、价格表、用户评价、门店信息和预约联系表单。

仓库里同时保留了一份静态原型 `index.html`，但实际 Next.js 应用入口在 `app/` 目录。

## 技术栈

- Next.js，使用 App Router。
- React 客户端组件。
- 样式使用纯 CSS，集中在 `app/globals.css`。
- 没有 TypeScript、ESLint、Tailwind 或额外 UI 组件库配置。
- 图片资源为本地静态图片。

## 常用命令

```bash
npm run dev
npm run build
npm run start
```

- `npm run dev`：启动 Next.js 开发服务器。
- `npm run build`：生产构建。已确认当前项目可以构建通过。
- `npm run start`：启动生产构建后的服务。

## 关键文件

- `app/layout.jsx`：全局布局和页面 metadata，设置 `html lang="zh-CN"`。
- `app/page.jsx`：主页面实现。包含所有页面数据数组、轮播组件和预约表单逻辑。
- `app/globals.css`：全局样式和响应式布局。
- `public/assets/`：Next.js 页面实际引用的图片资源，路径形式为 `/assets/...`。
- `assets/`：保留的同名图片资源目录，当前页面不直接引用。
- `index.html`：静态 HTML 版本，适合作为早期原型或内容参考，不是当前 Next.js 入口。
- `next.config.mjs`：当前为空配置。
- `.next/`、`node_modules/`、`.npm-cache/`：生成或依赖目录，不应手动维护业务代码。

## 页面结构

`app/page.jsx` 中的主要数据和组件：

- `services`：洗护服务卡片，包括基础洁净浴、造型修剪、皮毛养护、细节清洁。
- `slides`：店内环境轮播图片和说明。
- `steps`：到店评估、温和沐浴、护理修整、交付反馈四步流程。
- `prices`：服务价格列表。
- `reviews`：用户评价。
- `storeInfo`：地址、营业时间、交通和停车信息。
- `EnvironmentCarousel`：客户端轮播组件，使用 `useState` 和 `useEffect`，每 5.5 秒自动切换。
- `Home`：页面主体和预约表单。表单当前只阻止默认提交并弹出提示，没有后端接口。

## 样式约定

- 主色以墨绿、薄荷绿、珊瑚色、暖黄色和浅奶油背景为主。
- 卡片和工具型容器多使用 `8px` 圆角。
- Hero 使用 `public/assets/hero-pet-grooming.png` 作为背景图。
- 店内环境轮播使用 `store-lounge.png`、`store-bathing.png`、`store-styling.png`。
- 响应式断点主要在 `1040px`、`960px` 和 `640px`。
- 移动端会隐藏顶部导航链接，只保留品牌和预约按钮。

## 维护注意事项

- 中文源码请按 UTF-8 读取和保存。PowerShell 默认读取方式可能显示乱码，使用 `Get-Content -Encoding UTF8` 可正常查看。
- 新增页面图片时，优先放在 `public/assets/`，并用 `/assets/文件名` 引用。
- 修改页面文案时，优先调整 `app/page.jsx` 顶部的数据数组，避免在 JSX 中分散硬编码。
- 当前预约表单没有真实提交逻辑；如接入后端，需要替换 `handleSubmit` 中的 `window.alert`。
- 如果需要更新 SEO 文案，修改 `app/layout.jsx` 中的 `metadata`。
- 修改视觉样式时优先沿用 `app/globals.css` 中已有 CSS 变量和断点。
- `index.html` 与 Next.js 页面可能会逐渐不同步；除非明确要维护静态版本，否则业务改动应以 `app/` 为准。

## 已知状态

- 当前 `npm run build` 可成功完成。
- Git 工作区在创建本文件前是干净的。
