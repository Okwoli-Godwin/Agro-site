import React from 'react'
import styled from 'styled-components'
import img from "../Assets/palmoil.png"
import img2 from "../Assets/lea.png"
import img3 from "../Assets/groundnutoil.png"
import img4 from "../Assets/palmoil2.png"
import img5 from "../Assets/kings.png"

const Vegetable = () => {
  return (
    <Container>
        <Wrapper>
            <Card>
                
                <Top>
                    <Img2 src={img2} />
                    <Img src={img} />
                </Top>
                <Down>
                    <p>Palm Oil 5L</p>
                    <h4>₦7,000.00</h4>
                    <Button>Add to Cart</Button>
                </Down>
            </Card>

            <Card>
                
                <Top>
                    <Img2 src={img2} />
                    <Img src={img3} />
                </Top>
                <Down>
                    <p>Vegetable Oil 2L</p>
                    <h4>₦6,000.00</h4>
                    <Button>Add to Cart</Button>
                </Down>
            </Card>

            <Card>
                
                <Top>
                    <Img2 src={img2} />
                    <Img src={img4} />
                </Top>
                <Down>
                    <p>Palm Oil 3L</p>
                    <h4>₦6,000.00</h4>
                    <Button>Add to Cart</Button>
                </Down>
            </Card>

            <Card>
                
                <Top>
                    <Img2 src={img2} />
                    <Img src={img5} />
                </Top>
                <Down>
                    <p>King's Pure Vegetable Oil - 5L</p>
                    <h4>₦9,000.00</h4>
                    <Button>Add to Cart</Button>
                </Down>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Vegetable
const Img2 = styled.img`
    position: absolute;
    right: 0;
    height: 47px;
    top: 0;
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
    width: 50%;
    object-fit: contain;
`
const Top = styled.div`
    width: 100%;
    height: 250px;
    /* background-color: red; */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
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