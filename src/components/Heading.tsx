import Wrapper from './Wrapper'
import Tag from './UI/Tag'
import type { FC } from 'react'

interface ITagDescription {
    children: React.ReactNode
}

export const TagDescription: FC<ITagDescription> = ({ children }) => {
    return (
        <div>
            <Wrapper>{children}</Wrapper>
        </div>
    )
}
