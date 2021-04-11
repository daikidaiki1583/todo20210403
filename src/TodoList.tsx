import React, { FC } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { Task } from "./Main";

const List = styled.ul`
  width: 80%;
  border-radius: 5px;
  margin: 8px auto;
  padding: 8px 0;
`;

const Title = styled.h1`
  text-align: center;
`;

type Props = {
  todoList: Task[];
  setTodoList: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TodoList: FC<Props> = ({ todoList, setTodoList }) => {
  const handleDelete = (id: number): void => {
    setTodoList(todoList.filter((todo) => todo.taskId !== id));
  };

  return (
    <List>
      <Title>todoリスト</Title>
      {todoList.map((li) => (
        <TodoItem
          key={li.taskId}
          text={li.task}
          handleClick={() => handleDelete(li.taskId)}
        />
      ))}
    </List>
  );
};

export default TodoList;
