import React from 'react'

function Button({ className, title, onClick }) {
    return (
        <button 
            className={`px-5 py-2.5 text-sm font-thin cursor-pointer transition-colors text-center ${className}`}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default Button