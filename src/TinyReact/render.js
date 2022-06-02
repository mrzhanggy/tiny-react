import diff from "./diff";

/**
 * 渲染DOM
 * @param {Object} virtualDOM 虚拟DOM
 * @param {Element} container 要挂在到的容器
 * @param {Object} oldVirtualDOM 旧的虚拟DOM
 */
export default function render(virtualDOM, container, oldVirtualDOM) {
    diff(virtualDOM, container, oldVirtualDOM)
}