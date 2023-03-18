import React from 'react'
import styled from 'styled-components'

const Vision = () => {
  return (
      <Container>
          <Wrapper>
              <Left>
                  <Top><h1>Our Mision</h1></Top>
                  <P>
                      <p>Our company was founded by a team of agricultural experts
                          and tech enthusiasts who recognized the potential for
                          technology to revolutionize the way we grow, harvest,
                          and distribute food. We set out to create a platform
                          that connects farmers directly to consumers, reducing
                          food waste and creating a more sustainable and transparent supply chain.
                          Over the years, we have expanded our offerings to include innovative agricultural
                          technologies, such as precision farming, smart irrigation systems,
                          and vertical farming solutions. Our focus on sustainability and efficiency
                          shas earned us recognition as a leader in agrotech innovation.
                      </p>
                  </P>
              </Left>
          </Wrapper>
    </Container>
  )
}

export default Vision
const P = styled.div`
    p{
        margin: 0;
    }
`
const Top = styled.div`
    h2{

    }
`
const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    /* background-color: red; */
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`