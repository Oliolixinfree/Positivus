import type { ReactNode } from 'react'

interface IWrapperProps {
    children: ReactNode
}

const Wrapper = ({ children }: IWrapperProps) => {
    return <div className="w-full mx-auto max-w-[1240px]">{children}</div>
}

export default Wrapper
