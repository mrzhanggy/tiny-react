import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";
import isFunction from "./isFunction";
import mountElement from "./mountElement";

/**
 * 处理组件VirtualDOM
 * @param virtualDOM
 * @param container
 */
export default function mountComponent(virtualDOM, container) {
    let nextVirtualDOM = null;
    // 判断是函数组件还是类组件
    if(isFunctionComponent(virtualDOM)){
        //获取函数组件的native virtual DOM
        nextVirtualDOM = buildFunctionComponent(virtualDOM);
        // 判断这个函数组件返回的是否是函数组件
        if(isFunction(nextVirtualDOM)) {
            mountComponent(nextVirtualDOM, container)
        } else {
            // 已经获取到了函数组件返回的原生虚拟DOM，直接用mountNativeElement方法进行创建并渲染
            mountNativeElement(nextVirtualDOM, container);
        }
    } else {
        // 类组件
        console.log('类组件')
    }
}

/**
 * 处理函数组件
 * @param virtualDOM
 */
function buildFunctionComponent(virtualDOM) {
    // virtualDOM.type 存储着函数组件本身
    return virtualDOM.type()
}