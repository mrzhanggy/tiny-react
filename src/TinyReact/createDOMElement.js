import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";

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
    // 递归创建子节点，再通过mountElement判断是哪一种VirtualDOM
    virtualDOM.children.forEach(child => mountElement(child, newElement));

    return newElement;
}