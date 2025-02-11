import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
//lessons
import Lesson17 from 'lessons/Lesson17/Lesson17'
import Layout from 'pages/UsersApp/Layout/Layout'
import Home from 'pages/UsersApp/Home/Home'
import Users from 'pages/UsersApp/Users/Users'
import Lesson18 from "./lessons/Lesson18/Lesson18"; 




//homeworks
import Homework17 from "./homeworks/Homework17/Homework17"; 

// import Homework18 from './homeworks/Homework18/Homework18' 


//consultations

// Components (добавляем Feedback и Counter)
import Feedback from "components/Feedback/Feedback"; 
import Counter from "components/Counter/Counter"; 
import AdviceRandomizer from "components/AdviceRandomizer/AdviceRandomizer"; 



const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Lesson17 /> */}
      {/* UserApp - Practice - Lesson17 */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/advice" element={<AdviceRandomizer />} />
          <Route path="/lesson18" element={<Lesson18 />} />
          <Route path="/homework17" element={<Homework17 />} />
          {/* <Route path="/homework18" element={<Homework18 />} /> */}
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<h1>Page not found</h1>} /> 
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
//http://localhost:5173/homework17