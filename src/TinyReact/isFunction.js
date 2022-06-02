/**
 * 判断是否是组件
 * @param virtualDOM
 * @returns {boolean}
 */
export default function isFunction (virtualDOM) {
    // 函数组件中virtualDOM的type='function'
    return virtualDOM && typeof virtualDOM.type === 'function'
}