import mountNativeElement from "./mountNativeElement";
import isFunction from "./isFunction";
import mountComponent from "./mountComponent";

/**
 * 判断是组件形式的VirtualDOM还是原生的virtualDOM
 * @param virtualDOM
 * @param container
 * @param oldDOM
 */
export default function mountElement (virtualDOM, container, oldDOM) {
    // Component VS NativeElement
    if(isFunction(virtualDOM)) {
        // Component
        mountComponent(virtualDOM, container, oldDOM);
    } else {
        // NativeElement
        mountNativeElement(virtualDOM, container, oldDOM);
    }
}