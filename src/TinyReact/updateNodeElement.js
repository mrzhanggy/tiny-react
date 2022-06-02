/**
 * 为元素添加属性
 * @param newElement
 * @param virtualDOM
 */
export default function updateNodeElement(newElement, virtualDOM) {
    const newProps = virtualDOM.props;
    Object.keys(newProps).forEach(propName => {
        const newPropsValue = newProps[propName];
        // 判断是否为为事件属性
        if(propName.startsWith('on')) {
            // 事件名称
            const eventName = propName.slice(2).toLowerCase();
            // 绑定事件
            newElement.addEventListener(eventName, newPropsValue);
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
    })
}