import React from 'react'
import { SomeCard } from '../some_card/SomeCard';
import './CardHolder.css'

class CardHolder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showCard:true
        }
        this.toggleMountCard = this.toggleMountCard.bind(this);
    }

    toggleMountCard(){
        this.setState({showCard:!this.state.showCard})
    }

    render(){
    return  <div className='CardHolder'>
                {this.state.showCard && <SomeCard parentHandle ={this.props.parentHandle} name ='Карточка первая'/>}
                <button onClick={this.toggleMountCard}>
                {this.state.showCard ?'Демонитровать карточку':'Вмонтировать карточку'}
                </button>
            </div>
    }
}

export {CardHolder}