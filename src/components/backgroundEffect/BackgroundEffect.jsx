import React from 'react'
import { useEffect } from 'react'
import "./backgroundEffect.css"

const BackgroundEffect = () => {

    const getItems = () => {

        const rows = 12;
        const columns = 3;

        let items = [];
        let left = 0;
        let delay = 0;
        for (let column = 0; column < columns; column++) {
            for (let row = 0; row < rows; row++) {
                delay = column < 2 ? Math.random() * 15 : 10 + Math.random() * 10;
                const element = <div key={row} style={{left : left + "px", animationDelay : delay + "s"}} className="background-item">a</div>;
                left += 50;
                items.push(element);
            }   
            left = 0;         
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