import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { Link } from "gatsby"
import { Caption2, SmallText } from "../styles/TextStyles"

export default function Button(props) {
  const { title, subtitle } = props
  return (
    <Link to="/page-2">
      <Wrapper>
        <IconWrapper>
          {/* <Ring ring={require("../icons/checkIcon.svg")} /> */}
          <Icon src={require("../icons/checkIcon.svg")} />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "View Image Slideshow"}</Title>
          {/* <Subtitle>{subtitle || "Click here!"} </Subtitle> */}
        </TextWrapper>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  line-height: 130%;
  background: ${themes.light.sage1};
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  width: 170px;
  height: 52px;
  display: grid;
  grid-template-columns: 53px auto;
  justify-self: center;
  align-items: center; //align content takes all the avaiable space, while align-items
  margin-top: 20px;
  gap: 20px;
  transition: 0.3s ease-in-out;

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25),
      0px 30px 60px rgba(0, 0, ${themes.light.sage3}, 0.8),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2); //x y blur spread (r, g, b, opacity) <- inner border of .5px
    transform: translateY(-3px) scale(1.05);
  }
`

const Title = styled(Caption2)`
  color: black;
  width: 200px;
  position: relative;
  left: -5px;
`

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
  position: relative;
  left: 65px;
`

const Icon = styled.img`
  width: 29px;
  height: 29px;
  left: 10 px;
`

const IconWrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  width: 45px;
  height: 45px;
  border-radius: 50%; //Rounds to half width or height - makes it look circular
  display: grid; //enables css grid (both css grid properties underneath)
  justify-content: center; //centers icon horizontally - start for lef
  align-content: center; //centers icon vertically
`

const TextWrapper = styled.div``

const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;

  {$Wrapper}:hover
`
