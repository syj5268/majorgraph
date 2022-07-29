
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
import WordCloud from "./page/wordCloud";

import "./page/main.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/korea" element={<Korea />} />
        <Route path="/science" element={<Yonsei />} />
        <Route path="/earthenv" element={<WordCloud/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
