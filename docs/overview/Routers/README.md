# 路由

`chyan` 是完全基于 `koa2` 开发的 框架

所有合法的 `koa-router` 都可以直接在 `chyan` 中使用

## 使用 koa-router

```ts
import { ChyanApplication, BootstrapApplication } from "chyan";
import Router from "koa-router";

const router = new Router();

router.get("/koa-router", async (ctx, next) => {
  ctx.body = "koa router";
});

@ChyanApplication()
export class Application extends BootstrapApplication {
  main() {
    this.app.useRouter(router);
    this.app.run();
  }
}
```

## 使用 chyan 内置的 router

`chyan` 使用一系列装饰器来定义路由 并将最后生成的 router 对象注入到 `BootstrapApplication` 中

### Controller

Controller (控制器) 源自[三层架构](https://baike.baidu.com/item/%E4%B8%89%E5%B1%82%E6%9E%B6%E6%9E%84/11031448?fr=aladdin)里面的表现层 用于接收请求 返回数据

> `ChyanApplication` 是一个特殊的 Controller。 除了 Controller 的功能外它还承担启动项目的责任

### Actions

```ts
import { ChyanApplication, BootstrapApplication } from "chyan";

@ChyanApplication()
export class Application extends BootstrapApplication {
  main() {
    this.app.useRouter(this.router); // 这里使用的是chyan自己维护的router
    this.app.run();
  }
}
```

## 同时使用 koa-router 和内置 router
