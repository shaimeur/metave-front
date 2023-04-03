import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import data from "./data";
import Column from "./Column";

const App = () => {

  const [list, setList] = useState(data);

  const onDragEnd = (result)=>{
      // TODO : reorder our column
  }


  return (
    <DragDropContext >
    <div>
      {list.columnOrder.map((columnId) => {
        const column = list.columns[columnId];
        const tasks = column.taskIds.map((taskId) => list.tasks[taskId]);
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </div>
    </DragDropContext>
  );
};

export default App;
