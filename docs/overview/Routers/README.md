# 路由

`chyan` 使用一系列装饰器来定义路由 并将最后生成的 router 对象注入到 `BootstrapApplication` 中。

## 控制器

`控制器` 用于接收请求 返回 restful 接口或是渲染页面。

为了创建一个基本的控制器，我们使用类和`@Controller()`装饰器。通常每个控制器具有多个路由。

```ts
import { Controller } from "chyan";

@Controller()
export class TestController {}
```

### 路由前缀

`@Controller()`装饰器可以接收一个参数做为路由前缀，这方便我们统一管理一系列相关路由， 并最大程度地减少重复代码。

```ts
@Controller("prefix") // -> 生成 /prefix/ 开头的路由前缀
export class TestController {}

// 或者自定义一个路由控制器
function ApiV1(path = "") {
  return Controller(`api/v1/${path}`);
}

@ApiV1("user") // -> 生成 /api/v1/user 开头的前缀
export class UserController {}
```

虽然创建了控制器但是我们并没有映射到具体路径去处理相关请求， 我们还需要[路由装饰器](#路由装饰器)来创建路由映射。

> `ChyanApplication` 是一个特殊的 Controller。
>
> 所以你也可以在里面使用`路由装饰器`, 只是不能给它添加路由前缀 ; )

## 路由装饰器

`路由装饰器`装饰在类内部的方法上，它指定了一个路由映射。

下面示例代码创建了两个路由分别映射为`GET`请求的`/`和`POST`请求的`/name`

当浏览器发起对应方法的请求这个两个路径的时候`chyan`会返回 200 的 http 状态码和方法返回的值。

当你没有返回一个值(或者返回了一个 undefined)的时候 http 状态码会变成 404。

```ts
import { Controller, Get, Post } from "chyan";

@Controller()
export class TestController {
  @Get()
  getName() {
    return { name: "cat" };
  }
  @Post("name")
  changeName() {
    return "change success";
  }
}
```

## 请求对象

路由通常需要访问客户端请求的信息。

### 默认请求对象

默认情况下`chyan`会为路由处理的方法注入 `ChyanContext` 和 `ChyanNext。`

像在`koa2`里面一样使用他们吧！

```ts
@Get()
async routerWithParameters(ctx: ChyanContext, next: ChyanNext) {
  console.log(ctx.url);
  await next();
}
```

:::warning 使用提示
使用 `next` 函数必须伴随着 `await` 关键字！不然会导致无法预料的问题！
:::

### 声明参数

当我们需要一个 post 请求中的 body 时我们可以通过默认请求对象里面的`ctx.body`拿到

当然我们还可以使用装饰器来明确的声明使用它！

```ts
interface User {
  name: string
}
@Post()
getBody(@Body() user: User) {
  return user.name;
}
```

我们定义了一个 User 实体，并告诉`chyan`这个是一个 User 类型的 body。

假如我们只需里面的一个字段，将这个字段的名称传给 `Body` 就可以啦！

> 在声明的参数后面`chyan`仍然提供了 ctx 和 next 的注入方便开发者使用！

```ts
@Post()
getBodyName(@Body('name') name: string, ctx: ChyanContext) {
  console.log(ctx.body.name) // 和name一致
  return name;
}
```

`chyan`还提供了查询 querystring 用的`@Query()`和用于查询 params 的`@Params()`装饰器， 用法和`@Body()`相同。

既然 ctx 可以直接获取到我们需要的数据，那为什么还需要声明参数来获取呢？

## 使用 koa-router

因为`chyan`提供了对`koa2`对完全兼容。

所以所有合法的 `koa-router` 都可以直接在 `chyan` 中使用。

> 使用 koa-router 可以很方便的把基于 koa 的应用迁移到 chyan

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
    this.app.useRouter(router); // 这里使用的是koa-router而不是chyan内部的router
    this.app.useRouter(this.router); // 但还是可以继续使用自己的router ;)
    this.app.run();
  }
}
```
