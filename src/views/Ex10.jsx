//import 라이브러리
import React, {useState} from 'react';

//import 컴포넌트


//import css





const Ex09 = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/      /* isLogin은 setLogin 을 통해서 값을 바꿔야한다. */
    const [isLogin, setLogin] = useState(true);

    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    // 1.이벤트 잡기
    const handleLogin = (e)=>{
        console.log('버튼 딸깍');
        
        setLogin(!isLogin);
        
        /* << ****** if문을 반대값으로 간단하게 표현해주기 >> 
        if(isLogin === true){
            setLogin(false);
        }else{
            setLogin(true);
        }
        */
        
    };
    //2. 데이터 잡기 + 묶기(배열)

    //3. 전송 (ajax 사용)

    return (
        <>
            <button type="button" onClick={handleLogin}>로그인 상태 변화</button>

            {
            (isLogin === true) ?
                (
                <ul>
                    <li>로그인 된 화면</li>
                    <li>로그아웃 버튼</li>
                    <li>회원정보 수정화면 이동</li>
                </ul>
                ) : (
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
