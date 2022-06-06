/**
 * 创建 VirtualDOM
 * @param {string} type 元素类型
 * @param {object | null} props
 * @param {createElement[]} children
 * @return {object} Virtual DOM
 */
export default function createElement(type, props, ...children) {
    // {2 === 1 && <div>如果2和1相等渲染当前内容</div>} 使用 reduce 方法把值为null/true/false的去除掉，因为这些并不会在页面中显示。
    const childElements = [].concat(...children).reduce((result, child) => {
        if(child !== true && child !== false && child !== null) {
            // 将对象节点和文本节点分开处理
            if(child instanceof Object) {
                result.push(child);
            } else {
                result.push(createElement("text", {textContent: child}));
            }
        }
        return result;
    }, [])

    // 返回 VirtualDOM 对象
    return {
        type,
        // 在React组件中可以使用props.children拿到子结点的，所以这里也是把子节点添加到props中
        props: Object.assign({children: childElements}, props),
        children: childElements
    }
}