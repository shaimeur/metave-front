import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import data from "../data";
import Column from "./Column";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Kanban = () => {
  const [list, setList] = useState(data);

  const dragEndHandler = (result) => {
    // TODO : reorder our column
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const start = list.columns[source.droppableId];
    const finish = list.columns[destination.droppableId];

    if (start === finish) {
      // const newTaskIds = column.taskIds.slice();
      const newTaskIds = structuredClone(start.taskIds);

      newTaskIds.splice(source.index, 1);

      newTaskIds.splice(destination.index, 0, draggableId);

      setList({
        ...list,
        columns: {
          ...list.columns,
          [start.id]: {
            ...start,
            taskIds: newTaskIds,
          },
        },
      });
      return
    }
    // moving from one list to another
    const startTaskIds = structuredClone(start.taskIds);

    startTaskIds.splice(source.index, 1);

    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = structuredClone(finish.taskIds);

    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...list,
      columns : {
        ...list.columns,
        [newStart.id] : newStart,
        [newFinish.id] : newFinish,
      },
    };

    setList(newState)
  };

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <></>
      <Container>
        {list.columnOrder.map((columnId) => {
          const column = list.columns[columnId];
          const tasks = column.taskIds.map((taskId) => list.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    </DragDropContext>
  );
};

export default Kanban;
