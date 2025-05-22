import React from 'react'
import Card from './Card'
import Heading from './UI/Heading'

interface IEmployeesCard {
    id?: number
    name: string
    img: string
    description: string
    position: string
}

export const EmployeesCard: React.FC<IEmployeesCard> = ({
    id,
    img,
    name,
    description,
    position,
}) => {
    return (
        <Card
            className="border-[1px] border-dark w-fit py-10 px-9"
            bg="bg-gray"
            shadow="shadow-[0px_5px_0px_0px_rgb(25,26,35)]"
        >
            <div className="flex align-top gap-6.5">
                <div className="w-[100px] h-[100px] relative shrink-0">
                    <svg
                        className="absolute z-0 top-2 left-2 "
                        width="97.822266"
                        height="97.823242"
                        viewBox="0 0 97.8223 97.8232"
                    >
                        <path
                            id="Vector"
                            d="M83.8 48.91C116.64 86.32 86.32 116.64 48.91 83.8C11.5 116.64 -18.83 86.32 14.01 48.91C-18.83 11.5 11.5 -18.83 48.91 14.01C86.32 -18.83 116.64 11.5 83.8 48.91Z"
                            fill="#231F20"
                            fill-opacity="1.000000"
                            fill-rule="nonzero"
                        />
                    </svg>
                    <div
                        style={{ backgroundImage: `url('${img}')` }}
                        className="absolute top-0 left-0   
                                    mask-[url(./assets/images/MaskEmployee.svg)] mask-contain mask-no-repeat
                                    w-[100px] h-[100px] bg-center bg-no-repeat bg-cover"
                        // bg-[url('${img}')]
                    />
                </div>
                <div className="flex flex-col gap-5 w-full">
                    <div className="flex justify-end">
                        <div
                            className="flex items-center justify-center cursor-pointer bg-dark rounded-full 
                                        w-9 h-9 fill-green hover:fill-gray transition-all duration-300"
                        >
                            <svg
                                width="17.000000"
                                height="17.000000"
                                viewBox="0 0 17 17"
                            >
                                <path
                                    id="linkedin"
                                    d="M2.06 4.09C0.9 4.09 0 3.18 0 2.07C0 0.95 0.9 0 2.06 0C3.17 0 4.07 0.95 4.07 2.07C4.07 3.18 3.17 4.09 2.06 4.09ZM13.45 17L17 17L17 10.78C17 7.75 16.31 5.36 12.76 5.36C11.06 5.36 9.9 6.32 9.42 7.22L9.37 7.22L9.37 5.68L6.03 5.68L6.03 17L9.53 17L9.53 11.42C9.53 9.93 9.79 8.5 11.65 8.5C13.45 8.5 13.45 10.2 13.45 11.47L13.45 17ZM3.81 17L0.31 17L0.31 5.68L3.81 5.68L3.81 17Z"
                                    // fill="#B9FF66"
                                />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <Heading
                            fw="font-medium"
                            size="s"
                            className="leading-6"
                        >
                            {name}
                        </Heading>
                        <div className="text-lg whitespace-nowrap">
                            {position}
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-7 border-dark" />
            <p className="text-lg leading-6">{description}</p>
        </Card>
    )
}

export default EmployeesCard
