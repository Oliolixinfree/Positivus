import Header from '../components/Header'
import Logotypes from '../components/Logotypes'
import CardList from '../components/CardList'
import { TagDescription } from '../components/Heading'
import Card from '../components/Card'
import Wrapper from '../components/Wrapper'
import Heading from '../components/UI/Heading'
import CTAImage from '../assets/images/CTAImage.svg'
import Button from '../components/UI/Button'
import Tag from '../components/UI/Tag'
import ArrowLink from '../components/UI/ArrowLink'
import { WorkingProcessCard } from '../components/WorkingProcessCard'
import mask from '../assets/images/MaskEmployee.svg'
import emp1 from '../assets/images/emp1.png'
import EmployeesCard from '../components/EmployeesCard'

const cards = [
    {
        id: 1,
        title: 'Consultation',
        description:
            'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
        id: 2,
        title: 'Research and Strategy Development',
        description:
            'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
        id: 3,
        title: 'Implementation',
        description:
            'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
        id: 4,
        title: 'Monitoring and Optimization',
        description:
            'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
        id: 5,
        title: 'Reporting and Communication',
        description:
            'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
        id: 6,
        title: 'Continual Improvement',
        description:
            'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
]
const employeesData = [
    {
        // D:\projects\positivus\src\assets\images\emp2.png
        id: 1,
        img: '/images/emp1.png',
        name: 'John Smith',
        position: 'CEO and Founder',
        description:
            '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    },
    {
        id: 2,
        img: '/images/emp2.png',
        name: 'Jane Doe',
        position: 'Director of Operations',
        description:
            '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    },
    {
        id: 3,
        img: '/images/emp3.png',
        name: 'Michael Brown',
        position: 'Senior SEO Specialist',
        description:
            '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    },
    {
        id: 4,
        img: '/images/emp4.png',
        name: 'Emily Johnson',
        position: 'PPC Manager',
        description:
            '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    },
    {
        id: 5,
        img: '/images/emp5.png',
        name: 'Brian Williams',
        position: 'Social Media Specialist',
        description:
            '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
    },
    {
        id: 6,
        img: '/images/emp6.png',
        name: 'Sarah Kim',
        position: 'Content Creator',
        description:
            '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
    },
]

const Home = () => {
    return (
        <>
            <Header />
            <Logotypes />
            <div className="mt-[140px]">
                <TagDescription>
                    <div className="flex gap-12">
                        <Tag tag="Services" />
                        <p className="w-xl text-lg leading-[23px]">
                            At our digital marketing agency, we offer a range of
                            services to help businesses grow and succeed online.
                            These services include:
                        </p>
                    </div>
                </TagDescription>
            </div>
            <div className="mt-[85px]">
                <CardList></CardList>
            </div>
            <div className="mt-[100px]">
                <Wrapper>
                    <div className="py-6">
                        <div className="relative">
                            <img
                                className="absolute -top-4.5 right-[60px] h-fit"
                                src={CTAImage}
                                alt={CTAImage}
                            />
                            <Card bg="bg-gray" className="w-full">
                                <div className="p-[60px]">
                                    <div className="w-[500px]">
                                        <Heading fw="font-medium">
                                            Let’s make things happen
                                        </Heading>
                                        <p className="my-[26px] text-lg leading-[23px]">
                                            Contact us today to learn more about
                                            how our digital marketing services
                                            can help your business grow and
                                            succeed online.
                                        </p>
                                        <Button
                                            className="bg-dark text-white hover:text-green"
                                            onClick={() => {}}
                                        >
                                            Get your free proposal
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Wrapper>
            </div>
            <div className="mt-[140px]">
                <TagDescription>
                    <div className="flex gap-12">
                        <Tag tag="Case Studies" />
                        <p className="w-xl text-lg leading-[23px]">
                            Explore Real-Life Examples of Our Proven Digital
                            Marketing Success through Our Case Studies
                        </p>
                    </div>
                </TagDescription>
            </div>
            <div className="mt-[80px]">
                <Wrapper>
                    <Card bg="bg-dark">
                        <div className="py-[70px] px-[60px] flex justify-between items-stretch h-full">
                            <div className="w-72">
                                <p className="text-lg text-white">
                                    For a local restaurant, we implemented a
                                    targeted PPC campaign that resulted in a 50%
                                    increase in website traffic and a 25%
                                    increase in sales.
                                </p>
                                <div className="flex items-center gap-3.5 text-xl text-green mt-5">
                                    Learn more
                                    <ArrowLink className="fill-green hover:fill-gray cursor-pointer bg-dark" />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="bg-white w-[1px] my-auto h-full" />
                            </div>
                            <div className="w-72">
                                <p className="text-lg text-white">
                                    For a B2B software company, we developed an
                                    SEO strategy that resulted in a first page
                                    ranking for key keywords and a 200% increase
                                    in organic traffic.
                                </p>
                                <div className="flex items-center gap-3.5 text-xl text-green mt-5">
                                    Learn more
                                    <ArrowLink className="fill-green hover:fill-gray cursor-pointer bg-dark" />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="bg-white w-[1px] my-auto h-full" />
                            </div>
                            <div className="w-72">
                                <p className="text-lg text-white">
                                    For a national retail chain, we created a
                                    social media marketing campaign that
                                    increased followers by 25% and generated a
                                    20% increase in online sales.
                                </p>
                                <div className="flex items-center gap-3.5 text-xl text-green mt-5">
                                    Learn more
                                    <ArrowLink className="fill-green hover:fill-gray cursor-pointer bg-dark" />
                                </div>
                            </div>
                        </div>
                    </Card>
                </Wrapper>
            </div>
            <div className="mt-[140px]">
                <TagDescription>
                    <div className="flex gap-12">
                        <Tag tag="Our Working Process" />
                        <p className="w-xl text-lg leading-[23px]">
                            Step-by-Step Guide to Achieving <br />
                            Your Business Goals
                        </p>
                    </div>
                </TagDescription>
            </div>
            <div className="mt-[85px]">
                <Wrapper>
                    <div className="flex flex-col gap-7">
                        {cards.map((e) => (
                            <WorkingProcessCard
                                key={e.id}
                                id={e.id}
                                description={e.description}
                                title={e.title}
                            />
                        ))}
                    </div>
                </Wrapper>
            </div>
            <div className="mt-[140px]">
                <TagDescription>
                    <div className="flex gap-12">
                        <Tag tag="Team" />
                        <p className="w-xl text-lg leading-[23px]">
                            Meet the skilled and experienced team behind our
                            successful digital marketing strategies
                        </p>
                    </div>
                </TagDescription>
            </div>
            <div className="mt-[140px]">
                <Wrapper>
                    <div className="grid grid-cols-3 gap-10">
                        {employeesData.map((e) => (
                            <EmployeesCard
                                key={e.id}
                                name={e.name}
                                img={e.img}
                                description={e.description}
                                position={e.position}
                            />
                        ))}
                        {/* <Card
                            className="border-[1px] border-dark w-fit py-10 px-9"
                            bg="bg-gray"
                            shadow="shadow-[0px_5px_0px_0px_rgb(25,26,35)]"
                        >
                            <div className="flex gap-6.5">
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
                                        className="absolute top-0 left-0   
                                    mask-[url(./assets/images/MaskEmployee.svg)] mask-contain mask-no-repeat
                                    bg-[url('./assets/images/emp1.png')] w-[100px] h-[100px]  bg-no-repeat bg-cover
"
                                    />
                                </div>
                                <div className="flex flex-col gap-5 w-full">
                                    <div className="flex justify-end">
                                        <div
                                            className="flex items-center justify-center cursor-pointer bg-dark rounded-full 
                                        w-9 h-9 hover:fill-green transition-all duration-300"
                                        >
                                            <svg
                                                width="17.000000"
                                                height="17.000000"
                                                viewBox="0 0 17 17"
                                            >
                                                <path
                                                    id="linkedin"
                                                    d="M2.06 4.09C0.9 4.09 0 3.18 0 2.07C0 0.95 0.9 0 2.06 0C3.17 0 4.07 0.95 4.07 2.07C4.07 3.18 3.17 4.09 2.06 4.09ZM13.45 17L17 17L17 10.78C17 7.75 16.31 5.36 12.76 5.36C11.06 5.36 9.9 6.32 9.42 7.22L9.37 7.22L9.37 5.68L6.03 5.68L6.03 17L9.53 17L9.53 11.42C9.53 9.93 9.79 8.5 11.65 8.5C13.45 8.5 13.45 10.2 13.45 11.47L13.45 17ZM3.81 17L0.31 17L0.31 5.68L3.81 5.68L3.81 17Z"
                                                    fill="#B9FF66"
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
                                            John Smith
                                        </Heading>
                                        <div className="text-lg ">
                                            CEO and Founder
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-7 border-dark" />
                            <p className="text-lg leading-6">
                                10+ years of experience in digital marketing.
                                Expertise in SEO, PPC, and content strategy
                            </p>
                        </Card>
                        <Card
                            className="border-[1px] border-dark w-fit  py-10 px-9"
                            bg="bg-gray"
                            shadow="shadow-[0px_5px_0px_0px_rgb(25,26,35)]"
                        >
                            <div className="relative flex gap-8">
                                <div className="w-[100px] h-[100px]">
                                    <div
                                        // className="absolute top-10 left-9 z-10
                                        className="absolute top-0 left-0 z-10  
                                    mask-[url(./assets/images/MaskEmployee.svg)] mask-center mask-cover
                                    bg-[url('./assets/images/emp1.png')] w-[100px] h-[100px] bg-cover"
                                    />
                                    <svg
                                        // className="absolute top-12 left-12"
                                        className="absolute top-2 left-3"
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
                                </div>
                                <div className="flex flex-col gap-5 w-full">
                                    <div className="flex justify-end">
                                        <div
                                            className="flex items-center justify-center cursor-pointer bg-dark rounded-full 
                                        w-9 h-9 hover:fill-green transition-all duration-300"
                                        >
                                            <svg
                                                width="17.000000"
                                                height="17.000000"
                                                viewBox="0 0 17 17"
                                            >
                                                <path
                                                    id="linkedin"
                                                    d="M2.06 4.09C0.9 4.09 0 3.18 0 2.07C0 0.95 0.9 0 2.06 0C3.17 0 4.07 0.95 4.07 2.07C4.07 3.18 3.17 4.09 2.06 4.09ZM13.45 17L17 17L17 10.78C17 7.75 16.31 5.36 12.76 5.36C11.06 5.36 9.9 6.32 9.42 7.22L9.37 7.22L9.37 5.68L6.03 5.68L6.03 17L9.53 17L9.53 11.42C9.53 9.93 9.79 8.5 11.65 8.5C13.45 8.5 13.45 10.2 13.45 11.47L13.45 17ZM3.81 17L0.31 17L0.31 5.68L3.81 5.68L3.81 17Z"
                                                    fill="#B9FF66"
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
                                            John Smith
                                        </Heading>
                                        <div className="text-lg ">
                                            CEO and Founder
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-7 border-dark" />
                            <p className="text-lg leading-6">
                                10+ years of experience in digital marketing.
                                Expertise in SEO, PPC, and content strategy
                            </p>
                        </Card>
                        <Card
                            className="border-[1px] border-dark w-fit  py-10 px-9"
                            bg="bg-gray"
                            shadow="shadow-[0px_5px_0px_0px_rgb(25,26,35)]"
                        >
                            <div className="relative flex gap-8">
                                <div className="w-[100px] h-[100px]">
                                    <div
                                        // className="absolute top-10 left-9 z-10
                                        className="absolute top-0 left-0 z-10  
                                    mask-[url(./assets/images/MaskEmployee.svg)] mask-center mask-cover
                                    bg-[url('./assets/images/emp1.png')] w-[100px] h-[100px] bg-cover"
                                    />
                                    <svg
                                        // className="absolute top-12 left-12"
                                        className="absolute top-2 left-3"
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
                                </div>
                                <div className="flex flex-col gap-5 w-full">
                                    <div className="flex justify-end">
                                        <div
                                            className="flex items-center justify-center cursor-pointer bg-dark rounded-full 
                                        w-9 h-9 hover:fill-green transition-all duration-300"
                                        >
                                            <svg
                                                width="17.000000"
                                                height="17.000000"
                                                viewBox="0 0 17 17"
                                            >
                                                <path
                                                    id="linkedin"
                                                    d="M2.06 4.09C0.9 4.09 0 3.18 0 2.07C0 0.95 0.9 0 2.06 0C3.17 0 4.07 0.95 4.07 2.07C4.07 3.18 3.17 4.09 2.06 4.09ZM13.45 17L17 17L17 10.78C17 7.75 16.31 5.36 12.76 5.36C11.06 5.36 9.9 6.32 9.42 7.22L9.37 7.22L9.37 5.68L6.03 5.68L6.03 17L9.53 17L9.53 11.42C9.53 9.93 9.79 8.5 11.65 8.5C13.45 8.5 13.45 10.2 13.45 11.47L13.45 17ZM3.81 17L0.31 17L0.31 5.68L3.81 5.68L3.81 17Z"
                                                    fill="#B9FF66"
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
                                            John Smith
                                        </Heading>
                                        <div className="text-lg ">
                                            CEO and Founder
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-7 border-dark" />
                            <p className="text-lg leading-6">
                                10+ years of experience in digital marketing.
                                Expertise in SEO, PPC, and content strategy
                            </p>
                        </Card> */}
                    </div>
                </Wrapper>
            </div>
        </>
    )
}

export default Home
