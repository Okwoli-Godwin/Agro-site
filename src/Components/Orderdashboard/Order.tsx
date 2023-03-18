import styled from "styled-components"
import Dashhead from "../Dashboard/Dashhead"
import SideBar from "../Dashboard/SideBar"
import { AiOutlinePlus } from "react-icons/ai"
import img from "../Assets/blush10.png"
import {MdDelete} from "react-icons/md"

const Order = () => {
  return (
      <div>
          <Dashhead />
          <SideBar />
          <Container>
            <Upload>
                  <Head>
                      <Navs>Order Id</Navs>
                      <Navs>Name</Navs>
                      <Navs>Date</Navs>
                      <Navs>Status</Navs>
                      <Navs>Action</Navs>
                  </Head>
                  <Detail>
                      <Profile>
                          <Img src={img} />
                          <Text>Sylvia</Text>
                      </Profile>
                      <Email>okwoli@gmail.com</Email>
                      <Orders>12/3/4</Orders>
                      <Join>Shipped</Join>
                      <Delete><MdDelete /></Delete>
                  </Detail>

                  <Detail>
                      <Profile>
                          <Img src={img} />
                          <Text>Sam</Text>
                      </Profile>
                      <Email>natty@gmail.com</Email>
                      <Orders>13/34/8</Orders>
                      <Join>Shipped</Join>
                      <Delete><MdDelete /></Delete>
                  </Detail>

                  <Detail>
                      <Profile>
                          <Img src={img} />
                          <Text>Vic</Text>
                      </Profile>
                      <Email>Vic@gmail.com</Email>
                      <Orders>12/12/30</Orders>
                      <Join>24/8/5</Join>
                      <Delete><MdDelete /></Delete>
                  </Detail>

                  <Detail>
                      <Profile>
                          <Img src={img} />
                          <Text>Mic</Text>
                      </Profile>
                      <Email>Mic@gmail.com</Email>
                      <Orders>12/20/09</Orders>
                      <Join>Shipped</Join>
                      <Delete><MdDelete /></Delete>
                  </Detail>

                  <Detail>
                      <Profile>
                          <Img src={img} />
                          <Text>Liv</Text>
                      </Profile>
                      <Email>Liv@gmail.com</Email>
                      <Orders>9/5/3</Orders>
                      <Join>Pending</Join>
                      <Delete><MdDelete /></Delete>
                  </Detail>

                  <Detail>
                      <Profile>
                          <Img src={img} />
                          <Text>Wat</Text>
                      </Profile>
                      <Email>Water@gmail.com</Email>
                      <Orders>15/6/08</Orders>
                      <Join>Pending</Join>
                      <Delete><MdDelete /></Delete>
                  </Detail>

                  <Detail>
                      <Profile>
                          <Img src={img} />
                          <Text>Leo</Text>
                      </Profile>
                      <Email>Leoa@gmail.com</Email>
                      <Orders>12/12/12</Orders>
                      <Join>Shipped</Join>
                      <Delete><MdDelete /></Delete>
                  </Detail>
          </Upload>
      </Container>

        </div>
        )
}

export default Order
const Delete = styled.div`
    color: red;
    font-size: 19px;
`
const Join = styled.div`
    font-size: 16px;
`
const Orders = styled.div`
    font-size: 16px;
    margin-left: -85px;
`
const Email = styled.div`
    font-size: 16px;
    margin-left: -80px;
`
const Text = styled.div`
    font-size: 16px;
    margin-left: 5px;
`
const Img = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    object-fit: cover;
`
const Profile = styled.div`
    display: flex;
    align-items: center;
`
const Detail = styled.div`
    width: 93%;
    display: flex;
    justify-content: center;
    height: 70px;
    /* background-color: #E2E7F1; */
    padding-right: 10px;
    padding-left: 10px;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`
const Navs = styled.div`
    font-size: 17px;
`
const Head = styled.div`
    width: 93%;
    display: flex;
    justify-content: center;
    height: 70px;
    background-color: #E2E7F1;
    padding-right: 10px;
    padding-left: 10px;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
`
const Upload = styled.div`
    width: 90%;
    height: 100%;
    font-size: 40px;
    cursor: pointer;
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-top: 120px;
    margin-left: 40px;
    flex-direction: column;
    display: flex;
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
    overflow-x: hidden;
`