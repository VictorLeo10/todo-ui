import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LandingScreen = () => {
  const navigate = useNavigate();
  const [aha, setAha] = useState("");

  const addName = () => {
    window.localStorage.setItem("todoNameUser", JSON.stringify(aha));
    navigate(+1);
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <ImageBox />
          <h2>Welcome to your Todo Manager</h2>
          <p>
            Here you can organise your daily tasks, assignments and goals...
          </p>
          <InputField
            onChange={(e) => {
              setAha(e.target.value);
            }}
            placeholder="What's your name"
          />

          {aha.replaceAll(" ", "").length <= 3 ? (
            <>
              <Button bc="silver" cs="not-allowed">
                Let's Go
              </Button>
            </>
          ) : (
            <>
              <Button onClick={addName} bc="black" cs="pointer">
                Let's Go
              </Button>
            </>
          )}
        </Wrapper>
      </Container>
    </div>
  );
};

export default LandingScreen;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e7e5ee84;
`;
const InputField = styled.input`
  width: 380px;
  height: 50px;
  border-radius: 15px;
  margin-top: 15px;
  padding-left: 20px;
  border: none;
  outline: none;
  color: #353535;
  ::placeholder {
    color: #a7a6a6;
  }
`;
const Button = styled.button<{ bc: string; cs: string }>`
  background-color: ${(props) => props.bc};
  cursor: ${(props) => props.cs};
  width: 400px;
  margin-top: 15px;
  height: 50px;
  border-radius: 25px;
  border: none;
  color: white;
`;
const ImageBox = styled.div``;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: cursive;
`;
