//import 라이브러리
import React, {useState} from 'react';

//import 컴포넌트


//import css





const Ex07 = () => {

    
    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    let [no, setNo] = useState(0);


    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const handleP = ()=>{
        setNo((preNo)=>{
            return preNo+1;
        })
        console.log(no)
    };
    const handleM = ()=>{
        setNo((preNo)=>{
            return preNo-1;
        })
    }
    const handleR = ()=>{
        setNo((preNo)=>{
            return preNo = 0;
        })
    }



    return (
        <>
            {no} <br/>
            <button type="button" onClick={handleP}>더하기</button> <br/>
            <button type="button" onClick={handleM}>빼기</button> <br/>
            <button type="button" onClick={handleR}>초기화</button>

        </>
    );
}

export default Ex07;
