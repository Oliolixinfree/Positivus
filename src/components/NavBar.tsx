import Wrapper from './Wrapper'
import Logo from '../assets/images/Logo.svg'
import Button from './UI/Button'

const NavBar = () => {
    return (
        <nav className="mt-[60px]">
            <Wrapper>
                <div className="flex items-center justify-between">
                    <img src={Logo} alt={Logo} />
                    <div className="flex items-center">
                        <ul className="flex gap-10 mr-5">
                            <li className="cursor-pointer">About us</li>
                            <li className="cursor-pointer">Services</li>
                            <li className="cursor-pointer">Use Cases</li>
                            <li className="cursor-pointer">Pricing</li>
                            <li className="cursor-pointer">Blog</li>
                        </ul>
                        <Button onClick={() => {}}>Request a quote</Button>
                    </div>
                </div>
            </Wrapper>
        </nav>
    )
}

export default NavBar
