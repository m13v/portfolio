import React, { useEffect, useRef, lazy, Suspense } from 'react';
import styled, { keyframes } from 'styled-components'

import img1 from '../../assets/Nfts/bighead.svg';
import img2 from '../../assets/Nfts/bighead-1.svg';
import img3 from '../../assets/Nfts/bighead-2.svg';
import img4 from '../../assets/Nfts/bighead-3.svg';
import img5 from '../../assets/Nfts/bighead-4.svg';
import img6 from '../../assets/Nfts/bighead-5.svg';
import img7 from '../../assets/Nfts/bighead-6.svg';
import img8 from '../../assets/Nfts/bighead-7.svg';
import img9 from '../../assets/Nfts/bighead-8.svg';
import img10 from '../../assets/Nfts/bighead-9.svg';
import ETH from '../../assets/icons8-ethereum-48.png'
import Loading from '../Loading';
// import ConfettiComponent from '../Confetti';

const ConfettiComponent = lazy(() => import("../Confetti"));

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid #FFFFFF;
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

&>*:first-child{
  animation-duration: 20s;

  @media (max-width: 30em){
    animation-duration: 15s;

  }
}
&>*:last-child{
  animation-duration: 15s;
  @media (max-width: 30em){
    animation-duration: 10s;

  }
}
`
const move = keyframes`
0%{ transform: translateX(100%)   };
100%{ transform: translateX(-100%)   }

`

const Row = styled.div`
/* background-color: lightblue; */
white-space: nowrap;
box-sizing:content-box;
margin: 2rem 0;
display: flex;

animation: ${move}  linear infinite 20s;


`
const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color:${props => props.theme.body};

border-radius: 20px;
cursor: pointer;

@media (max-width: 48em){
  width: 12rem;
  }
  @media (max-width: 30em){
  width: 10rem;
  }

img{
  width: 100%;
  height: auto;
}
`

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${props => props.theme.text};
  border: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${props => props.theme.fontsm};
    color: ${props => `rgba(${props.theme.bodyRgba},0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
    white-space: normal; // Allows the text to wrap
    overflow-wrap: break-word; // Ensures long words do not overflow
  }

  h1 {
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.body};
    font-weight: 600;

    @media (max-width: 30em) {
      font-size: ${props => props.theme.fontsm};
    }
  }
`

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto;

}
`

const NftItem = ({ img, number = 0, price = 0, passRef, firstName, lastName }) => {

let play = (e) => {
  passRef.current.style.animationPlayState = 'running';
}
let pause = (e) => {
  passRef.current.style.animationPlayState = 'paused';
}


return (
  <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
    <img src={img} alt="The Weirdos" />
    <Details>
      <div>
        <span>{firstName} {lastName}</span> {/* Display only first and last name */}
      </div>
    </Details>
  </ImgContainer>
)
}


const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);
  const Row3Ref = useRef(null);
  const Row4Ref = useRef(null);
  return (
    <Section id="showcase">
    <Suspense fallback={<Loading />}>
    <ConfettiComponent  /> </Suspense>
      <Title>Gratitude</Title>
      <Row direction="normal" ref={Row1Ref}>
        <NftItem img={img1} number={852} price={1} passRef={Row1Ref} firstName="Marina" lastName="Diakonov" />
        <NftItem img={img2} number={852} price={1} passRef={Row1Ref} firstName="Yury" lastName="Diakonov" />
        <NftItem img={img3} number={123} price={1.2} passRef={Row1Ref} firstName="Irina" lastName="Victorovna" />
        <NftItem img={img4} number={456} price={2.5} passRef={Row1Ref} firstName="Valentina" lastName="Alekseevna" />
        <NftItem img={img5} number={666} price={3.5} passRef={Row1Ref} firstName="Andrey" lastName="Talalaev" />
        <NftItem img={img6} number={452} price={4.7} passRef={Row1Ref} firstName="Alex" lastName="Boldyrev" />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <NftItem img={img6} number={888} price={1.2} passRef={Row2Ref} firstName="Elizaveta" lastName="Litvinova" />
        <NftItem img={img7} number={211} price={3.2} passRef={Row2Ref} firstName="Max" lastName="Irisov" />
        <NftItem img={img8} number={455} price={1.8} passRef={Row2Ref} firstName="Raffaella" lastName="Campagnoli" />
        <NftItem img={img9} number={456} price={5.1} passRef={Row2Ref} firstName="William" lastName="Durst" />
      </Row>
      <Row direction="reverse" ref={Row3Ref}>
        <NftItem img={img6} number={452} price={4.7} passRef={Row1Ref} firstName="Alex" lastName="Reshetnikov" />
        <NftItem img={img6} number={888} price={1.2} passRef={Row2Ref} firstName="Alex" lastName="Kravcov" />
        <NftItem img={img7} number={211} price={3.2} passRef={Row2Ref} firstName="Yury" lastName="Kudryakov" />
        <NftItem img={img8} number={455} price={1.8} passRef={Row2Ref} firstName="Veronika" lastName="Aksenova" />
        <NftItem img={img9} number={456} price={5.1} passRef={Row2Ref} firstName="Ilya" lastName="Mehedkin" />
      </Row>
      <Row direction="reverse" ref={Row4Ref}>
        <NftItem img={img6} number={452} price={4.7} passRef={Row1Ref} firstName="Nolan" lastName="Holden" />
        <NftItem img={img6} number={888} price={1.2} passRef={Row2Ref} firstName="Kate" lastName="" />
        <NftItem img={img7} number={211} price={3.2} passRef={Row2Ref} firstName="Bruce" lastName="Dockter" />
      </Row>
    </Section>
  )
}

export default Showcase