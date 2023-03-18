import React from 'react'
import styled from 'styled-components'
import { IoIosSearch, IoIosNotificationsOutline } from "react-icons/io"
import img from "../Assets/blush10.png"


const Dashhead = () => {
  return (
      <Container>
          <Wrapper>
              <Inputhold>
                  <Icon><IoIosSearch /></Icon>
                  <Input />
              </Inputhold>
              <Right>
                  <Icons>
                      <IoIosNotificationsOutline />
                      <Circle>2</Circle>
                  </Icons>
                  <Profile>
                      <Img src={img} />
                  </Profile>
              </Right>
           </Wrapper>
    </Container>
  )
}

export default Dashhead
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Profile = styled.div`
    width: 44px;
    height: 44px;
    overflow: hidden;
    display: flex;
    margin-left: 15px;
    border-radius: 50px;
    background-color: red;
`
const Circle = styled.div`
    width: 17px;
    height: 17px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: absolute;
    background-color: red;
    font-size: 13px;
    top: 20px;
`
const Icons = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 27px;
`
const Right = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    width: 120px;
    justify-content: space-between;
`
const Input = styled.input`
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
`
const Icon = styled.div`
    width: 70px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
`
const Inputhold = styled.div`
    width: 350px;
    height: 45px;
    border-radius: 50px;
    border: 1px solid #f1f1f1;
    display: flex;
    overflow: hidden;
`
const Wrapper = styled.div`
    width: 76%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 30px;
    justify-content: space-between;
`
const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    position: fixed;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: 1;
    background-color: #fff;
    justify-content: flex-end;
`