

## TinyReact 编写流程

1. 在.babelrc配置文件中，编写预制代码，告诉babel在解析 jsx 代码时要是用哪个方法。
2. 创建VirtualDOM，编写craeteElment文件，在src>index.js 中调用 tinyReact 方法并传入 jsx 代码
3. 在 createElement 中将VirtualDOM的文本节点的结构调整为标准格式
4. 在 createElement 中判断时候又boolean或者null值，因为页面上并不会显示，所以直接去掉
5. 在 React 中可以使用props.children 查看子结点，所以同样需要将children添加到props
6. 编写 render 方法将虚拟DOM渲染为真实DOM。
7. 编写 diff 方法在render函数中引用，用来判断是否存在旧的虚拟DOM
8. 编写 mountElement 方法并在 diff 中引用，判断是组件形式的虚拟对象还是原生虚拟对象。
9. 编写 mountNativeElement 方法并在 mountElement 中引用，处理原生虚拟对象
10. 编写 createDOMElement 方法并在 mountNativeElement中引用，生成真实DOM