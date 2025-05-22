import Wrapper from './Wrapper'
import Card from './Card'
import Heading from './UI/Heading'
import Card1 from '../assets/images/Card1.png'
import Card2 from '../assets/images/Card2.png'
import Card3 from '../assets/images/Card3.png'
import Card4 from '../assets/images/Card4.png'
import Card5 from '../assets/images/Card5.png'
import Card6 from '../assets/images/Card6.png'
import ArrowLink from './UI/ArrowLink'

const CardList = () => {
    return (
        <div>
            <Wrapper>
                <div className="flex gap-10 flex-wrap justify-between">
                    <Card
                        shadow="shadow-[0px_5px_0px_0px_rgb(25,26,35)]"
                        bg="bg-gray"
                        className="p-[50px] border-[1px] border-dark w-[600px]"
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-[93px]">
                                <div>
                                    <div className="bg-green rounded-[7px] px-2 w-fit">
                                        <Heading size="m" fw="font-medium">
                                            Search engine
                                        </Heading>
                                    </div>
                                    <div className="bg-green rounded-[7px] px-2 w-fit">
                                        <Heading size="m" fw="font-medium">
                                            optimization
                                        </Heading>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3.5 text-xl">
                                    <ArrowLink className="fill-gray hover:fill-green cursor-pointer bg-dark -rotate-30" />
                                    Learn more
                                </div>
                            </div>
                            <img
                                className="object-contain"
                                src={Card1}
                                alt={Card1}
                            />
                        </div>
                    </Card>
                    <Card
                        shadow="shadow-[0px_5px_0px_0px_rgb(25,26,35)]"
                        bg="bg-green"
                        className="p-[50px] border-[1px] border-dark w-[600px]"
                    >
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-[93px]">
                                <div>
                                    <div className="bg-white rounded-[7px] px-2 w-fit">
                                        <Heading size="m" fw="font-medium">
                                            Pay-per-click
                                        </Heading>
                                    </div>
                                    <div className="bg-white rounded-[7px] px-2 w-fit">
                                        <Heading size="m" fw="font-medium">
                                            advertising
                                        </Heading>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3.5 text-xl ">
                                    <ArrowLink className="fill-green hover:fill-gray cursor-pointer bg-dark -rotate-30" />
                                    Learn more
                                </div>
                            </div>
                            <img
                                className="object-contain"
                                src={Card2}
                                alt={Card2}
                            />
                        </div>
                    </Card>
                    <Card
                        shadow="shadow-[0px_5px_0px_0px_rgb(25,26,35)]"
                        bg="bg-dark"
                        className="p-[50px] border-[1px] border-dark w-[600px]"
                    >
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-[93px]">
                                <div>
                                    <div className="bg-white rounded-[7px] px-2 w-fit">
                                        <Heading size="m" fw="font-medium">
                                            Social Media
                                        </Heading>
                                    </div>
                                    <div className="bg-white rounded-[7px] px-2 w-fit">
                                        <Heading size="m" fw="font-medium">
                                            Marketing
                                        </Heading>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3.5 text-xl text-white">
                                    <ArrowLink className="fill-dark hover:fill-green cursor-pointer bg-white -rotate-30" />
                                    Learn more
                                </div>
                            </div>
                            <img
                                className="object-contain"
                                src={Card3}
                                alt={Card3}
                            />
                        </div>
                    </Card>
                    <Card
                        shadow="shadow-[0px_5px_0px_0px_rgb(25,26,35)]"
                        bg="bg-gray"
                        className="p-[50px] border-[1px] border-dark w-[600px]"
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-[93px]">
                                <div>
                                    <div className="bg-green rounded-[7px] px-2 w-fit">
                                        <Heading size="m" fw="font-medium">
                                            Email
                                        </Heading>
                                    </div>
                                    <div className="bg-green rounded-[7px] px-2 w-fit">
                                        <Heading size="m" fw="font-medium">
                                            Marketing
                                        </Heading>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3.5 text-xl">
                                    <ArrowLink className="fill-gray hover:fill-green cursor-pointer bg-dark -rotate-30" />
                                    Learn more
                                </div>
                            </div>
                            <img
                                className="object-contain"
                                src={Card4}
                                alt={Card4}
                            />
                        </div>
                    </Card>
                    <Card
                        shadow="shadow-[0px_5px_0px_0px_rgb(25,26,35)]"
                        bg="bg-green"
                        className="p-[50px] border-[1px] border-dark w-[600px]"
                    >
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-[93px]">
                                <div>
                                    <div className="bg-white rounded-[7px] px-2 w-fit">
                                        <Heading size="m" fw="font-medium">
                                            Content
                                        </Heading>
                                    </div>
                                    <div className="bg-white rounded-[7px] px-2 w-fit">
                                        <Heading size="m" fw="font-medium">
                                            Creation
                                        </Heading>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3.5 text-xl ">
                                    <ArrowLink className="fill-green hover:fill-gray cursor-pointer bg-dark -rotate-30" />
                                    Learn more
                                </div>
                            </div>
                            <img
                                className="object-contain"
                                src={Card5}
                                alt={Card5}
                            />
                        </div>
                    </Card>
                    <Card
                        shadow="shadow-[0px_5px_0px_0px_rgb(25,26,35)]"
                        bg="bg-dark"
                        className="p-[50px] border-[1px] border-dark w-[600px]"
                    >
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-[93px]">
                                <div>
                                    <div className="bg-white rounded-[7px] px-2 w-fit">
                                        <Heading size="m" fw="font-medium">
                                            Analytics and
                                        </Heading>
                                    </div>
                                    <div className="bg-white rounded-[7px] px-2 w-fit">
                                        <Heading size="m" fw="font-medium">
                                            Tracking
                                        </Heading>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3.5 text-xl text-white">
                                    <ArrowLink className="fill-dark hover:fill-green cursor-pointer bg-white -rotate-30" />
                                    Learn more
                                </div>
                            </div>
                            <img
                                className="object-contain"
                                src={Card6}
                                alt={Card6}
                            />
                        </div>
                    </Card>
                </div>
            </Wrapper>
        </div>
    )
}

export default CardList
