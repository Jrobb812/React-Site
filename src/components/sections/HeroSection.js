import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
import Button from "../Buttons/Button"
import { AnimatePresence } from "framer-motion"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function HeroSection() {
  return (
    <AnimatePresence>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>Welcome to Uno</Title>
            <Description>Uno multi-platform design application.</Description>
            <Button title="Continue to site:" subtitle="-->" />
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    </AnimatePresence>
  )
}

export default HeroSection

//set css properties for imported styled tag here
const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    ${themes.light.sage4} 0%,
    ${themes.light.sage1} 100%
  );
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid; //these two lines create spacing between title and description, don't have to use margins that aren't universally adjusting themselves for differently sized screens
  gap: 30px;
`
const Title = styled(H1)`
  color: ${themes.light.lmOffWhite};
`

const Description = styled(MediumText)`
  color: ${themes.light.lmBlack};
`
