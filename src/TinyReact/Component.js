import diff from "./diff";

export default class Component {
    constructor(props) {
        this.props = props;
    }

    setState(state) {
        this.state = Object.assign({}, this.state, state);
        // 获取最新的要渲染的 virtualDOM 对象
        let virtualDOM = this.render();
        // 获取旧的 virtualDOM 对象进行比对
        let oldDOM = this.getDOM();
        // 实现对象
        diff(virtualDOM, oldDOM.parentNode, oldDOM);
    }

    // 将dom存储到类的实例对象当中
    setDOM (dom) {
        this._dom = dom;
    }

    getDOM() {
        return this._dom;
    }
    // 更新props
    updateProps (props) {
        this.props = props;
    }
    // 生命周期函数
    componentWillMount() {}
    componentDidMount() {}
    componentWillReceiveProps(nextProps) {}
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props || nextState !== this.state
    }
    componentWillUpdate(nextProps, nextState) {}
    componentDidUpdate(prevProps, preState) {}
    componentWillUnmount() {}
}