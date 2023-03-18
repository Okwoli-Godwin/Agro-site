import React from 'react'
import styled from 'styled-components'
import img2 from "../Assets/vegi.png"
import img3 from "../Assets/vegiii.png"
import img4 from "../Assets/vegii.png"
import img5 from "../Assets/farm2.png"
import img6 from "../Assets/farmland2.png"
import img7 from "../Assets/juice2.png"
import img8 from "../Assets/grape.png"
import img9 from "../Assets/p2.jpeg"
import img10 from "../Assets/p1.jpeg"
import {BsFillCalendarWeekFill, BsArrowRightShort} from "react-icons/bs"
import Header from '../Header/Header'
import Bloghero from './Bloghero'
import Footer from '../Footer/Footer'

const Blog = () => {
  return (
      <Container>
          <Header />
          <Bloghero />
          <br />
          <br />
          <br />
          
          <Wrapper>
              <Card>
                  <Up>
                      <Img src={img10} />
                  </Up>
                  <Down>
                      <Calendar>
                          <Icon><BsFillCalendarWeekFill /></Icon>
                          <Text>March 2023</Text>
                      </Calendar>
                      <Food>Natural food is always best for staying healthy.</Food>
                      <Read>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quas natus, molestias ipsa distinctio aliquid nulla animi, recusandae ab dignissimos veritatis voluptas quos at vero laudantium. Porro suscipit beatae, qui provident id itaque debitis nemo consectetur ullam fugiat dolor veniam.</Read>
                  </Down>
              </Card>

              <Card>
                  <Up>
                      <Img src={ img9} />
                  </Up>
                  <Down>
                      <Calendar>
                          <Icon><BsFillCalendarWeekFill /></Icon>
                          <Text>March 2023</Text>
                      </Calendar>
                      <Food>Natural grocery food is always the best option for a healthy diet.</Food>
                      <Read>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum minima ipsum blanditiis quasi, consequuntur, qui esse doloribus eos facere accusamus debitis similique quisquam magnam quo voluptates? Pariatur deleniti, ab, sit aperiam ut tenetur a nostrum in eaque doloremque at tempora?</Read>
                  </Down>
              </Card>

              <Card>
                  <Up>

                      <Img src={ img8} />
                  </Up>
                  <Down>
                      <Calendar>
                          <Icon><BsFillCalendarWeekFill /></Icon>
                          <Text>March 2023</Text>
                      </Calendar>
                      <Food>Fresh food and vegetables grocery food.</Food>
                      <Read>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam nisi voluptatibus quo ratione itaque autem eum culpa consequatur dignissimos enim eveniet debitis molestias cupiditate earum a aliquid deleniti fugiat saepe ea consequuntur quia, ex impedit odio officiis? Impedit, similique veritatis?</Read>
                  </Down>
              </Card>

              <Card>
                  <Up>
                      <Img  src={ img7}/>
                  </Up>
                  <Down>
                      <Calendar>
                          <Icon><BsFillCalendarWeekFill /></Icon>
                          <Text>March 2023</Text>
                      </Calendar>
                      <Food>Natural grocery food is always the best option for a healthy diet.</Food>
                      <Read>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum minima ipsum blanditiis quasi, consequuntur, qui esse doloribus eos facere accusamus debitis similique quisquam magnam quo voluptates? Pariatur deleniti, ab, sit aperiam ut tenetur a nostrum in eaque doloremque at tempora?</Read>
                  </Down>
              </Card>

              <Card>
                  <Up>
                      <Img  src={ img6}/>
                  </Up>
                  <Down>
                      <Calendar>
                          <Icon><BsFillCalendarWeekFill /></Icon>
                          <Text>March 2023</Text>
                      </Calendar>
                      <Food>Natural grocery food is always the best option for a healthy diet.</Food>
                      <Read>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum minima ipsum blanditiis quasi, consequuntur, qui esse doloribus eos facere accusamus debitis similique quisquam magnam quo voluptates? Pariatur deleniti, ab, sit aperiam ut tenetur a nostrum in eaque doloremque at tempora?</Read>
                  </Down>
              </Card>

              <Card>
                  <Up>
                      <Img  src={ img5}/>
                  </Up>
                  <Down>
                      <Calendar>
                          <Icon><BsFillCalendarWeekFill /></Icon>
                          <Text>March 2023</Text>
                      </Calendar>
                      <Food>Natural grocery food is always the best option for a healthy diet.</Food>
                      <Read>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum minima ipsum blanditiis quasi, consequuntur, qui esse doloribus eos facere accusamus debitis similique quisquam magnam quo voluptates? Pariatur deleniti, ab, sit aperiam ut tenetur a nostrum in eaque doloremque at tempora?</Read>
                  </Down>
              </Card>

              <Card>
                  <Up>
                      <Img  src={ img2}/>
                  </Up>
                  <Down>
                      <Calendar>
                          <Icon><BsFillCalendarWeekFill /></Icon>
                          <Text>March 2023</Text>
                      </Calendar>
                      <Food>Natural grocery food is always the best option for a healthy diet.</Food>
                      <Read>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum minima ipsum blanditiis quasi, consequuntur, qui esse doloribus eos facere accusamus debitis similique quisquam magnam quo voluptates? Pariatur deleniti, ab, sit aperiam ut tenetur a nostrum in eaque doloremque at tempora?</Read>
                  </Down>
              </Card>

              <Card>
                  <Up>

                      <Img  src={ img3}/>
                  </Up>
                  <Down>
                      <Calendar>
                          <Icon><BsFillCalendarWeekFill /></Icon>
                          <Text>March 2023</Text>
                      </Calendar>
                      <Food>Natural grocery food is always the best option for a healthy diet.</Food>
                      <Read>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum minima ipsum blanditiis quasi, consequuntur, qui esse doloribus eos facere accusamus debitis similique quisquam magnam quo voluptates? Pariatur deleniti, ab, sit aperiam ut tenetur a nostrum in eaque doloremque at tempora?</Read>
                  </Down>
              </Card>

              <Card>
                  <Up>
                      <Img  src={ img4}/>
                  </Up>
                  <Down>
                      <Calendar>
                          <Icon><BsFillCalendarWeekFill /></Icon>
                          <Text>March 2023</Text>
                      </Calendar>
                      <Food>Natural grocery food is always the best option for a healthy diet.</Food>
                      <Read>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum minima ipsum blanditiis quasi, consequuntur, qui esse doloribus eos facere accusamus debitis similique quisquam magnam quo voluptates? Pariatur deleniti, ab, sit aperiam ut tenetur a nostrum in eaque doloremque at tempora?</Read>
                  </Down>
              </Card>
          </Wrapper>
          <br />
          <br />
          <br />
          <Footer />
    </Container>
  )
}

export default Blog

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

const Top = styled.div`
    
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

