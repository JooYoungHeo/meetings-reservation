import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();
const port = 4000;

router.get('/', ctx => {
    
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log(`server start #${port}`);
});