import styled from "styled-components"
import Dashhead from "../Dashboard/Dashhead"
import SideBar from "../Dashboard/SideBar"
import {AiOutlinePlus} from "react-icons/ai"

const ProductUpload = () => {
  return (
      <div>
          <Dashhead />
          <SideBar />
          <Container>
            <Upload>
                <AiOutlinePlus />
          </Upload>
      </Container>

        </div>
        )
}

export default ProductUpload
const Upload = styled.div`
    width: 200px;
    height: 200px;
    font-size: 40px;
    cursor: pointer;
    color: #b1b1b1;
    border: 1px solid #b1b1b1;
    border: dotted;
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-top: 120px;
    margin-left: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    width: calc(100% - 19%);
    display: flex;
    height: 100px;
    background-color: #F5F7FA;
    margin-left: 258px;
    height: 100vh;
    flex-direction: column;
`