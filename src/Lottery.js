import React, { Component } from 'react';
import LottoBall from './LottoBall';
import './Lottery.css'

class Lottery extends Component {
    static defaultProps = {
        title: "Lottery",
        numBalls: 6,
        maxNum: 40
    }

    constructor(props) {
        super(props)
        
        this.state = {
             nums: Array.from({length: this.props.numBalls}),
             handleClick: this.handleClick.bind(this)
        }
    }

    // generateNums() {
    //     let newArray = [];
    //     for(let i = 0; i < this.props.numBalls; i++) {
    //         let randNum = Math.floor(Math.random() * this.props.maxNum) + 1;
    //         newArray.push(randNum);
    //     }

    //     this.setState({nums: newArray});
    // }

    randomNums(curState) {
      return { 
          nums: curState.nums.map(
            n => Math.floor(Math.random() * this.props.maxNum) + 1
        )}
    } 
    generateNums() {
        this.setState(this.randomNums);
    }

    handleClick(e) {
        this.generateNums();
    }
    

    render() {

        return (
            <div className="Lottery">
                <h1 className="Lottery-title">{this.props.title}</h1>
                <div className="Lottery-balls">
                    {this.state.nums.map(data => 
                        <LottoBall num={data}/>)
                    }
                </div>
                <button className="Lottery-btn" onClick={this.state.handleClick}>Generate</button>
            </div>
        )
    }
}

export default Lottery
