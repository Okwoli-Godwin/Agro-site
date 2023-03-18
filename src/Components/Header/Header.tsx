import React, {useState} from 'react'
import styled from 'styled-components'
import img from "../Assets/img.png"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { NavLink } from 'react-router-dom'




const Header = () => {
    const [scroll, setScroll] = useState<Boolean>(false)

    const changeHeaderColor = () => {
        if (window.scrollY >= 70) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    };

    window.addEventListener("scroll", changeHeaderColor)
  return (
      <>
          {scroll ? (
              <Container bd="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
        <Wrapper>
            <NavLink to="/" style={{textDecoration: "none"}}>
                <Left>
                <Img src={img} />
            </Left>
            </NavLink>
            <Navhold>
                <Nav>Product</Nav>
                <NavLink to="/who we are" style={{textDecoration: "none"}}>
                    <Nav>Who we are</Nav>
                </NavLink>
                <NavLink to="/blog" style={{textDecoration: "none"}}>
                    <Nav>Blog</Nav>
                </NavLink>
                <Nav>Contact us</Nav>
            </Navhold>
            <Right>
                <NavLink to="/signin" style={{textDecoration: "none"}}>
                    <Button>
                    Sign in
                </Button>     
                </NavLink>
                <Icon><AiOutlineShoppingCart />
                    <Circle>0</Circle>
                </Icon>
            </Right>
        </Wrapper>
    </Container>
          ) : (
                  <Container bd = "">
        <Wrapper>
            <NavLink to="/" style={{textDecoration: "none"}}>
                <Left>
                <Img src={img} />
            </Left>
            </NavLink>
            <Navhold>
                <Nav>Product</Nav>
                <NavLink to="/who we are" style={{textDecoration: "none"}}>
                    <Nav>Who we are</Nav>
                </NavLink>
                    <NavLink to="/blog" style={{textDecoration: "none"}}>
                    <Nav>Blog</Nav>      
                </NavLink>
                    <NavLink to="/contact" style={{textDecoration: "none"}}>
                    <Nav>Contact us</Nav>
                </NavLink>
            </Navhold>
            <Right>
                <NavLink to="/signin" style={{textDecoration: "none"}}>
                     <Button>
                    Sign in
                </Button>
                </NavLink >
                              <NavLink to="/cart">
                                  <Icon><AiOutlineShoppingCart />
                    <Circle>0</Circle>
                </Icon>
                </NavLink>
            </Right>
        </Wrapper>
    </Container>
          )}
      </>
  )
}

export default Header
const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background-color: #03993f;
    color: white;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    top: 20px;
    right: -7px;
`
const Icon = styled.div`
margin-left: 30px;
font-size: 28px;
height: 100%;
display: flex;
align-items: center;
cursor: pointer;
position: relative;
`
const Button = styled.div`
    border: none;
    outline: none;
    height: 40px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #03993f;
    border-radius: 7px;
    cursor: pointer;
    color: white;
    :hover{
        background-color: white;
        color: #03993f;
        border: 1px solid #03993f;
        transition: 350ms all ease;
    }
`
const Right = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`
const Nav = styled.div`
    margin-left: 45px;
    color: #03993f;
    font-weight: 500;
    cursor: pointer;
`
const Navhold = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`
const Img = styled.img`
    height: 80px;
`
const Left = styled.div`
    display: flex;
    height: 100%;
    display: flex;
    align-items: center;
`
const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: cente;
    justify-content: space-between;
`
const Container = styled.div<{bd: string}>`
    width: 100%;
    display: flex;
    height: 80px;
    justify-content: center;
    box-shadow: ${(props) => props.bd};
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    z-index: 3;
    position: fixed;
    background-color: #fff;
`
