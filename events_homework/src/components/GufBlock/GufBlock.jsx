import './GufBlock.css'
import {Component} from 'react'

class GufBlock extends Component{
    constructor(props){
        super(props);
        this.state = {
        content:'Ну и че ты мне сделаешь'
        };
    };
    
    render(){
    return  <div className='GufBlock'
                onClick={()=>this.setState({content: 'Ты кликнул'})}
                onMouseEnter={()=>this.setState({content:'Ты навёлся'})}
                onMouseLeave = {(e)=>this.setState({content: 'И че это все что ли ?'})}>
                <h2>{this.state.content}</h2> 
            </div>
    }
} 

export {GufBlock}