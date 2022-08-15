import React, { useState } from "react";
import { Button } from "../ButtonElements";
import Video from '../../videos/video.mp4';

import { 
    HeroBg, 
    HeroContainer, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight } from "./HeroSectionElement";
const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
    <HeroContainer id="home">
        
       <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
       </HeroBg> 
       <HeroContent>
            <HeroH1>
                Virtural Banking
            </HeroH1>
            <HeroP>
               <strong>Manage and Move money seamlessly</strong> with a smater, fresh digital experience.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary={true}
                dark={true}
                smooth={true}
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                >
                    Get started {hover ? <ArrowForward /> :<ArrowRight />}
                </Button>
            </HeroBtnWrapper>
       </HeroContent>
    </HeroContainer>)

}

export default HeroSection;