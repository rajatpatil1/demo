import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import axios from "axios";

const TodoWrapper = () => {
  const [todoData, setTodoData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const ITEMS_PER_PAGE = 10;

  const fetchTodo = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log("data: ", data.data);
    setTodoData(data?.data);
  };
  useEffect(() => {
    fetchTodo();
  }, []);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTodos = todoData.slice(startIndex, endIndex);

  const isNextDisabled = endIndex >= todoData.length;
  const isBackDisabled = currentPage === 0;

  const handleNext = () => {
    console.log("click on next");
    if (endIndex < todoData.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleBack = () => {
    console.log("click on back");

    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <TodoList
        todoData={currentTodos}
        handleNext={handleNext}
        handleBack={handleBack}
        isNextDisabled={isNextDisabled}
        isBackDisabled={isBackDisabled}
      />
    </div>
  );
};

export default TodoWrapper;
