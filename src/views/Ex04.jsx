//import 라이브러리
import React from 'react';

//import 컴포넌트


//import css





const Ex04 = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/


    /*---일반 메소드 --------------------------------------------*/
    let no = 0;

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    /* 기명함수 : 이름있는 함수 (밑에 이름없는 함수만들어보기)
    function handleNamePrint(){
        console.log("정우성")
    }
    */
    const handleP = ()=>{
        no = no+1;
        console.log(no);
    }
    const handleM = ()=>{
        no = no-1;
        console.log(no);
    }
    const reset = ()=>{
        no = 0;
        console.log(no)
    }




    return (
        <>
            <h1>리엑트 공부</h1>
            <h2>이벤트</h2>
            클릭이벤트<br/>
            클릭하면 콘솔에 출력됨<br/><br/>
            <button type="button" onClick={handleP}> 더하기 </button> <br/>
            <button type="button" onClick={handleM}>빼기</button> <br/>
            <button type="button" onClick={reset}>초기화</button>
        </>
    );
}

export default Ex04;
