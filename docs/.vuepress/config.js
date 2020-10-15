const config = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/en/": {
      lang: "en-US", // 将会被设置为 <html> 的 lang 属性
      title: "Chyan.js",
      description: "Developer Friendly Node.js Web Framework \n Based On Koa2 & Typescript",
    },
    "/": {
      lang: "zh-CN",
      title: "Chyan.js",
      description: "Vue 驱动的静态网站生成器",
    },
  },
  themeConfig: {
    locales: {
      "/": {
        selectText: "选择语言",
        label: "简体中文",
        editLinkText: "在 GitHub 上编辑此页",
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新",
          },
        },
        algolia: {},
        nav: [
          { text: "起步", link: "/overview/ChyanApplication/", ariaLabel: "起步" },
          { text: "进阶", link: "/overview/Metadata/", ariaLabel: "进阶" },
          { text: "实战", link: "/overview/Practice/", ariaLabel: "实战" },
          { text: "常见问题", link: "/overview/FAQ/", ariaLabel: "FAQ" },
        ],
        sidebar: [
          ["/overview/Introduction/", "介绍"],
          ["/overview/QuickStart/", "快速开始"],
          {
            title: "教程", // 必要的
            collapsable: false,
            sidebarDepth: 2, // 可选的, 默认值是 1
            children: [
              ["/overview/ChyanApplication/", "开始"],
              ["/overview/Routers/", "路由"],
              ["/overview/AutoWired/", "依赖注入"],
              ["/overview/Middlewares/", "中间件"],
              ["/overview/Pipe/", "管道"],
              ["/overview/Service/", "服务"],
              ["/overview/Common/", "内置对象"],
              ["/overview/Exception/", "异常处理"],
              ["/overview/Interceptor/", "拦截器"],
              ["/overview/MongoCollection/", "数据库"],
            ],
          },
          {
            title: "进阶",
            collapsable: false,
            children: [
              ["/overview/Metadata/", "元编程"],
              ["/overview/Ioc/", "依赖注入容器"],
              ["/overview/Custom/", "自定义装饰器"],
            ],
            // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
          },
        ],
      },
      "/en/": {
        // 多语言下拉菜单的标题
        selectText: "Languages",
        // 该语言在下拉菜单中的标签
        label: "English",
        // 编辑链接文字
        ariaLabel: "Languages",
        editLinkText: "Edit this page on GitHub",
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh",
          },
        },

        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [{ text: "嵌套", link: "/zh/nested/" }],
        sidebar: {
          "/zh/": [
            /* ... */
          ],
          "/zh/QuickStart": [
            /* ... */
          ],
        },
      },
    },
  },
};

module.exports = config;
