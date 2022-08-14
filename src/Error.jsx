import React from "react";
import styled from "styled-components";
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto",sans-serif;
  flex-direction: column;
  color: #000;
  line-height: 5rem;
`;

const Big = styled.div`
  font-size: 60px;
  font-weight: 600;
`;

const Medium = styled.div`
  font-size: 40px;
    display: flex;
    align-items: center;
`;

const Small = styled.div`
  font-size: 25px;
  font-weight: 300;
`;

const Error = () => {
  return (
    <Container>
      <Big>404</Big>
      <Medium><ReportGmailerrorredOutlinedIcon fontSize="large" /> Not Found</Medium>
      <Small>Woops! Looks like this page doesn't exist </Small>
    </Container>
  );
};

export default Error;
