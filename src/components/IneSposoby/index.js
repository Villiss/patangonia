
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
        TextWrapper,
        Tabulka,
        ListElement } from './SposobyElements'

const IneSposoby = () => {
    return (
        <>
            <InfoContainer lightBg={false} id='inesposoby'>
                <InfoWrapper>
                    <InfoRow imgStart={true}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={true}>Existujú aj iné spôsoby, ako piť yerba mate?</Heading>
                                <Subtitle darkText={false}>Yerba mate je veľmi všestranný a môžete si ho vychutnať niekoľkými spôsobmi. </Subtitle>
                                <Tabulka>
                                    <ListElement style={{margin: 10}}>• Napríklad počas leta je za studena varený yerba mate alebo tereré veľmi populárny v Paraguaji, Argentíne a Uruguaji. Táto osviežujúca infúzia sa pripravuje s yerba mate (zvyčajne ovocnou príchuťou), studenou vodou a kockami ľadu.</ListElement>
                                    <ListElement>• Pôvodne má yerba mate bylinnú a mierne horkú chuť. Niektorí ľudia dávajú prednosť pridávaniu cukru, sladidiel, medu alebo stévie.</ListElement>
                                    <ListElement>• Yerba mate prichádza v ovocných verziách, ako sú pomaranč alebo iné citrusové plody. Niektorí ľudia dávajú prednosť pridaniu ovocných šupiek alebo prírodných bylín, ako sú listy mäty, melissy alebo cedronu, aby pridali príchute a výhody.</ListElement>
                                    <ListElement>• Yerba mate možno nájsť aj vo forme čajových vrecúšok, čo umožňuje pridať mlieko a cukor rovnakým spôsobom ako káva alebo čaj.</ListElement>
                                    <ListElement>• Mate s stonkami ("palo") je najklasickejšia verzia a najobľúbenejšia medzi Argentínčanmi; ale môžete tiež nájsť bez stoniek. Môžete tiež nájsť "low-dust" yerba mate, čo vedie k viac kryštalickej infúzie.</ListElement>
                                </Tabulka>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={require('../../images/svg-4.svg').default} alt='Something'/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default IneSposoby