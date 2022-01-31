import React from 'react'
import './ModalWindow.css';
import {ModalProps} from '../../types/types'
import { onKeyDown } from '../../functions/functions';
import {ThemeContext} from '../../contexts/ThemeContext'

export const ModalWindow = function Modal({visible = false,
                                    title = '',
                                    content = '',
                                    footer = '',
                                    onClose, }: ModalProps)  {
    React.useEffect(() => {
        const onKeydownHandler = (e:KeyboardEvent)=> onKeyDown('Escape',onClose)(e)
        document.addEventListener('keydown', onKeydownHandler)
        return () => document.removeEventListener('keydown',onKeydownHandler)
    })

    if (!visible) return null

    return (
    <ThemeContext.Consumer>{value=>
        <div className={`modal modal-theme-${value}`} onClick={onClose}>
            <div className={`modal-dialog $modal-theme-${value}`} onClick={e => e.stopPropagation()}>
            <div className='modal-header'>
                <h3 className='modal-title'>{title}</h3>
                <span className='modal-close' onClick={onClose}>
                &times;
                </span>
            </div>
            <div className='modal-body'>
                <div className='modal-content'>{content}</div>
            </div>
            {footer && <div className='modal-footer'>{footer}</div>}
            </div>
        </div>}
    </ThemeContext.Consumer>
    )
}

