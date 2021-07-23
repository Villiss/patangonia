import React from 'react'
import { Button } from '../ButtonElements'
import { 
        InfoContainer, 
        BtnWrap, 
        Column1, 
        Column2, 
        Heading, 
        Img, 
        ImgWrap, 
        InfoRow, 
        InfoWrapper, 
        Subtitle, 
        TextWrapper, 
        TopLine } from './InfoElements'

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, darkText, headline, description, buttonLabel, img, alt }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
