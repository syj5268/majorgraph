
import Button from 'react-bootstrap/Button';
import {
  Link,
} from "react-router-dom";


const Main = () => {

    const handleAnchorClick = event => {
        // 👇️ use event.preventDefault() if you want to
        // prevent navigation
        // event.preventDefault();
    
        console.log('Anchor element clicked');
    
        // 👇️ refers to the link element
        console.log(event.currentTarget);
      };

    return (<div class="container">
    <img src="./seoul.png"></img>
      <Link to="/yonsei">
        <Button class="yonsei" variant="primary">나는 연세버튼</Button> 
      </Link>
      <Link to="/korea">
        
      <Button class="btn-b2" variant="primary">나는 고려버튼</Button> 
      </Link>
     
      <a
      onClick={handleAnchorClick}
      href="https://google.com"
      target="_blank"
      rel="noreferrer"
    >
       <Button class="btn-b3" variant="primary">구글버튼</Button> 
    </a>
      
    </div>
    )
}


export default Main