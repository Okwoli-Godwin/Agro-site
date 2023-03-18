import React from 'react'
import styled from 'styled-components'
import img from "../Assets/agro2.jpg"
import img2 from "../Assets/agro3.jpg"
import img3 from "../Assets/agro5.jpg"
import Head from '../Head/Head'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '../Header/Header'

const Body = () => {
    const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
        fade: true,
		speed: 800,
		autoplaySpeed: 5000,
		cssEase: "linear",
	};
  return (
    <div style={{overflow: "hidden"}}>
        <Slider {...settings}>
            <Container>
                <Box>
                    
                </Box>
                <Wrapper>
                    <Bold><h1> AGRICULTURAL VALUE CHAIN INTERACTIONS</h1></Bold>
                    <Circle> </Circle>

                    <Circle2></Circle2>

                    <Circle3></Circle3>
                </Wrapper>
            </Container>

            <Container2>
                <Box></Box>
                <Wrapper>
                    <Bold><h1>IMPROVING THE FINANCIAL PORTFOLIO OF SMALL HOLDER FARMERS</h1></Bold>
                    <Circle> </Circle>

                    <Circle2></Circle2>

                    <Circle3></Circle3>
                </Wrapper>
            </Container2>

            <Container3>
                <Box></Box>
                <Wrapper>
                    <Bold><h1>SUPPORTING THE TRANSFORMATION OF FARMERS AND AGRICULTURAL SMES</h1></Bold>
                    <Circle> </Circle>

                    <Circle2></Circle2>

                    <Circle3></Circle3>
                </Wrapper>
            </Container3>
        </Slider>
    </div>
  )
}

export default Body
const Hold = styled.div`
    width: 95%;
    display: flex;
    z-index: 2;
    position: fixed;
`
const Box = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
`
const Circle3= styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    background-color: red;
    position: absolute;
    left: 210px;
    top: 350px;
    background-image: url(${img2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const Circle2 = styled.div`
    width: 125px;
    height: 125px;
    border-radius: 100px;
    /* background-color: red; */
    position: absolute;
    left: 260px;
    top: 220px;
    background-image: url(${img3});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const Circle = styled.div`
    width: 145px;
    height: 145px;
    border-radius: 100px;
    /* background-color: red; */
    position: absolute;
    left: 100px;
    top: 220px;
    background-image: url(${img});
    /* background-repeat: no-repeat; */
    background-size: cover;
    /* background-position: center; */
`
const Bold = styled.div`
    width: 550px;
    margin-top: 220px;
    z-index: 2;
    h1{
        color: white;
        text-align: center;
    }
`
const Wrapper = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    /* background-color: red; */
`
const Container3 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-image: url(${img3});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-bottom: 250px;
    position: relative;
`
const Container2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-image: url(${img2});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-bottom: 250px;
    position: relative;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-bottom: 250px;
    position: relative;
`