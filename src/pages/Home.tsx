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
import EmployeesCard from '../components/EmployeesCard'
import { useRef, useState } from 'react'
import ReviewsCarousel from '../components/ReviewsCarousel'
import ContactForm from '../components/ContactForm'

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
const reviews = [
    {
        id: 1,
        text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
        name: 'John Smith',
        role: 'Marketing Director at XYZ Corp',
    },
    {
        id: 2,
        text: `"Positivus completely transformed our digital marketing strategy. Their data-driven approach helped us double our conversion rates in just six months. The team is incredibly knowledgeable and always goes above and beyond to deliver results."`,
        name: 'Sarah Johnson',
        role: 'CEO at Bright Solutions',
    },
    {
        id: 3,
        text: `"Working with Positivus has been a game-changer for our e-commerce business. Their SEO expertise took us from page 4 to the top of Google's search results. The ROI has been phenomenal - we've seen a 300% increase in organic traffic!"`,
        name: 'Michael Chen',
        role: 'Founder of UrbanTrend',
    },
    {
        id: 4,
        text: `"The social media campaign Positivus created for us went viral and brought in record-breaking sales. Their creative team understands exactly how to engage our target audience. We've signed a long-term contract because the results speak for themselves."`,
        name: 'Emily Rodriguez',
        role: 'Brand Manager at Nova Cosmetics',
    },
    {
        id: 5,
        text: `"As a startup, we needed maximum impact with a limited budget. Positivus delivered exactly that - their PPC campaigns have the lowest CPA in the industry. They've become an extension of our own marketing team."`,
        name: 'David Kim',
        role: 'CMO at TechVenture',
    },
    {
        id: 6,
        text: `"What impressed me most about Positivus was their transparency. Unlike other agencies, they provide clear metrics and honest assessments. Thanks to their content marketing strategy, we've established ourselves as thought leaders in our niche."`,
        name: 'Olivia Brown',
        role: 'Director of Communications at GreenLife',
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
                                    <ArrowLink className="fill-green hover:fill-gray cursor-pointer bg-dark -rotate-30" />
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
                                    <ArrowLink className="fill-green hover:fill-gray cursor-pointer bg-dark -rotate-30" />
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
                                    <ArrowLink className="fill-green hover:fill-gray cursor-pointer bg-dark -rotate-30" />
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
                        <div className="col-start-1 col-end-4 flex justify-end">
                            <Button
                                className="bg-dark text-white hover:text-green w-xs"
                                onClick={() => {}}
                            >
                                See all team
                            </Button>
                        </div>
                    </div>
                </Wrapper>
            </div>
            <div className="mt-[100px]">
                <TagDescription>
                    <div className="flex gap-12">
                        <Tag tag="Testimonials" />
                        <p className="w-xl text-lg leading-[23px]">
                            Hear from Our Satisfied Clients: Read Our
                            Testimonials to Learn More about Our Digital
                            Marketing Services
                        </p>
                    </div>
                </TagDescription>
            </div>
            <div className="mt-[80px]">
                <ReviewsCarousel reviews={reviews} />
            </div>
            <div className="mt-[140px]">
                <TagDescription>
                    <div className="flex gap-12">
                        <Tag tag="Contact Us" />
                        <p className="w-xl text-lg leading-[23px]">
                            Connect with Us: Let's Discuss Your Digital
                            Marketing Needs
                        </p>
                    </div>
                </TagDescription>
            </div>
            <div className="mt-[80px]">
                <ContactForm />
            </div>
        </>
    )
}

export default Home
