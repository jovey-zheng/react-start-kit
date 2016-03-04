import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';
import classNames from 'classnames';
import * as counterActions from 'actions/counterActions';

@connect(
  state => ({
    counter: state.counter,
  })
  ,{...counterActions}
)
export default class StartPage extends Component {

  state = {
    colorStatus: true,
  };

  handleChangeColor() {
    this.setState({
      colorStatus: !this.state.colorStatus,
    })
  }

  render() {
    const {colorStatus} = this.state;
    const {counter, inc, dec} = this.props;

    return (
      <div>
        <div className="margin-bottom-md">
          <Button type="primary" onClick={::this.handleChangeColor}>点击这里改变文字颜色</Button>
          <span className={classNames("margin-left-md", {"text-red": !colorStatus})}>这段文字将会变色</span>
        </div>

        <div className="margin-bottom-md">
          用 <span className="code-text">setState</span> 修改当前 Component 的 state
        </div>

        <div>
          <Button onClick={() => inc()}>+</Button>
          <span className="margin-left-md margin-right-md">{counter}</span>
          <Button onClick={() => dec()}>-</Button>
        </div>

        <div className="margin-bottom-md margin-top-md">
          <span className="code-text">Redux</span>：修改 state，你可以打开控制台查看 action 和 Log
        </div>
      </div>
    )
  }
}
