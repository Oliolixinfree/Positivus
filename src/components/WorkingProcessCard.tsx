import { useState } from 'react'
import Card from './Card'
import Heading from './UI/Heading'

interface IProcessCard {
    id: number
    title: string
    description: string
}

export const WorkingProcessCard: React.FC<IProcessCard> = ({
    id,
    title,
    description,
}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Card
            className="px-[60px] py-10 border-[1px] border-dark transition-all duration-300"
            bg={isOpen ? 'bg-green' : 'bg-gray'}
            shadow="shadow-[0px_5px_0px_0px_rgb(25,26,35)]"
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <span className="text-6xl font-medium">
                        {id < 10 ? `0${id}` : id}
                    </span>
                    <Heading>{title}</Heading>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-center cursor-pointer bg-gray rounded-full 
                        w-14 h-14 border-[1px] border-dark hover:fill-green
                        transition-all duration-300"
                >
                    {isOpen ? (
                        <svg
                            width="17.76"
                            height="5.64"
                            viewBox="0 0 17.76 5.64"
                        >
                            <path d="M0 5.64V0H17.75V5.64H0Z" />
                        </svg>
                    ) : (
                        <svg
                            width="25.08"
                            height="25.08"
                            viewBox="0 0 25.08 25.08"
                        >
                            <path d="M9.59 25.08V15.36H0V9.71H9.59V0H15.48V9.71H25.08V15.36H15.48V25.08H9.59Z" />
                        </svg>
                    )}
                </button>
            </div>
            {isOpen && (
                <>
                    <hr className="my-7 border-dark" />
                    <p className="text-lg leading-6">{description}</p>
                </>
            )}
        </Card>
    )
}
