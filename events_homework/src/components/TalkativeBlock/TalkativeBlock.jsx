import {Component} from 'react'
import './TalkativeBlock.css'

class TalkativeBlock extends Component{
    constructor(props){
      super(props);
      this.state= {
        content:'Ожидаю твоих действий'
      };
    };
  
    render(){
      return <div className='TalkativeBlock' 
                tabIndex={1}
                onKeyPress={(e)=>this.setState({content: `Та нажал клавишу ${e.key}`})}
                onBlur={()=>this.setState({content: 'Сфокусируйся на мне, гад'})}
                onFocus={()=>this.setState({content: 'Ой ну и умничка ты'})}>
                <h2>{this.state.content}</h2>
            </div>
    }
}

export {TalkativeBlock} 