//import 라이브러리
import React from 'react';

//import 컴포넌트


//import css





const Ex09 = () => {

    const isLogin = true; // true: 로그인 , false:비로그인 으로 가정하고



    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/


    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    // 1.이벤트 잡기

    //2. 데이터 잡기 + 묶기(배열)

    //3. 전송 (ajax 사용)

    return (
        <>

            {isLogin===true ? <p>로그인된 화면</p> : <p>비로그인 화면</p> }
            <br/><br/>

            {
                (isLogin===true)? (
                    <ul>
                        <li>로그인 된 화면</li>
                        <li>로그아웃 버튼</li>
                        <li>회원정보 수정화면 이동</li>
                    </ul>
                ) :
                (
                    <ul>
                        <li>로그인 안된 화면</li>
                        <li>로그인 버튼</li>
                        <li>회원가입 화면 이동</li>
                    </ul>
                )

            }



        </>
    );
}

export default Ex09;
