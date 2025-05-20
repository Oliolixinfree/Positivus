import React, { type ReactNode } from 'react'

interface IButton {
    children: ReactNode
    onClick: (e?: any) => void
    className?: string
    disabled?: boolean
    type?: string
}

const Button: React.FC<IButton> = ({
    children,
    onClick,
    className,
    disabled,
    // type,
}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`cursor-pointer border-[1px] rounded-[14px] px-9 py-5 ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
