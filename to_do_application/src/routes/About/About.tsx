import React from "react";
import './About.css'

export const About = function About(){
    return(<div className='Author-info'>
            <div>
                <p>Автор</p>
                <img src={require('../../assets/author.jpg')} alt='ой'></img> 
                <p className='Atuhor-name'>Милютин Дмитрий Александрович</p>
            </div>
            
            <div className='Contacts'>
                <p>Контакты:</p>
                <ul>
                    
                    <li><a href='https://t.me/megumeguminmin'>telegram</a></li>
                    <li><a href='https://github.com/DmitriyGj'>GitHub</a></li>
                </ul>
            </div>
        </div>
    )
}

