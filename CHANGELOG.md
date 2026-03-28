# Changelog

本文件用于记录每个版本的更新信息。

## 1.5.2

- 将 DMM 按钮改为蓝色（不发请求），因 DMM 年龄验证页和地区限制导致脚本请求无法获取实际内容。

## 1.5.1

- 新增 AVMOO 和 AVSOX 详情页跳转在线观看按钮（与 JavDB/JavBus 等站点互相跳转）。
- 新增其他站点详情页上的 AVMOO 和 AVSOX 跳转按钮。
- 新增按钮蓝色状态，表示不发请求直接跳转（用于 Cloudflare 拦截等无法验证的站点）。
- 新增按钮橙色状态，表示请求被 Cloudflare 拦截，点击可手动跳转。
- 将 JAVLib 按钮改为蓝色（不发请求），因 Cloudflare JS Challenge 导致脚本请求无法到达。
- 修复 Cloudflare 检测顺序，确保 403 + CF 验证页正确显示橙色而非红色。
- GM_xmlhttpRequest 添加 anonymous: false，明确声明携带 cookies。

## 1.5.0

- 新增 AVMOO（avmoo.website）和 AVSOX（avsox.click）站点支持，包括瀑布流/无限滚动和布局优化。
- 修复 AVMOO/AVSOX 女优页面瀑布流加载时重复插入女优介绍卡的问题。
- 修复 JavDB 瀑布流开关按钮定位问题，不再依赖 ThePornDude 链接（登录后该链接消失），改为插入 navbar-start 末尾。
- 修复 JavBus 有码首页布局，调整 movie-box 宽度使每行恢复为 9 个影片。
- 移除 JavLibrary 详情页外观处理代码（侧边栏移除、内容区扩展等）。
- 清理已失效的 AVSOX/AVMOO 旧代码（基于 document.title 检测的死代码）。

## 1.4.0

- 新增瀑布流/无限滚动功能（支持 JavBus、AVSOX/AVMOO、JavLibrary、JavDB 列表页自动加载下一页）。
- 新增瀑布流开关按钮，设置持久化保存。
- 新增页面布局优化：JavBus/AVSOX 列表页紧凑化、JavLibrary 详情页移除侧边栏并扩展内容区域、JavDB 列表页 container 宽度最大化。
- 新增 JavDB 自动移除 18+ 弹窗和桌面广告横幅。
- 扩展 JavDB @include 匹配模式，支持列表页和首页。
- 重构 main() 函数，列表页和详情页均可运行布局优化和瀑布流。

## 1.3.40

- 回滚到 1.3.38 的稳定代码。
- 保留当前发布版本号为 1.3.40，便于脚本分发和升级识别。

## 1.3.39

- 新增 JAV 列表页瀑布流支持。

## 1.3.38

- 移除已关闭的 Avgle 和 18sex 站点。

## 1.3.37

- 将 FANZA 按钮名称改为 DMM。

## 1.3.36

- 修复隐藏 JAV321 解析器时的 FANZA 按钮渲染问题。

## 1.3.35

- 继续整理 FANZA 与 JAV321 的联动逻辑并发布版本更新。
