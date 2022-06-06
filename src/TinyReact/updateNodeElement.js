/**
 * 为元素添加属性
 * @param newElement
 * @param virtualDOM
 * @param oldVirtualDOM
 */
export default function updateNodeElement(newElement, virtualDOM, oldVirtualDOM) {
    // 获取节点对应属性
    const newProps = virtualDOM.props || {};
    // 设置属性时 oldVirtualDOM 不传参，更新属性时 oldVirtualDOM 传参
    const oldProps = oldVirtualDOM?.props || {};
    // 属性设置和更新
    Object.keys(newProps).forEach(propName => {
        const newPropsValue = newProps[propName];
        const oldPropsValue = oldProps[propName];

        if(newPropsValue !== oldPropsValue) {
            // 判断是否为为事件属性
            if(propName.startsWith('on')) {
                // 事件名称
                const eventName = propName.slice(2).toLowerCase();
                // 绑定事件
                newElement.addEventListener(eventName, newPropsValue);
                // 删除原有的事件处理函数
                if(oldPropsValue) {
                    // 一个事件可以绑定多个事件处理函数，所以删除原来的事件处理函数
                    newElement.removeEventListener(eventName, oldPropsValue)
                }
            } else if(propName === 'value' || propName === 'checked') {
                // value 或者 checked 是不可以直接通过 setAttribute 方法来添加
                newElement[propName] = newPropsValue;
            } else if (propName !== "children") {
                // children 是存在props中的子结点并不是属性，所以这里要排除掉
                if(propName === "className") {
                    newElement.setAttribute('class', newPropsValue);
                } else {
                    newElement.setAttribute(propName, newPropsValue);
                }
            }
        }
    })

    // 判断属性被删除情况
    Object.keys(oldProps).forEach(propName => {
        const newPropsValue = newProps[propName];
        const oldPropsValue = oldProps[propName];
        if(!newPropsValue) {
            // 属性被删除了
            if(propName.startsWith('on')) {
                const eventName = propName.slice(2).toLowerCase();
                newElement.removeEventListener(eventName, oldPropsValue)
            }
        } else if(propName !== 'children') {
            newElement.removeAttribute(propName);
        }
    })
}