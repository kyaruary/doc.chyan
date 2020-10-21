# 起步

这一部分的文章我们将构建一个基础的 curd 服务来让你熟悉`chyan`的基础模块。
<br/>

> 环境搭建和文件配置请先阅读[快速开始](/overview/QuickStart/)

:::warning 提示
教程假定用户有一定的 ts 基础和 koa 发开经验 ,当然没有也可以 ; )
:::

## 项目结构

`chyan`并不强制你的项目结构，你可以根据需求自定义模块。
这里给出一个常见的结构。

```
app
├── dist // 通常是 ts 文件编译以后存放的文件夹，一般来说你不需要主动创建。
├── views // 存放服务端渲染的模板文件
├── public // 存放静态资源文件
│ ├── js
│ ├── css
│ └── assets
├── src // 是我们程序代码存放的地方
│ ├── common // 通用代码
│ ├── controllers // 控制器
│ ├── index.ts // 入口文件
│ ├── middlewares // 中间件
│ ├── models // 数据库相关模型
│ └── services // 业务逻辑代码
├── test // 测试相关
├── package.json
├── .env // 包含了程序使用的环境变量
└── tsconfig.json
```

## 入口文件

`chyan`使用声明式的开发模式，入口文件也不例外！

```ts scr/index.ts
import { ChyanApplication, BootstrapApplication } from "chyan";

@ChyanApplication()
export class App extends BootstrapApplication {
  scanner = __dirname;

  main() {
    this.app.useRouter(this.router);
    this.app.run(8080);
  }
}
```

## BootstrapApplication

`BootstrapApplication`是一个基类，它提供了一些基础成员和方法供应用程序使用。

### main 方法

`chyan`强制你实现 main 方法，因为这是一个在程序启动的时候必须执行的一个方法。
你可以在 main 方法里面启动 app，添加中间件和路由系统。

### app 成员

app 是一个只读对象，它是对`koa实例`的包装并提供一系列方法操作内部的`koa实例`。

在必要的时候你也可以通过`this.app.getKoaApplication()`获取到 koa 实例进行一些操作。

::: warning 小心使用 koa 实例
`chyan` 有自己的中间件定义顺序。

所有通过 koa 实例添加的中间件都会被添加到中间件的最顶部。

明确你在干什么！
:::

> 更多 app 方法请参考 [api#Application](/overview/api)

### router 成员

router 是 `chyan` 内部维护的一个路由对象。它会收集所有通过[Controller]()装饰器定义的路由对象。

使用`this.app.useRouter(this.router)`告诉应用我们将会使用这个内部路由。

### scanner 自动导入

代码根据功能模块化分割到不同的文件对于应用可维护性至关重要。

给 scanner 成员赋值一个`绝对路径`可以帮助我们自动导入我们需要的 ts/js 文件。

在上述例子中我们简单的使用`__dirname`将`src`下所有的文件都在启动的时候动态导入。

:::tip 提示
其实我们只需要导入路由相关的文件，ts/js 在 imoprt 的时候会进行依赖分析。

即将 `__dirname` 替换成 `path.resolve(__dirname, 'controllers')`

这样可以避免导入不必要或是没有用到的文件。
:::

## ChyanApplication

`ChyanApplication` 装饰器收集了启动类的元信息，并在`ioc容器`完成后执行 `main` 方法启动你的应用。
