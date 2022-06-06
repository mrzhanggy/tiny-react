import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";
import isFunction from "./isFunction";

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
    } else {
        // 类组件
        nextVirtualDOM = buildClassComponent(virtualDOM);
    }

    // 判断这个函数组件返回的是否是函数组件
    if(isFunction(nextVirtualDOM)) {
        mountComponent(nextVirtualDOM, container)
    } else {
        // 已经获取到了函数组件返回的原生虚拟DOM，直接用mountNativeElement方法进行创建并渲染
        mountNativeElement(nextVirtualDOM, container);
    }
}

/**
 * 处理函数组件
 * @param virtualDOM
 */
function buildFunctionComponent(virtualDOM) {
    // virtualDOM.type 存储着函数组件本身
    return virtualDOM.type(virtualDOM.props || {});
}

/**
 * 处理类组件
 * @param virtualDOM
 */
function buildClassComponent(virtualDOM) {
    // 对于处理类组件需要拿到组件的实例对象，才能拿到组件内部的render方法，通过render方法得到类组件返回的virtualDOM
    // virtualDOM.type 中存储类组件的构造函数
    const component = new virtualDOM.type(virtualDOM.props || {} );
    const nextVirtualDOM = component.render();
    // 把实例保存在返回的virtualDOM中
    nextVirtualDOM.component = component;
    return nextVirtualDOM;
}