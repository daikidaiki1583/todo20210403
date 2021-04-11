import React, { FC, useState } from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";

type TaskProps = {
  isDone: boolean;
};

const Task = styled.div<TaskProps>`
  text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
  color: palevioletred;
`;

const TaskText = styled.span`
  color: black;
`;

const Item = styled.li`
  list-style: none;
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
`;

const ButtonZone = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  text: string;
  handleClick: () => void;
};

const TodoItem: FC<Props> = ({ text, handleClick }) => {
  const [isDone, setIsDone] = useState<boolean>(false);

  const done = (): void => {
    setIsDone((state) => !state);
  };

  return (
    <Item>
      <Task isDone={isDone}>
        <TaskText>{text}</TaskText>
      </Task>
      <ButtonZone>
        <CustomButton handleClick={done}>
          {isDone ? "復元" : "完了"}
        </CustomButton>
        <CustomButton handleClick={handleClick}>削除</CustomButton>
      </ButtonZone>
    </Item>
  );
};

export default TodoItem;
