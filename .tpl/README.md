# Lunera 独立模板

中英文响应式官网，共 10 页。中文 /，英文 /en。

Git：https://github.com/weelume/lunera-template

Node 22+，pnpm 12.10.1。pnpm install --frozen-lockfile；pnpm dev（默认端口 43285）；pnpm build 后 pnpm start。Ctrl+C 停止自己启动的服务。不需要数据库或密钥。

检查：pnpm typecheck、pnpm lint、pnpm test、pnpm build、pnpm tpl:check。pnpm bundle 输出共享包。

通用源码位于 src/features/site-templates/catalog/lunera：config/brand.ts 管理品牌；data.ts、content.ts、messages.ts 管理双语内容与素材索引；theme.css 管理主题；components 和 pages 组合页面；meta.ts 注册页面；host.tsx 提供可选宿主品牌、Logo、市场及备案插槽。运行素材在 public/templates/lunera，展示图在 .tpl/assets。新增页面同步运行注册和 .tpl/template.json。

表单仅本地校验，不发送或保存。指标、评价、价格等均为演示内容。原站素材商用及再分发授权待确认；公开仓库不代表素材许可，详见 .tpl/docs/LICENSE.md。
