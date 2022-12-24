import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface iTodo {
  id: number;
  task: string;
  status: Boolean;
}

const TodoList = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState("");
  const [edit, setEdit] = useState(-1);
  const [data, setData] = useState<iTodo[]>([
    {
      id: 1,
      task: "Go Jugging",
      status: false,
    },
  ]);

  let rand = Math.floor(Math.random() * 3000) + 4000;

  const addTask = () => {
    setData((prev) => [...prev, { id: rand, task: task, status: false }]);
  };

  const removeData = (id: number) => {
    const myFilter = data.filter((el) => el.id !== id);
    setData(myFilter);
  };

  const addName = JSON.parse(window.localStorage.getItem("todoNameUser") || "");
  const showEdit = (id: number) => {
    setEdit(id);
  };

  return (
    <div>
      <Container>
        <br />
        <br />
        <Wrapper>
          <ImageBox />
          <h2>Welcome to your Todo Manager {addName}</h2>
          <p>
            Here you can organise your daily tasks, assignments and goals...
          </p>
          <InputField
            onChange={(e) => {
              setTask(e.target.value);
            }}
            placeholder="What will you be doing today?"
          />

          {task === "" ? (
            <>
              <Button bc="silver" cs="not-allowed">
                Submit Task
              </Button>
            </>
          ) : (
            <>
              <Button onClick={addTask} bc="black" cs="pointer">
                Submit Task
              </Button>
            </>
          )}

          <br />
          <br />
          <h3>All Task</h3>
          {data?.map((props) => (
            <Card key={props.id}>
              {props.id === edit ? (
                <>
                  <input defaultValue={props.task} />
                </>
              ) : (
                <>
                  <p>{props.task}</p>
                </>
              )}
              <Hold>
                <ButtonHold>
                  <button
                    onClick={() => {
                      showEdit(props.id);
                    }}>
                    Edit
                  </button>
                  <button>Done</button>
                  <button
                    onClick={() => {
                      removeData(props.id);
                    }}>
                    Delete
                  </button>
                </ButtonHold>
              </Hold>
            </Card>
          ))}
        </Wrapper>
      </Container>
    </div>
  );
};

export default TodoList;

const Container = styled.div`
  width: 100vw;
  display: flex;
  /* justify-content: center; */
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
const Card = styled.div`
  width: 390px;
  height: 140px;
  background-color: white;
  display: flex;
  padding-left: 10px;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  /* align-items: center; */
  margin-bottom: 20px;
  flex-direction: column;
`;
const Hold = styled.div``;
const ButtonHold = styled.div`
  margin-top: 10px;
  button {
    width: 100px;
    height: 30px;
    margin-right: 10px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: cursive;
`;
