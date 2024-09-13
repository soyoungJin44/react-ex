//import 라이브러리
import React, {useState} from 'react';

//import 컴포넌트


//import css





const Ex06 = () => {

    

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    let [no, setNo] = useState(0);
    let [name, setName] = useState('박명수');






    /*---일반 메소드 --------------------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const handlePlus = ()=>{
        //setNo(no+1);
        //console.log(setNo);
        setNo((preNo)=>{
            return preNo+1;
        } );
    }; 
    

    const handleName = ()=>{
       
        console.log('정우성-콘솔');
        setName('정우성-화면')
    }



    return (
        <>
            {no}
            <br/>
            <button type="button" onClick={handlePlus}>이름 출력</button>
            <br/>
            {name} <br/>
            <button type="button" onClick={handleName}>이름은??</button>

        </>
    );
}

export default Ex06;
