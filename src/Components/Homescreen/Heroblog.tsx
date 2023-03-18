import React from 'react'
import styled from 'styled-components'
import img from "../Assets/meat.png"
import img2 from "../Assets/vige.png"
import img3 from "../Assets/orang.png"
import {BsFillCalendarWeekFill, BsArrowRightShort} from "react-icons/bs"

const Heroblog = () => {
  return (
      <Container>
          <Top>Our recent articles about <span>Agro-Allied</span></Top>
          <Featured><h2>Blog Posts</h2></Featured>
          <Wrapper>
              <Card>
                  <Up>
                      <Img src={img} />
                  </Up>
                  <Down>
                      <Calendar>
                          <Icon><BsFillCalendarWeekFill /></Icon>
                          <Text>March 2023</Text>
                      </Calendar>
                      <Food>Natural food is always best for staying healthy.</Food>
                      <Read>Read more <Icon2><BsArrowRightShort /></Icon2></Read>
                  </Down>
              </Card>

              <Card>
                  <Up>
                      <Img src={img2} />
                  </Up>
                  <Down>
                      <Calendar>
                          <Icon><BsFillCalendarWeekFill /></Icon>
                          <Text>March 2023</Text>
                      </Calendar>
                      <Food>Natural grocery food is always the best option for a healthy diet.</Food>
                      <Read>Read more <Icon2><BsArrowRightShort /></Icon2></Read>
                  </Down>
              </Card>

              <Card>
                  <Up>
                      <Img src={img3} />
                  </Up>
                  <Down>
                      <Calendar>
                          <Icon><BsFillCalendarWeekFill /></Icon>
                          <Text>March 2023</Text>
                      </Calendar>
                      <Food>Fresh food and vegetables grocery food.</Food>
                      <Read>Read more <Icon2><BsArrowRightShort /></Icon2></Read>
                  </Down>
              </Card>
          </Wrapper>
    </Container>
  )
}

export default Heroblog
const Read = styled.div`
    display: flex;
    margin-left: 20px;
    margin-top: 15px;
`
const Food = styled.div`
    margin-left: 20px;
    width: 260px;
    margin-top: 15px;
    font-weight: bold;
`
const Text = styled.div`
    margin-left: 15px;
`
const Icon2 = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-left: 10px;
`
const Icon = styled.div`
    
`
const Calendar = styled.div`
    display: flex;
    margin-left: 20px;
`
const Down = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 15px;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Up = styled.div`
    width: 100%;
    height: 250px;
`
const Card = styled.div`
    width: 370px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    overflow: hidden;
    border-radius: 13px;
    padding-bottom: 23px;
`
const Featured = styled.div`
    margin: 0;
`
const Top = styled.div`
    
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
`