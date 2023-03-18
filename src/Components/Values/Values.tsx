import React from 'react'
import styled from 'styled-components'
import HighPerformance from '../Assets/Highperformance.png'
import innovation from '../Assets/innovation.png'
import diversity from '../Assets/diversity.png'
import excellence from '../Assets/excellence.png'
import collaboration from '../Assets/collaboration.png'
import learning from '../Assets/Learning.png'



const OurValues = () => {
  return (
    <Container>
        <Wrapper>
            <Text>Our Values</Text>
            <Txt>Our operations and structures are based on values that we uphold.</Txt>

            <Cards>
            
                <Card1>
                    <Image src = {HighPerformance} />
                    <ProductName>
                        <P>Teamwork</P>
                        <p>Trust is the currency that helps us collaborate and have an <br />
                            environment that is built on mutual respect and communication.</p>
                    </ProductName>     
                </Card1>

                <Card1>
                    <Image src = {innovation} />
                    <ProductName>
                        <P>Innovation</P>
                        <p>We champion new ideas and challenge the status quo.  <br />
                    We have a can-do attitude which inspires us to always take ownership.</p>
                    </ProductName>     
                </Card1>

                <Card1>
                    <Image src = {diversity} />
                    <ProductName>
                        <P>Entrepreneurship</P>
                        <p>We are nimble and open-minded, striving for continuous
                         improvement and highly creative in all we do.</p>
                    </ProductName>     
                </Card1>

                <Card1>
                    <Image src = {excellence} />
                    <ProductName>
                        <P>Exceptionalism</P>
                        <p>We are driven by excellence and a strong desire to be exceptional in our performance.</p>
                    </ProductName>     
                </Card1>

                <Card1>
                    <Image src = {collaboration} />
                    <ProductName>
                        <P>Nurturing</P>
                        <p>We put our people and their safety first. 
                            We appreciate diversity & promote an environment that fosters
                             learning and inclusion.</p>
                    </ProductName>     
                </Card1>

                <Card1>
                    <Image src = {learning} />
                    <ProductName>
                        <P>Responsibility</P>
                        <p>We always do the right thing and take pride in what we do. 
                            We have a high sense of commitment and Transparency which permeates everything we do.</p>
                    </ProductName>     
                </Card1>

            </Cards>
        </Wrapper>
       
    </Container>
  )
}

export default OurValues

const P = styled.p`
    font-weight: bold;
    color:#3f8738
`
const Image = styled.img`
height: 70px;
`

const ProductName = styled.div`
height: 20%;
color: black;
/* margin-top:30px */
`

const Card1 = styled.div`
width: 300px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding-bottom: 10px;
border-radius: 5px;
margin-right: 10px;
margin-left:10px
`

const Cards = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 20px;
`


const Text = styled.h2`
text-align: center;
display: flex;
color: #3f8738
`
const Txt = styled.div`
    margin: 0
`
const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
p{
    text-align: center;
}
`
const Wrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`