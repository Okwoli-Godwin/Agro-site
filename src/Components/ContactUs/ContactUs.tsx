import React from 'react'
import styled from 'styled-components'
import ContactHero from '../Assets/ContactHero.jpg'
// import Hero from '../Components/Assets/Hero.jpg'

const ContactUs = () => {
  return (
    <Container>
          <Left>
            <h1>Contact us</h1>
            <p>Talk to us today</p>
          </Left>
          <Right>
            <Img src = {ContactHero}/>
          </Right>
    </Container>
  )
}

export default ContactUs

const Container = styled.div`
width: 100%;
/* height: 40vh; */
background-color: #568d40;
/* background-color: blue; */
display: flex;
justify-content: center;
align-items: center
`
const Img = styled.img`
height: 330px;
`
const Left = styled.div`
width: 37%;
margin-left: 80px;

h1{
  font-size: 45px;
  color: white
}

p{
  font-size: 20px;
  color: white
}
`
const Right = styled.div`
`