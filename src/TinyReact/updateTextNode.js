/**
 * 更新文本节点
 * @param virtualDOM 新虚拟DOM
 * @param oldVirtualDOM 旧虚拟DOM
 * @param oldDOM 真实DOM
 */
export default function updateTextNode(virtualDOM, oldVirtualDOM, oldDOM) {
    // 判断两段文本是否一致
    if(virtualDOM.props.textContent !== oldVirtualDOM.props.textContent) {
        // 将新的文本更新到旧的虚拟DOM上
        oldDOM.textContent = virtualDOM.props.textContent;
        // 更新DOM元素上的虚拟DOM属性
        oldDOM._virtualDOM = virtualDOM;
    }
}