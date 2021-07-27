import React from 'react'
import illustration from '../../images/prompt-1.jpg'
import './style.css'

export default function StoryPic() {
    return (
        <div className="illustrationPrompt w-100 mb-5" >
            <img className="illustration" src={illustration} />
        </div>
    )
}