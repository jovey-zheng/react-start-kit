import React, {Component} from 'react';
import {Button} from 'antd';
import classNames from 'classnames';

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

    return (
      <div>
        <div className="margin-bottom-md">
          <Button type="primary" onClick={::this.handleChangeColor}>点击这里改变文字颜色</Button>
          <span className={classNames("margin-left-md", {"text-red": !colorStatus})}>这段文字将会变色</span>
        </div>

        <div className="margin-bottom-md">
          用 <span className="code-text">setState</span> 修改当前 Component 的 state
        </div>
      </div>
    )
  }
}
