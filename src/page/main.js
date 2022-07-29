
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
            <div className='inner-div'>
               <h1 className='title'>Major Graph</h1>
               </div>
        <div class="container2">
        
    <img src="./seoul.png"></img>
      <Link to="/yonsei">
        <Button className="btn-b1" variant="primary">국제대학</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b2" variant="primary">문과대학</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b3" variant="primary">사범대학</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b4" variant="primary">심리학부</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b5" variant="primary">정경대학</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b6" variant="primary">디자인조형학부
      </Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b7" variant="primary">미디어학부</Button> 
      </Link>
 

     <Link   to="/korea">
      <Button className="btn-b8" variant="primary">간호대학</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b9" variant="primary">의과대학</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b10" variant="primary">생명과학대학</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b11" variant="primary">공과대학</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b12" variant="primary">보건대학
      </Button> 
      </Link>
    
     
   
      <Link   to="/korea">
      <Button className="btn-b13" variant="primary">이과대학</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b14" variant="primary">정보대학</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b15" variant="primary">스마트보안학부</Button> 
      </Link>
      </div>


    <div className='bottom-div'>
      <ul>
			<li>      
                <a
      onClick={handleAnchorClick}
      href="https://portal.korea.ac.kr"
      target="_blank"
      rel="noreferrer"
    >

<span class="dot"> <img className='portal' src="./buttons/portal.png"></img></span>
      
    </a>
    </li>
	<li>      
                <a
      onClick={handleAnchorClick}
      href="https://kuchive.korea.ac.kr"
      target="_blank"
      rel="noreferrer"
    >

<span class="dot"> <img className='portal' src="./buttons/kuchive.png"></img></span>
      
    </a>
    </li>
    <li>      
                <a
      onClick={handleAnchorClick}
      href="https://job.korea.ac.kr"
      target="_blank"
      rel="noreferrer"
    >

<span class="dot"> <img className='portal' src="./buttons/career.png"></img></span>
      
    </a>
    </li>
    <li>      
                <a
      onClick={handleAnchorClick}
      href="https://aiku.korea.ac.kr"
      target="_blank"
      rel="noreferrer"
    >

<span class="dot"> <img className='portal' src="./buttons/ment.png"></img></span>
      
    </a>
    </li>
    <li>      
                <a
      onClick={handleAnchorClick}
      href="https://studyabroad.korea.ac.kr"
      target="_blank"
      rel="noreferrer"
    >

<span class="dot"> <img className='portal' src="./buttons/int.png"></img></span>
      
    </a>
    </li>
		</ul>
    </div>

    </div>
    )
}


export default Main