import React from 'react'
import Wrapper from './Wrapper'
import AmazonLogo from '../assets/images/AmazonLogo.svg'
import DribbbleLogo from '../assets/images/DribbbleLogo.svg'
import HubspotLogo from '../assets/images/HubspotLogo.svg'
import NetflixLogo from '../assets/images/NetflixLogo.svg'
import NotionLogo from '../assets/images/NotionLogo.svg'
import ZoomLogo from '../assets/images/ZoomLogo.svg'

const Logotypes = () => {
    return (
        <div className="mt-[70px]">
            <Wrapper>
                <div className="flex justify-between">
                    <img
                        className="grayscale hover:grayscale-0"
                        src={AmazonLogo}
                        alt={AmazonLogo}
                    />
                    <img
                        className="grayscale hover:grayscale-0"
                        src={DribbbleLogo}
                        alt={DribbbleLogo}
                    />
                    <img
                        className="grayscale hover:grayscale-0"
                        src={HubspotLogo}
                        alt={HubspotLogo}
                    />
                    <img
                        className="grayscale hover:grayscale-0"
                        src={NotionLogo}
                        alt={NotionLogo}
                    />
                    <img
                        className="grayscale hover:grayscale-0"
                        src={NetflixLogo}
                        alt={NetflixLogo}
                    />
                    <img
                        className="grayscale hover:grayscale-0"
                        src={ZoomLogo}
                        alt={ZoomLogo}
                    />
                </div>
            </Wrapper>
        </div>
    )
}

export default Logotypes
