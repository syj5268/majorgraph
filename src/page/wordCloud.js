import ReactWordcloud from 'react-wordcloud';
import './wordCloud.css'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import {Resizable } from "re-resizable";


const moveToNaver = (word) => window.location.href = `https://www.campuspick.com/contest?keyword=${word.text}`;

const words = [];
const wordsArr = ['암석', '물리', '화학', '구조', '토양', '입자', '석유' ,'자원', '과학', '환경', '구성', '예측', '시공간적', '지하수', '지표수', '생태계', '해양환경', '연구', '해양', '건설'];
wordsArr.forEach((v, i) => words.push({text:wordsArr[i], value:1}));
const colors = ["blue", "red", "purple", "yellow", "pink", "oragne", "green", "beige"];
const callbacks = {
    // getWordColor: word => word.value > 50 ? "blue" : "red", // color 어레이 만들고, 랜덤으로 고르게 하기
    getWordColor: () => colors[Math.floor(Math.random() * colors.length)],
    onWordClick: moveToNaver,
    // onWordMouseOver: console.log,
    // getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`, // 마우스 올리는 이벤트 감지하면 그냥띄워주는거임
};

const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "NSB",
    fontSizes: [5, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 1,
    rotationAngles: [0, 180],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
};

const size = [window.innerWidth, window.innerHeight];

function WordCloud() {
    return (
        <div className='container'>
           
            <h1 className="title">지구환경과학과</h1>
            <div className='inner-div'>
          
            </div>
            <h2>아래 키워드를 눌러 공모전 현황을 확인하세요!</h2>
            <ReactWordcloud className="worldcloud"
            callbacks={callbacks}
            options={options}
            size={size}
            words={words}
            />
              <div className="ButtonGroupContainer">
            <ButtonGroup>
                <Button variant="primary">
                    <a href='https://ees.korea.ac.kr/ees/community/notice.do'>공지사항</a>
                </Button>
                <Button variant="primary">
                    <a href='https://ees.korea.ac.kr/ees/community/review.do'>취업정보</a>
                </Button> 
                <Button variant="primary">
                    <a href='https://ees.korea.ac.kr/ees/community/webzine.do'>관련사이트</a>
                </Button>
            </ButtonGroup></div>
        </div>
    );
}

export default WordCloud