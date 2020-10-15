# 内置对象

`chyan` 目前内置了两个常用的对象方便开发者使用

## 日志对象 ChyanLogger

ChyanLogger 是一个内置到依赖注入容器里面的封装了 log4js 的类

### 使用

```ts
@Controller()
export class TestLoggerController {
  constructor(private log: ChyanLogger) {}

  @Get("log/test/")
  log() {
    this.log.info("this is chyanlog");
    return "success";
  }
}
```

当访问 domain/log/tets 的时候会输出

```
[time][INFO] [ chyan.co ] this is chyanlog
```

### 自定义 Log

当你想要配置自己的 logger 可以直接集成我们内置的 ChyanLogger 类

```ts
@Service()
export class AppLogger extends ChyanLogger {}
```

## 环境配置对象 EnvConfig
