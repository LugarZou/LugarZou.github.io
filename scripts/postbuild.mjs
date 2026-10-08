// 构建后处理：让 GitHub Pages 正确响应 SPA 深链接。
//
// GitHub Pages 是纯静态托管，不认识前端路由的路径。处理方式有两层：
//   1. 为每个真实路由生成 `<route>/index.html`（内容就是 SPA 入口）。
//      这样直接访问 /works 时 Pages 能找到真实文件，返回 HTTP 200。
//   2. 再把入口复制一份为 404.html 作为兜底。任何未预生成的路径
//      （比如大小写不符的 /cv）会命中它，前端路由依然能接管渲染，
//      只是 HTTP 状态码是 404。
//
// 新增路由时，记得同步更新下面的 ROUTES 列表。
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BUILD_DIR = 'build';
const ROUTES = ['CV', 'works', 'Showcase', 'besides'];

const entry = join(BUILD_DIR, 'index.html');

copyFileSync(entry, join(BUILD_DIR, '404.html'));
console.log('已生成 404.html（兜底）');

for (const route of ROUTES) {
    const dir = join(BUILD_DIR, route);
    mkdirSync(dir, { recursive: true });
    copyFileSync(entry, join(dir, 'index.html'));
    console.log(`已生成 ${route}/index.html`);
}
