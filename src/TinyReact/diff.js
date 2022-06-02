import mountElement from "./mountElement";

/**
 * 计算如何渲染
 * @param virtualDOM
 * @param container
 * @param oldVirtualDOM
 */
export default function diff(virtualDOM, container, oldVirtualDOM) {
    // 判断 oldVirtualDOM 是否存在，如果不存在那就直接将
    if(!oldVirtualDOM) {
        // 判断是普通的VirtualDOM对象还是组件形式的virtualDOM对象
        mountElement(virtualDOM, container);
    }
}