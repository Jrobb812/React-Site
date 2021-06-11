import styled from "styled-components"

//have created a reusable text style for us to use when impolementing a header tag
//now, instead of starting from scratch to create a new header style, we can reference this each time we want a bold, 60px text style
export const H1 = styled.h1`
  font-weight: bold;
  font-size: 60px;
`
export const H2 = styled.h2`
  font-weight: bold;
  font-size: 40px;
`
export const H3 = styled.h3`
  font-weight: bold;
  font-size: 30px;
`
export const BodyIntro = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
`
export const BodyMain = styled.p`
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
`
export const MediumText = styled.p`
  font-weight: normaml;
  font-size: 17px;
  line-height: 130%;
`
export const Caption = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
`
export const Caption2 = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
`
export const SmallText = styled.p`
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
`
export const SmallText2 = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
  text-transform: uppercase;
`
