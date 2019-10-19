import React, { Component } from 'react';
import './LottoBall.css';

class LottoBall extends Component {
    static defaultProps = {
        num: 1,
    }

    render() {
        return (
            <div>
                <div className="LottoBall">
                    <span className="LottoBall-number">{this.props.num}</span>
                </div>
            </div>
        )
    }
}

export default LottoBall
