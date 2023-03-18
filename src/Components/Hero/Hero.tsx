import React from 'react'
import styled from 'styled-components'
import img from "../Assets/leaf1.png"
import img2 from "../Assets/paw.png"
import img3 from "../Assets/busi.png"
import img4 from "../Assets/finance.png"
import img5 from "../Assets/finance.png"
import img6 from "../Assets/cow.png"
import img7 from "../Assets/tex.png"

const Hero = () => {
  return (
    <Container>
        <Top><h3>Our Business Areas</h3></Top>
        <br />
        <br />
        <Cardhold>
            <Card>
                <Img src={img} />
                <Img2 src={img2} />
                <Up>Primary Production</Up>
                <p>We enhance yield outcomes in primary agricultural production, through well-structured and organized support such as farm and farmer management, mechanization and irrigation for small and large out grower schemes</p>
                <Read>Read more</Read>
            </Card>
            <Card>
                <Img src={img} />
                <Img2 src={img3} />
                <Up>Agri Business</Up>
                <p>Our agribusiness services are geared towards supporting and enhancing activities such as aggregation and logistics that connect agricultural intermediaries and value chain participants.</p>
                <Read>Read more</Read>
            </Card>
            <Card>
                <Img src={img} />
                <Img2 src={img4} />
                <Up>Financial Services</Up>
                <p>AgroMall is keen on creating inclusive prosperity by improving financial inclusion. We use our close interaction with farmers and other value chain participants to facilitate the distribution of financial services in agriculture.</p>
                <Read>Read more</Read>
            </Card>
            <Card>
                <Img src={img} />
                <Img2 src={img5} />
                <Up>Processing and Mills</Up>
                <p>AgroMall understands the importance of post-harvest value addition to the creation of prosperity. Hence, we support processing and milling of tomato, mango and rice.</p>
                <Read>Read more</Read>
            </Card>
            <Card>
                <Img src={img} />
                <Img2 src={img6} />
                <Up>Dairy Development</Up>
                <p>AgroMall is developing capabilities to support forage development, herd management, and milk production using integrated and smallholder out grower models.</p>
                <Read>Read more</Read>
            </Card>
            <Card>
                <Img src={img} />
                <Img2 src={img7} />
                <Up>Primary Production</Up>
                <p>Improving research and innovation in Agriculture is at the core of our outlook. Our development of digital agriculture hubs and ranch schools is designed to expose young minds to best agricultural production and business practices.</p>
                <Read>Read more</Read>
            </Card>
        </Cardhold>
    </Container>
  )
}

export default Hero
const Read = styled.div`
    color: #008737;
`
const Up = styled.div`
    font-family: "Open Sans",sans-serif;
    font-size: 19px;
    color: #606060;
    margin-top: 15px;
`
const Img2 = styled.img`
    margin-top: 15px;
`
const Img = styled.img`
    position: absolute;
    right: 0;
    height: 55px;
`
const Card = styled.div`
    width: 28%;
    display: flex;
    height: 340px;
    border-radius: 15px;
    flex-direction: column;
    position: relative;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    /* background-color: red; */
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-bottom: 28px;
    transition: all 350ms;
    cursor: pointer;
    p{
        text-align: center;
        color: #606060;
        margin-top: 20px;
    }
    :hover{
        margin-top: -7px;
    }
`
const Cardhold = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Top = styled.div`
    h3{
        color: #008737;
    font-weight: 900;
    font-size: 3.5em;
    font-size: 45px;
    font-family: "Cabin Sketch",cursive;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`