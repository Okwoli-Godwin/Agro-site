import React from 'react'
import styled from 'styled-components'
import {BiCheckbox} from 'react-icons/bi'

const TalkToUs = () => {
  return (
    <Container>
        <h1>Talk to us</h1>
        <FormCard>
            <ItemHold>
              <Item>Name</Item>
              <ItemInput type = 'text' required/>
            </ItemHold>
            
            <ItemHold>
              <Item>Email</Item>
              <ItemInput type = 'text' required/>
            </ItemHold>

            <MessageHold>
              <Item>Message</Item>
              <MessageInput placeholder='Your Message' type = 'text' required/>
            </MessageHold>

            <Terms>
              <Icon>
                <BiCheckbox />
              </Icon>

              <Txt>
              I have read the Privacy Policy and agree to my personal details <br />
              be processed by AgroAllied Hub
              </Txt>
            </Terms>

            <Button>Submit</Button>
        </FormCard>
    </Container>
  )
}

export default TalkToUs

const Button = styled.button`
margin-top: 30px;
width: 100px;
padding: 15px;
border-radius: 5px;
background-color:#568d40;
border: none;
color: #fff;
font-size: 15px;
margin-right: 370px;
cursor: pointer;
`

const Terms = styled.div`
display: flex;
margin-top: 10px;
`
const Icon = styled.div`
margin-right: 5px;
font-size:20px
`
const Txt = styled.div`
font-size: 15px;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 40px;
  
    h1{
      color: #568d40
    }
`
const FormCard = styled.form`
width: 500px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const ItemInput = styled.input`
margin-top: 5px;
width: 450px;
padding: 10px;
border-radius: 5px;
border: 1px solid grey;
`

const ItemHold = styled.div`
margin-top: 10px;
`
const MessageHold = styled.div`
margin-top: 10px;
`
const MessageInput = styled.input`
margin-top: 5px;
width: 450px;
padding: 10px;
height: 70px;
border-radius: 5px;
border: 1px solid grey;
`
const Item = styled.div``