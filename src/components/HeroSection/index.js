import React, {useState} from 'react'
import { HeroBg, HeroContainer, VideoBg, ArrowForward, ArrowRight, HeroBtnWrapper, HeroContent, HeroH1, HeroP } from './HeroElements'
import Video from '../../video/video.mp4'
import { Button } from '../ButtonElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <div>
            <HeroContainer id='home'>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    {/* <HeroH1>Yerba Mate</HeroH1> */}
                    {/* <HeroBtnWrapper>
                        <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true' dark='true'>
                            Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
                        </Button>
                    </HeroBtnWrapper> */}
                </HeroContent>
            </HeroContainer>
        </div>
    )
}

export default HeroSection
