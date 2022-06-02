import mountElement from "./mountElement";

export default function createDOMElement(virtualDOM) {
    let newElement = null;
    // 判断元素节点类型
    if(virtualDOM.type === 'text') {
        newElement = document.createTextNode(virtualDOM.props.textContent);
    } else {
        newElement = document.createElement(virtualDOM.type);
    }
    // 递归创建子节点，再通过mountElement判断是哪一种VirtualDOM
    virtualDOM.children.forEach(child => mountElement(child, newElement));

    return newElement;
}