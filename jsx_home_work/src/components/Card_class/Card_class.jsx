import React from 'react'
import './Card_class.css'
class CardClass extends React.Component{

    constructor(props){
        super(props);   
        this.state = {
            info: true,    
        }
        this.toggleStateInfo = this.toggleStateInfo.bind(this);
    }

    toggleStateInfo () {
        this.setState({info: this.state.info? false: true,})
    }

    render(){
        let infoBlock;
        if(this.state.info){
            infoBlock = <div>
                            <img src = {this.props.imgSrc} alt={this.props.imgSrc} />
                            <h3>{this.props.info}</h3>
                        </div>
        }
        return (<div className= 'Card_class'>
                    <h1>It is {this.props.name}</h1>
                    {infoBlock}
                    <button onClick={this.toggleStateInfo /*() => this.toggleStateInfo()*/}>
                        {this.state.info ? 'Click to hide info':'Click to show info'}
                    </button>       
                </div>)
    }
}



export default CardClass