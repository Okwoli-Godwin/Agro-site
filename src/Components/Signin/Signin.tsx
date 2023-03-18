
// import React from "react";
// import styled from "styled-components";
// import { NavLink } from "react-router-dom";
// import pix from "../Assets/agric-removebg-preview.png";
// import image from "../Assets/handrm.png";
// const Signin = () => {

//   return (
//     <Container>
//       <Card>
//         <Left>
//           <Top><h2>AGro-Allied</h2></Top>
//           <Input type="text" placeholder='Enter your name' />
//           <Input type="email" placeholder='Enter your Email'/>
//           <Input type="number" placeholder='Enter your Phone Number' />
//           <Input type="password" placeholder='Enter your password' />
//           <Input type="password" placeholder='Confirm password' />
//           <Input type="//#region " placeholder='Enter your Bvn Number' />
//           <NavLink to="/Dashboard" style={{textDecoration: "none"}}>
//             <Button>Sign up</Button>
//           </NavLink>
//           <NavLink to="/signin" style={{textDecoration: "none"}}>
//               <p>Already have an account? <span>Signin</span></p>
//           </NavLink>
//         </Left>
//       </Card>
//     </Container>
//   )
// }

// export default Signin
// const Img = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `
// const Button = styled.button`
//   width: 160px;
//   height: 50px;
//   display: flex;
//   justify-content: center;
//   border: none;
//   outline: none;
//   align-items: center;
//   color: #fff;
//   background-color: #03993f;
//   cursor: pointer;
//   transition: all 350ms ease-in-out;
//   border-radius: 50px;
//   margin-top: 20px;
//   :hover{
//     background-color: #fff;
//     color: #03993f;
//     border: 1px solid #03993f;
//   }
// `
// const Input = styled.input`
//   width: 70%;
//   height: 40px;
//   margin-bottom: 15px;
//   border: 1px solid #f1f1f1;
//   outline: none;
//   border-radius: 3px;
//   padding-left: 10px;
//   margin-top: 15px;
// `
// const Top = styled.div`
//   h2{
//     color: #03993f;
//   }
// `
// const Left = styled.div`
//   width: 50%;
//   display: flex;
//   position: relative;

//   span {
//     color: #039566;
//   }

//   img {
//     height: 55px;
//     margin-left: 20px;
//     margin-top: 50px;
//   }
//   h3 {
//     color: #827b40;
//     margin: 0;
//     margin-top: 30px;
//     margin-left: 20px;
//     font-size: 22px;
//   }
//   p {
//     margin: 0;
//     margin-top: 13px;
//     width: 60%;
//     font-size: 11px;
//     margin-left: 22px;
//   }
// `;
// const Right = styled.form`
//   width: 300px;
//   height: 380px;
//   /* background-color: red; */

//   h4 {
//     margin: 0;
//     margin-left: 40px;
//     margin-top: 30px;
//   }

//   p {
//     margin: 0;
//     margin-left: 40px;
//     color: darkgray;
//     margin-top: 3px;
//     font-size: 12px;
//   }
// `;

// const Container = styled.div`
//   width: 100%;
//   display: flex;
//   height: 100vh;
//   justify-content: center;
//   background-color: #039566;
// `;
// const Card = styled.div`
//   width: 700px;
// //   height: 430px;
// //   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
// //   display: flex;
// //   background-color: white;
// `;

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"
import img from "../Assets/farmers.jpg"

const Signin = () => {
  return (
    <Container>
      <Card>
        <Right>
          <Img src={img} />
        </Right>
        <Left>
          <Top><h2>AGro-Allied</h2></Top>
          <Input type="text" placeholder='Enter your name' />
          <Input type="email" placeholder='Enter your Email' />
          <Input type="password" placeholder='Enter your password'/>
          <NavLink to="/Dashboard" style={{textDecoration: "none"}}>
            <Button>Sign in</Button>
          </NavLink>
          <NavLink to="/signup" style={{textDecoration: "none"}}>
              <p>Dont have an account? <span>Signup</span></p>
          </NavLink>
        </Left>
      </Card>
    </Container>
  )
}

export default Signin
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Button = styled.button`
  width: 160px;
  height: 45px;
  display: flex;
  justify-content: center;
  border: none;
  outline: none;
  align-items: center;
  color: #fff;
  background-color: #03993f;
  cursor: pointer;
  transition: all 350ms ease-in-out;
  border-radius: 50px;
  margin-top: 20px;
  :hover{
    background-color: #fff;
    color: #03993f;
    border: 1px solid #03993f;
  }
`
const Input = styled.input`
  width: 70%;
  height: 40px;
  margin-bottom: 10px;
  border: 1px solid #f1f1f1;
  outline: none;
  border-radius: 3px;
  padding-left: 10px;
  margin-top: 15px;
`
const Top = styled.div`
  h2{
    color: #03993f;
  }
`
const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span{
    color: #03993f;
  }
  p{
    color: #c2c2c2;
    margin: 0;
    margin-top: 7px;
    font-size: 14px;
    cursor: pointer;
  }
`
const Right = styled.div`
  width: 50%;
  display: flex;
`
const Card = styled.div`
  width: 800px;
  height: 600px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  overflow: hidden;
  border-radius: 10px;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
