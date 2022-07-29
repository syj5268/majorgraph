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

function App() {
  return (
    <BrowserRouter>
      <div>
        <div class="container">
        <img src="./seoul.png"></img>
          <Link to="/yonsei">
            {/* <Button variant="primary">나는 연세버튼</Button> */}
            나는 연세버튼
          </Link>
          <Link to="/korea">나는 고려버튼
          </Link>
        </div>
        <Routes>
          <Route path="/korea" element={<Korea/>}>
          </Route>
          <Route path="/yonsei" element={<Yonsei/>}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
