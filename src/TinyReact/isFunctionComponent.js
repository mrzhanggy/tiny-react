/**
 * 判断是否是函数组件
 * @param virtualDOM
 */
import isFunction from "./isFunction";

export default function isFunctionComponent (virtualDOM) {
    const type = virtualDOM.type;
    // 类组件的 prototype 中是有 render 方法的
    return type && isFunction(virtualDOM) && !(type.prototype && type.prototype.render)
}