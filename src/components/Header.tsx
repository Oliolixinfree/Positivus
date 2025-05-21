import Button from './UI/Button'
import Wrapper from './Wrapper'
import Illustration from '../assets/images/Illustration.svg'

const Header = () => {
    return (
        <header className="mt-[70px]">
            <Wrapper>
                <div className="flex justify-between">
                    <div className="w-[532px]">
                        <h2 className="text-6xl font-medium">
                            Navigating the digital landscape for success
                        </h2>
                        <p className="my-9 text-left w-[500px]">
                            Our digital marketing agency helps businesses grow
                            and succeed online through a range of services
                            including SEO, PPC, social media marketing, and
                            content creation.
                        </p>
                        <Button
                            className="bg-dark text-white hover:text-green"
                            onClick={() => {}}
                        >
                            Book a consultation
                        </Button>
                    </div>
                    <img src={Illustration} alt={Illustration} />
                </div>
            </Wrapper>
        </header>
    )
}

export default Header
