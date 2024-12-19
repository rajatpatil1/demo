import React from "react";

const TodoList = ({ todoData, handleNext, handleBack, isNextDisabled, isBackDisabled }) => {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>userId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>

        <tbody>
          {todoData.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.userId}</td>
              <td>{ele.id} </td>
              <td>{ele.title}</td>
              <td>{`${ele.completed}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handleBack} disabled={isBackDisabled}>
          Back
        </button>
        <button onClick={handleNext} disabled={isNextDisabled}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TodoList;
