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
                <CardList />
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
        </>
    )
}

export default Home
