/**
 * 创建 VirtualDOM
 * @param {string} type 元素类型
 * @param {object | null} props
 * @param {createElement[]} children
 * @return {object} Virtual DOM
 */
export default function createElement(type, props, ...children) {
    // 返回 VirtualDOM 对象
    return {
        type,
        props,
        children
    }
}