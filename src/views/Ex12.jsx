//import 라이브러리
import React from 'react';

//import 컴포넌트


//import css





const Ex12 = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/


    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    // 1.이벤트 잡기

    //2. 데이터 잡기 + 묶기(배열)

    //3. 전송 (ajax 사용)
    const fruitList = ['사과', '바나나', '체리', '포도'];

    /* fruitList처럼 여러개의 값을 가지고 있는 배열은 자체적으로 map을 가지고있다.(for문과 비슷한 개념) */
    return (
        <>
            <ul>
                {
                    fruitList.map((fruit, index)=>{
                        console.log(fruit)
                        console.log(index)
                        return (
                            <li>{fruit}</li>
                        )
                    })
                        
                
                }
                
            </ul>
        </>
    );
}

export default Ex12;
