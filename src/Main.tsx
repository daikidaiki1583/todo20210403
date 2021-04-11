import React, { useState } from "react";
import TextInput from "./textInput";
import CustomButton from "./CustomButton";
import TodoList from "./TodoList";
import styled from "styled-components";

export type Task = {
  task: string;
  taskId: number;
};

const MainSection = styled.section`
  width: 50vw;
  margin: auto;
`;

const Form = styled.div`
  width: 300px;
  margin: 1em auto;
  display: form;
  align-items: center;
  justify-content: center;
`;

function Main() {
  const [task, settask] = useState<string>("");
  const [todoList, setTodoList] = useState<Task[]>([]);
  const [taskId, setTaskId] = useState<number>(todoList.length);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    settask(e.target.value);
  };

  const handleClick = () => {
    setTodoList([...todoList, { task, taskId }]);
    settask("");
    setTaskId((id) => id + 1);
  };

  return (
    <MainSection>
      <Form>
        <TextInput value={task} handleChange={handleChange} />
        <CustomButton primary="primary" handleClick={handleClick}>
          追加
        </CustomButton>
      </Form>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </MainSection>
  );
}

export default Main;
