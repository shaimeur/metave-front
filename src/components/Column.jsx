import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 13.75rem;
  max-width: 90%;
`;
const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  flex-grow : 1;
  min-height : 6.25rem
  padding: 12px 16px;
  transition: background-color 0.2s ease;
  color: black;
  font-size: 1.7rem;
  cursor: pointer;
  user-select: none;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
`;

const Column = (props) => {
  return (
    <Container>
      <Title>{props.column.title}</Title>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => (
          <TaskList
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {props.tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
