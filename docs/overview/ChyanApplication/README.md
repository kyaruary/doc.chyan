# 开始

<br/>

> 环境搭建和文件配置请先阅读[快速开始](/overview/QuickStart/)

<br/>

`chyan`使用声明式的开发模式，入口文件也不例外！

定一个入口类 `App`(或是其他你喜欢的类名) 继承`chyan`提供的 `BootstrapApplication`

使用 `@ChyanApplication()` 来初始化 app

```ts
import { ChyanApplication, Get, BootstrapApplication } from "chyan";

@ChyanApplication()
export class App extends BootstrapApplication {
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

::: details this.app 是什么?
`this.app` 是 `Application` 类的实例

`Application` 则是`chyan`封装了 koa 实例的一个内部类

即可以理解 `this.app` 为 `new koa()` 的增强版本

更多 api 请查看 [Api#Application](/overview/Api/)
:::
