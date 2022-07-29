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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/korea" element={<Korea />} />
        <Route path="/yonsei" element={<Yonsei />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
