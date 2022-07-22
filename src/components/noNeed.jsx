import React from 'react'
import { useState } from 'react';

const NoNeed = () => {
    const [opacity, setOpacity] = useState(1)
    const [display, setDisplay] = useState(1)
    setTimeout(() => {
        setOpacity(0)
        setTimeout(() => {
            setDisplay("none");
        }, 600);
    }, 2000);
    return (
        <div className="preload" style={{opacity: `${opacity}`, display: `${display}`}}>
            <div className="noNeed">
                <span>
                    <p>
                        <div>Fly</div>
                        <div>away</div>
                    </p>

                    <p>
                        <div>Com</div>
                        <div>rade</div>
                    </p>
                </span>
            </div>
        </div>
    )
}

export default NoNeed;