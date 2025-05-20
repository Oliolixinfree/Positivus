import type { ReactNode } from 'react'

type Size = 'xs' | 's' | 'm' | 'l' | 'xl'

type Weght = 'font-medium' | 'font-normal'

const sizeClasses: Record<Size, string> = {
    xs: 'text-lg',
    s: 'text-xl',
    m: 'text-[30px]',
    l: 'text-[40px]',
    xl: 'text-[60px]',
}

interface IHeading {
    fw?: Weght
    className?: string
    size?: Size
    children?: ReactNode
}
const Heading = ({
    children,
    fw = 'font-medium',
    size = 'm',
    className,
}: IHeading) => {
    return (
        <div className={` ${className} ${fw} ${sizeClasses[size]}`}>
            {children}
        </div>
    )
}

export default Heading
