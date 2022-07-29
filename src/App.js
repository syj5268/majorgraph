import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Korea from './page/korea'
import Yonsei from './page/yonsei'
import Main from './page/main'



function App() {

  const handleAnchorClick = event => {
    // 👇️ use event.preventDefault() if you want to
    // prevent navigation
    // event.preventDefault();

    console.log('Anchor element clicked');

    // 👇️ refers to the link element
    console.log(event.currentTarget);
  };


  return (
<<<<<<< HEAD
    <div className="App">
      
      <div class="container">
      <img src="./seoul.png"></img>
        <Button variant="b1">간호대학</Button>
        <Button variant="b2">경영대학</Button>
        <Button variant="b3">공과대학</Button>
        
        
        </div>
    </div>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/korea" element={<Korea />} />
        <Route path="/yonsei" element={<Yonsei />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 8fc92c7df93ddc19f5c6185d5f9493931efe144b
  );
}

export default App;
