import mountNativeElement from "./mountNativeElement";

/**
 * 判断是组件形式的VirtualDOM还是原生的virtualDOM
 * @param virtualDOM
 * @param container
 */
export default function mountElement (virtualDOM, container) {
    // Component VS NativeElement
    mountNativeElement(virtualDOM, container);
}