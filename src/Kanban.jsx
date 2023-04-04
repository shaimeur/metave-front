import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import data from "./data";
import Column from "./Column";

const Kanban = () => {
  const [list, setList] = useState(data);

  const dragEndHandler = (result) => {
    // TODO : reorder our column
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = list.columns[source.droppableId];

    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };
    const newState = {
      ...list,
      columns: {
        ...list.columns,
        [newColumn.id]: newColumn,
      },
    };
    setList(newState);
  };
  return (
    <DragDropContext onDragEnd={dragEndHandler}>


      {list.columnOrder.map((columnId) => {
          const column = list.columns[columnId];
          const tasks = column.taskIds.map((taskId) => list.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}

    </DragDropContext>
  );
};

export default Kanban;