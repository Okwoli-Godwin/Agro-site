import React from 'react'
import styled from 'styled-components'
import img from "../Assets/savings.png"
import img2 from "../Assets/monthly.png"
import img3 from "../Assets/active.png"
import img4 from "../Assets/sixty.png"

const Sales = () => {
  return (
      <Container>
          <Left>
              <Top>
                <Img src={img} />
              </Top>
              <Down>
                  <First>
                      <Img3 src={img3} />
                  </First>
                  <First>
                      <Img3 src={img4} />
                  </First>
              </Down>
          </Left>
          <Right>
              <Img2 src={img2} />
          </Right>
    </Container>
  )
}

export default Sales
const Img3 = styled.img`
`
const First = styled.div`
    width: 48%;
    display: flex;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const Img2 = styled.img`
    
`
const Right = styled.div`
    width: 48%;
    display: flex;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const Down = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const Top = styled.div`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const Img = styled.img`
    
`
const Left = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    /* background-color: red; */
    margin-top: 30px;
    justify-content: space-between;
`