import mountElement from "./mountElement";
import updateTextNode from "./updateTextNode";
import updateNodeElement from "./updateNodeElement";
import createDOMElement from "./createDOMElement";
import unmountNode from "./unmountNode";
import diffComponent from "./diffComponent";

/**
 * 计算如何渲染
 * @param virtualDOM
 * @param container
 * @param oldDOM 页面的真实DOM结构container.firstChild
 */
export default function diff(virtualDOM, container, oldDOM) {
    // 验证oldVirtualDOM是否存在
    const oldVirtualDOM = oldDOM && oldDOM._virtualDOM;
    const oldComponent = oldVirtualDOM && oldVirtualDOM.component;

    // 判断 oldVirtualDOM 是否存在，如果不存在那就直接将virtualDOM 转为 realDOM
    if(!oldVirtualDOM) {
        // 判断是普通的VirtualDOM对象还是组件形式的virtualDOM对象
        mountElement(virtualDOM, container);

    // 两个DOM的类型相同
    } else if(oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) {
        if(virtualDOM.type === 'text') {
            // 如果是文本节点就更新内容
            updateTextNode(virtualDOM, oldVirtualDOM, oldDOM);
        } else {
            // 如果是元素节点就更新属性
            updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM);
        }

        // 遍历子元素进行更新
        virtualDOM.children.forEach((child, index) => {
            diff(child, oldDOM, oldDOM.childNodes[index])
        });

        // 删除节点
        const oldChildNodes = oldDOM.childNodes;
        const newChildNodes = virtualDOM.children;

        if(oldChildNodes.length > newChildNodes.length) {
            for (let i = oldChildNodes.length - 1; i > newChildNodes.length - 1; i--) {
                unmountNode(oldChildNodes[i])
            }
        }

    // 两个DOM的类型不同并且判断该组件不为函数
    } else if(virtualDOM.type !== oldVirtualDOM.type && typeof virtualDOM.type !== 'function') {
        // 生成新的DOM对象
        const newElement = createDOMElement(virtualDOM);
        // 替换旧的DOM对象
        oldDOM.parentNode.replaceChild(newElement, oldDOM);

    } else if(typeof virtualDOM.type === 'function') {
        // 组件
        diffComponent(virtualDOM, oldComponent, oldDOM, container);
    }
}