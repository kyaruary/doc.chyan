# 开始

<br/>

> 环境搭建和文件配置请先阅读[快速开始](/overview/QuickStart/)

<br/>

`chyan`使用声明式的开发模式，入口文件也不例外！

定一个入口类 `App`(或是其他你喜欢的类名) 继承`chyan`提供的 `BootsrapApplication`

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