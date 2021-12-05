import React from 'react'
import { 
        InfoContainer, 
        Column1, 
        Column2, 
        Heading, 
        Img, 
        ImgWrap, 
        InfoRow, 
        InfoWrapper, 
        Subtitle, 
        TextWrapper } from './InfoElements'

const InfoSection = ({ lightBg, id, imgStart, lightText, darkText, headline, description, img, alt, primary, dark, dark2 }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
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
