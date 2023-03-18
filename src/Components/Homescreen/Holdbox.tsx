import React from 'react'
import styled from 'styled-components'
import {GiLindenLeaf} from "react-icons/gi"
import { SiAdafruit } from "react-icons/si"
import { ImTruck } from "react-icons/im"

const Holdbox = () => {
  return (
      <Container>
          <Wrapper>
              <Hold>
                  <Wrap>
                      <Box>
                          <Icon><GiLindenLeaf /></Icon>
                          <Shiphold>
                              <Free><h3>Free Shipping</h3></Free>
                              <P><p> orders over ₦50.000.00</p></P>
                          </Shiphold>
                      </Box>

                      <Box>
                          <Icon><SiAdafruit /></Icon>
                          <Shiphold>
                              <Free><h3>Free Returns</h3></Free>
                              <P><p> orders over ₦50.000.00</p></P>
                          </Shiphold>
                      </Box>

                      <Box>
                          <Icon><ImTruck /></Icon>
                          <Shiphold>
                              <Free><h3>Secure Payment</h3></Free>
                              <P><p>orders over ₦50.000.00</p></P>
                          </Shiphold>
                      </Box>

                      <Box>
                          <Icon><GiLindenLeaf /></Icon>
                          <Shiphold>
                              <Free><h3>Gift Service</h3></Free>
                              <P><p> orders over ₦50.000.00</p></P>
                          </Shiphold>
                      </Box>
                  </Wrap>
              </Hold>
          </Wrapper>
    </Container>
  )
}

export default Holdbox
const P = styled.div`
    p{
        margin: 0;
    }
`
const Free = styled.div`
    margin-top: 10px;
    h3{
        margin: 0;
    }
`
const Shiphold = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`
const Icon = styled.div`
    color: #03993f;
    font-size: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-top: 15px;
`
const Box = styled.div`
    display: flex;
`
const Wrap = styled.div`
    width: 90%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
`
const Hold = styled.div`
    width: 100%;
    height: 110px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`