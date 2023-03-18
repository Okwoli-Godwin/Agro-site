import React from 'react'
import styled from 'styled-components'
import img from "../Assets/mango.jpg"
import img2 from "../Assets/lea.png"
import img3 from "../Assets/watermelon.jpg"
import img4 from "../Assets/orange.jpg"
import img5 from "../Assets/banana.jpg"

const Fruits = () => {
  return (
    <Container>
        <Wrapper>
            <Card>
                
                <Top>
                    <Img2 src={img2} />
                    <Img src={img} />
                </Top>
                <Down>
                    <p>Mangoes</p>
                    <h4>₦600</h4>
                    <Button>Add to Cart</Button>
                </Down>
            </Card>

            <Card>
                
                <Top>
                    <Img2 src={img2} />
                    <Img src={img3} />
                </Top>
                <Down>
                    <p>Watermelons</p>
                    <h4>₦500</h4>
                    <Button>Add to Cart</Button>
                </Down>
            </Card>

            <Card>
                
                <Top>
                    <Img2 src={img2} />
                    <Img src={img4} />
                </Top>
                <Down>
                    <p>Oranges</p>
                    <h4>₦150,000.00</h4>
                    <Button>Add to Cart</Button>
                </Down>
            </Card>

            <Card>
                
                <Top>
                    <Img2 src={img2} />
                    <Img src={img5} />
                </Top>
                <Down>
                    <p>Banana</p>
                    <h4>₦150,000.00</h4>
                    <Button>Add to Cart</Button>
                </Down>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Fruits
const Img2 = styled.img`
    position: absolute;
    right: 0;
    height: 47px;
    object-fit: contain;
`
const Button = styled.button`
    width: 120px;
    height: 47px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: #03993f;
    cursor: pointer;
    border: 1px solid #03993f;
    margin-top: 10px;
`
const Down = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        margin: 0;
        margin-top: 15px;
        margin-bottom: 10px;
    }
    h4{
        margin: 0;
    }
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
const Top = styled.div`
    width: 100%;
    height: 250px;
    /* background-color: red; */
    position: relative;
`
const Card = styled.div`
    width: 270px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding-bottom: 15px;
`
const Wrapper = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 60px;
`