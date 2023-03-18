import React from 'react'
import styled from 'styled-components'
import img from "../Assets/blog.jpg"

const Bloghero = () => {
  return (
      <Container>
          <Box>
              <h1>Blog</h1>
          </Box>
    </Container>
  )
}

export default Bloghero
const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    h1{
        color: #fff;
    }
`

const Container = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-image: center;
    background-size: cover;
    h2{
        color: white;
    }
`