//import 라이브러리
import React, {useState, useEffect} from 'react';

//import 컴포넌트


//import css





const Ex15 = () => {

    
    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    const [ no, setNo] = useState(0);
    



    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    useEffect(()=>{
        console.log('마운트 될 때')
    }, [no]); // 마운트 될 때(로딩 될 때 : 안에 비어있을때 /// no가 들어가면 : no가 변할때 )

    //버튼 클릭 했을 때
    const handlePlus = ()=>{
        setNo((prevNo)=>{
            prevNo = prevNo+1;
            return prevNo;
        });
        
    };



    return (
        <>
            {no}
            <br/>
            <button type='button' onClick={handlePlus}>버튼</button>

        </>
    );
}

export default Ex15;
