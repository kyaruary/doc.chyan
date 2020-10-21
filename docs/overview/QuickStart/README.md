# 快速开始

本章节通过构建一个 hello world 应用帮助开发者快速预览`chyan`的使用方法和特性。

## 环境

> 安装一个适合你的 `node` 环境(>= 10.13.0) 推荐使用稳定版

## 创建项目并安装 chyan

```bash
mkdir app && cd app
yarn init -y
yarn add chyan
```

## 配置 tsconfig.json 开启装饰器模式

`chyan` 内置了 `typescript`， 创建一个 `tsconfig.json` 文件只需要：

```
yarn tsc --init
```

<br>

修改文件里面的以下字段，确保装饰器模式已经打开。

```json
{
  "compilerOptions": {
    "target": "ES2016",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

## 编写代码

在目录下新建一个 `src` 文件夹，我们的所有项目代码都会放在这里。

在 `src` 下新建一个 `index.ts` 文件作为我们的程序入口。

```ts
import { ChyanApplication, Get, BootstrapApplication, EnvConfig } from "chyan";

@ChyanApplication()
export class Application extends BootstrapApplication {
  constructor(private config: EnvConfig) {
    super();
  }

  main() {
    this.app.useRouter(this.router);
    this.app.run(8080);
  }

  @Get()
  helloWorld() {
    return this.config.app_name;
  }
}
```

## 启动应用

使用 `ts-node` 启动你的应用

```bash
yarn ts-node src/index.ts
```

<br>

如果你全局安装了 `nodemon` 也可以

```bash
nodemon src/index.ts
```

<br/>

:::tip
打开浏览器，输入 [http://localhost:8080](http://localhost:8080) 你就可以看到`Chyan.Application`!
:::
