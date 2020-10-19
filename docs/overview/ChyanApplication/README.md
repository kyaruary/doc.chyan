# 开始

<br/>

> 环境搭建和文件配置请先阅读[快速开始](/overview/QuickStart/)

:::warning 提示
教程假定用户有一定的 js/ts 基础和 koa 发开经验 ,当然没有也可以 ; )
:::

## 入口文件

`chyan`使用声明式的开发模式，入口文件也不例外！

定一个入口类 `App`(或是其他你喜欢的类名) 继承`chyan`提供的 `BootstrapApplication`

使用 `@ChyanApplication()` 来初始化 app

```ts scr/index.ts
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

## app 实例

成员 app 提供类似 koa 实例的方法

在必要的时候你也可以通过`this.app.getKoaApplication()`获取到 koa 实例进行一些操作。

::: warning 小心使用 koa 实例
`chyan` 有自己的中间件定义顺序。

所有通过 koa 实例添加的中间件都会被添加到中间件的最顶部。

明确你在干什么！
:::

更多 app 方法请参考 [api#Application](/overview/api)

## 路由

## 自动导入

## 依赖注入
