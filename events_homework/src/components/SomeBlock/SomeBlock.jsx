import { Component } from 'react'
import './SomeBlock.css'

class SomeBlock extends Component{
    constructor(props){
        super(props);
        this.state = {
            content:'Сделай хоть что-нибудь'
        };
    }

    render(){
        return  <div className='SomeBlock'
                onPointerDown={()=>this.setState({content:'Ты че давишь-то ?'})}
                onPointerUp={()=>this.setState({content: 'Нормально так подавил, ряльна'})}
                onPointerLeave={()=>this.setState({content: 'Ну пока'})}
                onPointerEnter={()=>this.setState({content:'Че ты тут делаешь'})}
                onScroll={
                    (e)=>{alert('У тебя нервов не хватит');
                    this.setState({content:'Ну ты и больной чел'})}}>
                <h4>{this.state.content}</h4>
                </div>
    }
}

export {SomeBlock}
