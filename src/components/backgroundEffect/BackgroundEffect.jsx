import React from 'react'
import { useEffect } from 'react'
import "./backgroundEffect.css"

const BackgroundEffect = () => {

    const getItems = () => {
        const alfabet = "abcdefghijklmnopqrstuvwxyz"

        let letter = "";
        let items = [];
        let left = 0;
        let delay = 0;
        let animationTime = 7;

        for (let randomSymbol = 0; randomSymbol < alfabet.length; randomSymbol++) {
                letter = alfabet[Math.floor(Math.random() * alfabet.length)];
                delay +=  Math.random() * 1;
                animationTime = animationTime + Math.random() * 1;
                left = Math.random() * window.screen.width - 10;
                const element = <div key={"column_" + randomSymbol} style={{ animationDuration:animationTime+"s" ,left : left + "px", animationDelay : delay + "s"}} className="background-item">{letter}</div>;
                items.push(element);        
        }
        return items;
    }

    // useEffect(() => console.log('Hi '), [])

    return (
        <div className='background-effect'>
            {
                getItems()
            }
            
        </div>
    )
}

export default BackgroundEffect