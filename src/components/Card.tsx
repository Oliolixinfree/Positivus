import React, { type ReactNode } from 'react'

interface ICard {
    children: ReactNode
    className?: string
    bg: 'bg-green' | 'bg-dark' | 'bg-gray'
    shadow?: 'shadow-[0px_5px_0px_0px_rgb(25,26,35)]'
}

const Card: React.FC<ICard> = ({ children, className, bg, shadow }) => {
    return (
        <div
            className={`rounded-[45px] w-[600px] ${shadow} ${bg} ${className}`}
        >
            {children}
        </div>
    )
}

export default Card
