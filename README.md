

## TinyReact 编写流程

1. 在.babelrc配置文件中，编写预制代码，告诉babel在解析 jsx 代码时要是用哪个方法。
2. 创建VirtualDOM，编写craeteElment文件，在src>index.js 中调用 tinyReact 方法并传入 jsx 代码