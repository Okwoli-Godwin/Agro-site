import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <First>
          <p>
            <h3>Agro</h3> <br /> AgroMall
          </p>
          <div>Contact us</div>
          <pre style={{ marginTop: "20px" }}>
            Email: <span>emma@gmai.com</span>
          </pre>
          <pre>
            Phone-no: <span>0807765514</span>
          </pre>
          <pre>
            Address: <span>e32,treer street,lagso</span>
          </pre>
        </First>
        <Second>
          <div>Navigation</div>
          <p style={{ marginTop: "15px" }}>
            ADAP (AgroMall Digital Agricultural Plaform)
          </p>
          <p>Community</p>
          <p>Our Work with Forage</p>
          <p>Monitoring and Evaluation</p>
          <p>Quality Assurance & Management</p>
          <p>Sectors</p>
        </Second>
        <Second>
          <div>About Us</div>
          <p style={{ marginTop: "15px" }}>Who we are</p>
          <p>Business Areas</p>
          <p>Our Proposition</p>
          <p>Our Mission</p>
          <p>Our Technology</p>
          <p>Media</p>
        </Second>
        <Second>
          <div>Careers</div>
          <p style={{ marginTop: "15px" }}>Work with us</p>
          <p>The teams</p>
          <p>Vacancies</p>
          <p>Our Mission</p>
          <p>Core Values</p>
        </Second>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Second = styled.div`
  margin-left: 70px;
  margin-top: 44px;

  div {
    color: #008737;
    font-size: 18px;
    font-weight: 700;
  }

  p {
    color: #008737;
    font-size: 14px;
    margin: 0;
    margin-top: 7px;
  }
`;

const First = styled.div`
  margin-top: 40px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  span {
    color: #008737;
    font-size: 14px;
  }
  h3 {
    font-size: 40px;
    font-weight: bold;
    color: #008737;
    text-transform: uppercase;
    margin: 0;
  }
  p {
    font-size: 15px;
    color: #008737;
    line-height: 16px;
    text-align: center;
    margin: 0;
    margin-right: 240px;
  }

  pre {
    margin: 0;
    color: #008737;
    font-size: 15px;
    font-weight: 700;
  }

  div {
    font-size: 18px;
    color: #008737;
    font-weight: 700;
    margin-top: 10px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 340px;
  background-color: #d9e7dd;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 87%;
  height: 250px;
  display: flex;
`;
