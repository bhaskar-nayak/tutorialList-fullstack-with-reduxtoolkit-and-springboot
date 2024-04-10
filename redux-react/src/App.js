import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Users from './users.component';
import TutorialsList from './tutorials/tutorials-list.component';
import AddTutorials from './tutorials/add-tutorials.component';
import EditTutorial from './tutorials/edit-tutorial.component';
import DeleteTutorial from './tutorials/delete-tutorials.component';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='users' element={<Users/>}></Route>
      <Route path='/' element={<TutorialsList/>}></Route>
      <Route path='add-tutorial' element={<AddTutorials/>}></Route>
      <Route path='edit-tutorial/:id' element={<EditTutorial/>}></Route>
      <Route path='delete-tutorial/:id' element= {<DeleteTutorial/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
