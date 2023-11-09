import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./component/Mainpage";
import Homepage from "./component/Homepage";
import Aboutus from "./component/Aboutus";
import Services from "./component/Services";
import Contactus from "./component/Contactus";
import Error from "./component/Error";
import Todo from "./component/Todo";
import TodoEdit from "./component/TodoEdit";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<Aboutus />} />
            <Route path="services" element={<Services />} />
            <Route path="services/todo" element={<Todo />} />
            <Route path="services/todoedit" element={<TodoEdit />} />
            <Route path="contact" element={<Contactus />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
