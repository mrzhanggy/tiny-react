/**
 * 组件更新
 * @param virtualDOM
 * @param oldComponent
 * @param oldDOM
 * @param container
 */
import diff from "./diff";

export default function updateComponent(virtualDOM, oldComponent, oldDOM, container) {
    oldComponent.componentWillReceiveProps(virtualDOM.props);
    if(oldComponent.shouldComponentUpdate(virtualDOM.props)) {
        // 未更新前的Props
        let prevProps = oldComponent.props;
        oldComponent.componentWillUpdate(virtualDOM.props);
        // 组件更新
        oldComponent.updateProps(virtualDOM.props);
        // 调用组件的render方法获取最新的VirtualDOM
        let nextVirtualDOM = oldComponent.render();
        // 更新 component 组件实例对象
        nextVirtualDOM.component = oldComponent;
        // 比对
        diff(nextVirtualDOM, container, oldDOM);
        oldComponent.componentDidUpdate(prevProps);
    }
}