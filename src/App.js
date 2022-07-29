
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/korea" element={<Korea />} />
        <Route path="/yonsei" element={<Yonsei />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
