import React from 'react'
import styled from 'styled-components'
import img from "../Assets/pep.jpg"
import img2 from "../Assets/animal.jpg"
import img3 from "../Assets/cooking.jpg"
import Head from '../Head/Head'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '../Header/Header'

const Prodhero = () => {
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
                    <Card>
                        <h2>Vegeta<span>bles</span></h2>
                        <p>Get your vegetables delivered to your doorstep</p>
                    </Card>
                </Box>
                
            </Container>

            <Container2>

                <Box>
                    <Card>
                        <h2>Animal <span>Products</span></h2>
                        <p>Get your Animal products delivered to your doorstep</p>
                    </Card>
                </Box>
                
            </Container2>

            <Container3>
                
                <Box>
                    <Card>
                        <h2>Cooking <span>Oil</span></h2>
                        <p>Get your Oil products delivered to your doorstep</p>
                    </Card>
                </Box>
            </Container3>
        </Slider>
    </div>
  )
}

export default Prodhero
const Card = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        color: white;
        font-style: italic;
    }
    h2{
        font-size: 80px;
        color: #fff;
        margin: 0;
        span{
            color: #03993f;
        }
    }
`
const Img1 = styled.img`
    /* width: 100%; */
    height: 100%;
    /* object-fit: cover; */
`
const Hold = styled.div`
    width: 95%;
    display: flex;
    z-index: 2;
    position: fixed;
`
const Box = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
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
    background-color: red;
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
    background-color: red;
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
    margin-top: 130px;
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
    height: 550px;
    display: flex;
    justify-content: center;
    background-image: url(${img3});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
`
const Container2 = styled.div`
    width: 100%;
    height: 550px;
    display: flex;
    justify-content: center;
    background-image: url(${img2});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
`
const Container = styled.div`
    width: 100%;
    height: 550px;
    display: flex;
    justify-content: center;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
`