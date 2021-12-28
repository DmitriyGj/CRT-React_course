import React from 'react'
import './SomeCard.css'

class SomeCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lifeTime: 0,
            interval: undefined,
        }
        this.handleIncrement = this.handleIncrement.bind(this);
    };

    handleIncrement() {
        this.setState({lifeTime:this.state.lifeTime+1})
        this.props.parentHandle();
    }
    
    componentDidMount(){
        this.setState({interval: setInterval(this.handleIncrement, 1000)})
    }

    componentWillUnmount(){
        clearInterval(this.state.interval);
        this.props.parentHandle(-this.state.lifeTime);
    }

    render(){
        return  <div className='SomeCard'>
                    <h1>{this.props.name}</h1>
                    <h3> Элемент сщуествует: {this.state.lifeTime} секунд</h3>
                </div>
    }
}

export {SomeCard}