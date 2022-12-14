
import Button from 'react-bootstrap/Button';
import {
  Link,
} from "react-router-dom";


const Main = () => {

    const handleAnchorClick = event => {
        // ποΈ use event.preventDefault() if you want to
        // prevent navigation
        // event.preventDefault();
    
        console.log('Anchor element clicked');
    
        // ποΈ refers to the link element
        console.log(event.currentTarget);
      };


    return (
    <div class="container">
            <div className='inner-div'>
               <h1 className='title'>Major Graph</h1>
              <div  className='subtitleConatiner'>
               <h4 className='subtitle'>νκ³Όλ₯Ό λλ¬ κ³΅μ§μ¬ν­κ³Ό λμΈνλμ ν λμ νμΈνμΈμ</h4>
               </div>
               </div>
        <div class="container2">
        
    <img src="./seoul.png"></img>
      <Link to="/korea">
        <Button className="btn-b1" variant="primary">κ΅­μ λν</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b2" variant="primary">λ¬Έκ³Όλν</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b3" variant="primary">μ¬λ²λν</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b4" variant="primary">μ¬λ¦¬νλΆ</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b5" variant="primary">μ κ²½λν</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b6" variant="primary">λμμΈμ‘°ννλΆ
      </Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b7" variant="primary">λ―Έλμ΄νλΆ</Button> 
      </Link>
 

     <Link   to="/korea">
      <Button className="btn-b8" variant="primary">κ°νΈλν</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b9" variant="primary">μκ³Όλν</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b10" variant="primary">μλͺκ³Όνλν</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b11" variant="primary">κ³΅κ³Όλν</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b12" variant="primary">λ³΄κ±΄λν
      </Button> 
      </Link>
    
     
   
      <Link   to="/science">
      <Button className="btn-b13" variant="primary">μ΄κ³Όλν</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b14" variant="primary">μ λ³΄λν</Button> 
      </Link>
      <Link   to="/korea">
      <Button className="btn-b15" variant="primary">μ€λ§νΈλ³΄μνλΆ</Button> 
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
    <h5>ν¬νΈ</h5>
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
    <h5>μΏ μΉ΄μ΄λΈ</h5>
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
    <h5>κ²½κ°μΌ</h5>
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
    <h5>AIμ λ°°</h5>
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
    <h5>κ΅­μ μ²</h5>
    </li>
		</ul>
    </div>

    </div>
    )
}


export default Main