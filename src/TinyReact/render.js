import diff from "./diff";

/**
 * 渲染DOM
 * @param {Object} virtualDOM 虚拟DOM
 * @param {Element} container 要挂在到的容器
 * @param {Object} oldDOM 旧的虚拟DOM
 */
export default function render(
    virtualDOM,
    container,
    oldDOM= container.firstChild // 真实的DOM
) {
    diff(virtualDOM, container, oldDOM)
}