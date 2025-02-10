import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Counter from "components/Counter/Counter"; 




// Lessons
// import Lesson17 from "lessons/Lesson17/Lesson17";
import Layout from "pages/UsersApp/Layout/Layout";
import Home from "pages/UsersApp/Home/Home";
import Users from "pages/UsersApp/Users/Users";

// Homeworks
import Homework17 from "./homeworks/Homework17/Homework17"; 
import  Feedback  from "./components/Feedback/Feedback";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Lesson17 /> */}
      {/* UserApp - Practice - Lesson17 */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Navigate to="/homework17" />} /> */}
          <Route path="/users" element={<Users />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/homework17" element={<Homework17 />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<h1>Page not found</h1>} /> 
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
//http://localhost:5173/homework17