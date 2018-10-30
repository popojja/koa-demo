// 引入模块
require('babel-register');
const Koa = require('koa');
const KoaStatic = require('koa-static');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const __port = 3000;
const app = new Koa()
const router = new Router();

// 使用 bodyParser 和 KoaStatic 中间件
app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));

// 路由设置test
router.get('/test', (ctx, next) => {
  ctx.body="test page"
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(__port);

console.log(`graphQL server listen port: http://localhost:${__port}`)