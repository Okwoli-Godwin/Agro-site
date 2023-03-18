import React, {useState} from 'react'
import styled from 'styled-components'
import Animalproduce from './Animalproduce'
import Fruits from './Fruits'
import Plantproduce from './Plantproduce'
import Vegetable from './Vegetable'


const Categories = () => {
    const [show, setShow] = useState(true)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)

    const Toggle = () => {
        setShow(true)
        setShow2(false)
        setShow3(false)
        setShow4(false)
    }

    const Toggle2 = () => {
        setShow2(true)
        setShow(false)
        setShow3(false)
        setShow4(false)
    }

    const Toggle3 = () => {
        setShow3(true)
        setShow2(false)
        setShow(false)
        setShow4(false)
    }

    const Toggle4 = () => {
        setShow4(true)
        setShow3(false)
        setShow2(false)
        setShow(false)
    }
  return (
    <Container>
          <Wrapper>
              <Best>Best Product</Best>
              <Featured><h2>Featured Collection</h2></Featured>
            <Topnavs>
                <Navs onClick={Toggle}>Plant Produce</Navs>
                <Navs onClick={Toggle2}>Animal Produce</Navs>
                <Navs onClick={Toggle3}>Fruits and Vegetables</Navs>
                <Navs onClick={Toggle4}>Oil and Crops</Navs>
            </Topnavs>

            {show ? (
                <Plantproduce />
            ) : null}

            {show2 ? (
                <Animalproduce />
            ) : null}

            {show3 ? (
                <Fruits />
            ) : null}

            {show4 ? (
                <Vegetable />
            ) : null}

            <Button>All Products</Button>
        </Wrapper>
    </Container>
  )
}

export default Categories
const Featured = styled.div`
    margin: 0;
`
const Best = styled.div`
    
`
const Button = styled.button`
    width: 130px;
    height: 45px;
    border: none;
    outline: none;
    border-radius: 50px;
    color: #03993f;
    cursor: pointer;
    color: #fff;
    background-color: #03993f;
    transition: all 350ms ease-in;

    :hover{
        background-color: #fff;
        color: #03993f;
        border: 1px solid #03993f;
    }
`
const Navs = styled.div`
    margin-left: 45px;
    cursor: pointer;
    font-size: 20px;
    color: #03993f;
`
const Topnavs = styled.div`
    display: flex;
`
const Wrapper = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`