/**
 * 处理原生virtualDOM对象转换为realDOM
 * @param virtualDOM
 * @param container
 */
import createDOMElement from "./createDOMElement";

export default function mountNativeElement(virtualDOM, container) {
    let newElement = createDOMElement(virtualDOM);
    // 将创建的元素挂载到容器
    container.appendChild(newElement);
}