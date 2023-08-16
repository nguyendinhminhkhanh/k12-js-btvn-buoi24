import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Layout from "./compomen/layout";
import Home from './compomen/home';
import Blog from './compomen/blog';
import TodoList from './compomen/todoList';
import ChangeBackgroud from "./compomen/changebackgroud";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Layout></Layout>}>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/blog' element={<Blog></Blog>}></Route>
            <Route path='/todolist' element={<TodoList></TodoList>}></Route>
            <Route path='/changebackgroud' element={<ChangeBackgroud></ChangeBackgroud>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
