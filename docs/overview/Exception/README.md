# 异常处理

异常处理是编写一个健壮服务器的重要一环

我们不能轻易暴露出代码自身的错误给客户端

在 koa2 中处理异常非常简单

在此之上`chyan`封装了一个简单的接口供开发者使用

## 定义一个异常处理类

```ts
export class MyAppExceptionFilter implement GlobalExceptionFilter {
  catch(e:Error, c:ChyanContext) {
    // handle error
  }
}
```

大胆点 去掉 impl

```ts
export class MyAppExceptionFilter {
  catch(e: Error, c: ChyanContext) {}
}
```

:::tip 鸭辨类型
ts 是鸭辨的类型推断， 只要他长的像鸭子 叫起来像鸭子 那么它就是一只鸭子
:::

## 使用

```ts
import {} from 'chyan';

@ChyanApplication()
export class App extends BootstrapApplication {
  main() {
    this.app.useGlobalExceptionFilter(...) // 在此传入一个ExceptionFilter
  }
}
```

## 内置 HttpException

点击查看更多 [HttpException](/overview/api/#HttpException)
