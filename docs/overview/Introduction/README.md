# 介绍

`chyan` 是一个基于[koa2](https://koa.bootcss.com/) 和 [typescript](https://www.tslang.cn/) 开发的 轻量级 http 框架。

## First App

```ts
import { ChyanApplication, Get, BootstrapApplication } from "chyan";

@ChyanApplication()
export class Application extends BoostrapApplication {
  main() {
    this.app.useRouter(this.router);
    this.app.run(8080);
  }

  @Get()
  homepage() {
    return "hello chyan";
  }
}
```

## More
