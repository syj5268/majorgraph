import "./yonsei.css"
import {
    Link,
  } from "react-router-dom";
  
import Button from 'react-bootstrap/Button';

const Yonsei = () => {
    return <div class="container">
    <div className='inner-div'>
     
        <h1 className="title"><a href='https://science.korea.ac.kr/science/board/department/notice_re.do'>이과대학</a></h1>
        <ul>
        <li><div className= 'box'>
        <div><Link to="/earthenv"><Button className="btn2" variant="primary">지구환경과학과</Button></Link></div>
        <div className="boxcontainer"><p>#지구물질과학</p>
             <p>#화성암석학</p>
             <p>#지구화학</p>
             <p>#지구물리학대기화학</p>
             <p>#자연수지구화학</p>
             <p>#수리지질학</p>
             <p>#구조지질학</p>
             <p>#지구물리탐사</p>
             <p>#퇴적시스템</p>
             <p>#토양환경광물학</p>
             <p>#지진학</p>
             <p>#지질공학</p>
             <p>#환경과학실습</p>
             <p>#야외지질학실습</p></div>
            </div></li>
        <li><div className= 'box'> 
        <div><Button className="btn" variant="primary">수학과</Button></div>
        <div className="boxcontainer">
         <p>#선형대수및연습</p>
         <p>   #복소해석학</p>
         <p> #대수학</p>
         <p>  #미분기하학</p>
         <p>  #위상수학</p>
</div></div></li>
        <li><div className= 'box'> 
        <div><Button className="btn" variant="primary">물리학과</Button></div>
        <div className="boxcontainer"><p>#전자물리학및실험</p>
        <p>#기초물리학실험</p>
        <p>#고전역학</p>
        <p>#전자기학</p>
        <p>#수리물리학</p>
        <p>#수리역학</p>
        <p>#현대물리학실험</p>
        <p>#통계물리학</p>
        <p>#양자역학</p>
        </div></div></li>
        <li><div className= 'box'>
        <div><Button className="btn" variant="primary">화학과</Button></div>
        <div className="boxcontainer"><p>#화학수학</p>
        <p>#물리화학</p>
        <p>#유기화학</p>
        <p>#분석화학</p>
        <p>#무기화학</p>
        <p>#생화학</p>
        </div></div></li>
        </ul>
    </div>
    </div>
}





export default Yonsei