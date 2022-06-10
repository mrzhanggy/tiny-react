import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";

/**
 * 使用virtualDOM 生成真实的DOM元素
 * @param virtualDOM
 * @returns {*}
 */
export default function createDOMElement(virtualDOM) {
    let newElement = null;
    // 判断元素节点类型
    if(virtualDOM.type === 'text') {
        newElement = document.createTextNode(virtualDOM.props.textContent);
    } else {
        // 创建元素节点
        newElement = document.createElement(virtualDOM.type);
        // 为元素添加属性
        updateNodeElement(newElement, virtualDOM);
    }

    // 将VirtualDOM存于DOM本身的属性上
    newElement._virtualDOM = virtualDOM;

    // 递归创建子节点，再通过mountElement判断是哪一种VirtualDOM
    virtualDOM.children.forEach(child => mountElement(child, newElement));

    // 判断属性中是否存在ref方法
    if(virtualDOM.props && virtualDOM.props.ref) {
        virtualDOM.props.ref(newElement);
    }

    return newElement;
}