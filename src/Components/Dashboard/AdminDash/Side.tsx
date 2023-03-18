import React from 'react'
import styled from 'styled-components'
import {FiMenu, FiTarget, FiPower,FiUpload} from "react-icons/fi"
// import img from "../Assets/piggy.svg"
import {ImHome2} from "react-icons/im"
import {IoIosRocket, IoMdPerson} from "react-icons/io"
import { NavLink } from 'react-router-dom'
import {MdDashboard} from "react-icons/md"

const Side = () => {
  return (
    <Container>
        <Top>
            <Icon><h3>Agro-Allied</h3></Icon>
            <Image  />
        </Top>
        <Home>
            <Icon2><MdDashboard /></Icon2>
            <NavLink to="/dashboard" style={({isActive}) => {
                return {
                    textDecoration: !isActive ? "none" : "none",
                    backgroundColor: !isActive ? "#fff" : "#062863",
                    borderTopLeftRadius: !isActive ? "50px" : "none",
                    borderBottomLeftRadius:!isActive ? "50px" : "none",
                    color: !isActive ? "#2d3748" : "#fff",
                    marginLeft: !isActive ? "15px" : "none"
                }
            }}>
                <Text1>Dashboard</Text1>
            </NavLink>
        </Home>
        
            <Home2>
            <Icon2><FiUpload /></Icon2>
            <NavLink to="/savings" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    backgroundColor: isActive ? "#fff" : "",
                    borderTopLeftRadius: isActive ? "10px" : "none",
                    borderTopRightRadius: isActive ? "10px" : "none",
                    borderBottomRightRadius:isActive ? "10px" : "none",
                    color: isActive ? "#2d3748" : "#fff",
                    marginLeft: isActive ? "15px" : "none"
                }
            }}>
            <Text2>Products</Text2>
            </NavLink>
        </Home2>
        
        <Home2>
            <Icon2><IoMdPerson /></Icon2>
            <Text3>Customers</Text3>
        </Home2>
        <Home2>
            <Icon2><IoMdPerson /></Icon2>
            <Text4>Transaction</Text4>
          </Home2>
          <Home2>
            <Icon2><IoMdPerson /></Icon2>
            <Text4>Orders</Text4>
        </Home2>

        <Power>
            <Icon2><FiPower /></Icon2>
            <Text>Logout</Text>
        </Power>
    </Container>
  )
}

export default Side
const Power = styled.div`
    width: 100%;
    display: flex;
    margin-top: 195px;  
`
const Text4 = styled.div`
    font-size: 17px;
    font-family: U8,sans-serif;
    cursor: pointer;
    color: #fff;
    align-items: center;
    display: flex;
    margin-left: 30px;
    width: 120px;
    height: 40px;
    /* background-color: white; */
`
const Text3 = styled.div`
    font-size: 17px;
    font-family: U8,sans-serif;
    cursor: pointer;
    color: #fff;
    align-items: center;
    display: flex;
    margin-left: 30px;
    width: 120px;
    height: 40px;
    /* background-color: white; */
`
const Text2 = styled.div`
    font-size: 17px;
    font-family: U8,sans-serif;
    cursor: pointer;
    /* color: #fff; */
    align-items: center;
    display: flex;
    margin-left: 30px;
    width: 120px;
    height: 40px;
    align-items: center;
    display: flex;
    margin-left: 30px;
    width: 120px;
    height: 40px;
    /* background-color: white; */
`
const Text = styled.div`
    font-size: 17px;
    font-family: U8,sans-serif;
    cursor: pointer;
    color: #fff;
    align-items: center;
    display: flex;
    margin-left: 30px;
    width: 120px;
    height: 40px;
    /* background-color: white; */
`
const Text1 = styled.div`
    font-size: 17px;
    font-family: U8,sans-serif;
    cursor: pointer;
    /* color: #fff; */
    align-items: center;
    display: flex;
    margin-left: 10px;
    width: 210px;
    height: 40px;
    /* background-color: white; */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    text-decoration: none;
`
const Icon2 = styled.div`
    color: #fff;
    font-size: 23px;
    cursor: pointer;
`
const Home2 = styled.div`
    width: 100%;
    display: flex;
    margin-top: 25px;
`
const Home = styled.div`
    width: 100%;
    display: flex;
    margin-top: 70px;
`
const Image = styled.img`
    height: 25px;
    margin-left: 30px;
`
const Icon = styled.div`
    color: #fff;
    font-size: 25px;
    width: 100%;
    h3{
        text-align: center;
        margin: 0;
        margin-left: -20px;
    }
`
const Top = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;
    
`
const Container = styled.div`
    width: 17%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #03993f;
    padding-left: 25px;
    position: fixed;
    /* border-top-right-radius: 120px; */
    z-index: 2;
    overflow: hidden;
`