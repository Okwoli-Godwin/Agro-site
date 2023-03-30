import React from 'react'
import styled from 'styled-components'
import img from "./Assets/balls.png"

const Ball = () => {
  return (
      <Container>
          <Img src={img} />
      </Container>
  )
}

export default Ball
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
    animation: bounce  1s infinite;
    height: 60px;
   @keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

`