/**
 * 处理原生virtualDOM对象转换为realDOM
 * @param virtualDOM
 * @param container
 */
import createDOMElement from "./createDOMElement";
import unmountNode from "./unmountNode";

export default function mountNativeElement(virtualDOM, container, oldDOM) {
    let newElement = createDOMElement(virtualDOM);
    // 判断旧的DOM是否存在，如果存在则删除
    if(oldDOM) {
        unmountNode(oldDOM);
    }
    // 将创建的元素挂载到容器
    container.appendChild(newElement);
    // 获取组件实例对象
    let component = virtualDOM.component;
    // 如果不是类组件的话，就没有component
    if(component) {
        // 将DOM对象存储在类组件实例对象中
        component.setDOM(newElement);
    }
}