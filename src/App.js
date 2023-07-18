import Login from "./pages/login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TodoList from "./pages/todoList";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/todo-list" element={<TodoList/>}/>
          <Route path="/" element={<Login/>}/>

        </Routes>
        
      </BrowserRouter>
    
  );
}

export default App;
