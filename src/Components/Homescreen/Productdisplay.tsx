import React from 'react'
import styled from 'styled-components'
import img from "../Assets/farmers.jpg"
import img2 from "../Assets/pine.jpg"
import img3 from "../Assets/yam.jpg"
import img4 from "../Assets/vega.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Productdisplay = () => {
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
      <Container>
          <Wrapper>
              <div style={{width: "63%"}}>
                  <Slider {...settings}>
                  <Right>
                    <Box>
                      <Text><h3>100% genuine Products</h3></Text>
                      <Text><h1>Healthy Organic Foods</h1></Text>
                      <Button>Shop now</Button>
                  </Box>
                      </Right>

                      <Right2>
                    <Box>
                      <Text><h3>100% genuine Products</h3></Text>
                      <Text><h1>Healthy Organic Foods</h1></Text>
                      <Button>Shop now</Button>
                  </Box>
                      </Right2>
                  </Slider>
              </div>

              <Left>
                  <First>
                      <Box>
                          <Genuine><h4>100% genuine Products</h4></Genuine>
                          <Harvest><h2>Newly Harvested Yams</h2></Harvest>
                          <Button>Shop now</Button>
                          <Off>-5% Sale</Off>
                      </Box>
                  </First>
                  <Second>
                      <Box>
                          <Genuine><h4>100% genuine Products</h4></Genuine>
                          <Harvest><h2>Pure Vegetables</h2></Harvest>
                          <Button>Shop now</Button>
                          <Off>-10% Sale</Off>
                      </Box>
                  </Second>
              </Left>
          </Wrapper>
    </Container>
  )
}

export default Productdisplay
const Off = styled.div`
    position: absolute;
    width: 90px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f65005;
    color: white;
    border-top-left-radius: 11px;
    border-bottom-right-radius: 11px;
    top: 15px;
    right: 15px;
`
const Genuine = styled.div`
    margin-left: 40px;
    margin-top: 60px;
    h4{
        margin: 0;
        color: white;
    }
`
const Harvest = styled.div`
    color: white;
    margin-left: 40px;
    h2{
        margin: 0;
    }
`
const Second = styled.div`
    width: 100%;
    height: 220px;
    background-color: red;
    background-image: url(${img4});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    border-radius: 15px;
`
const First = styled.div`
    width: 100%;
    height: 220px;
    margin-bottom: 20px;
    background-color: red;
    background-image: url(${img3});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    border-radius: 15px;
`
const Left = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
`
const Button = styled.button`
    width: 130px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    cursor: pointer;
    background-color: #03993f;
    color: white;
    margin-left: 40px;
    border: none;
    margin-top: 20px;
    transition: all 350ms ease-in-out;

    :hover{
        border: 1px solid #03993f;
        background-color: #fff;
        color: #03993f;
    }
`
const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.4);
    flex-direction: column;
    justify-content: center;
    position: relative;
`
const Text = styled.div`
    h1{
        margin: 0;
        font-size: 39px;
    }
    h3{
        margin: 0;
        margin-top: 130px;
    }
    color: #fff;
    margin-left: 40px;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`
const Right2 = styled.div`
    width: 62%;
    height: 460px;
    display: flex;
    overflow: hidden;
    border-radius: 15px;
    justify-content: center;
    flex-direction: column;
    background-image: url(${img2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* background-color: red; */
`
const Right = styled.div`
    width: 62%;
    height: 460px;
    display: flex;
    overflow: hidden;
    border-radius: 13px;
    justify-content: center;
    flex-direction: column;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* background-color: red; */
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`