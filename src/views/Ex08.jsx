//import 라이브러리
import React, {useState} from 'react';

//import 컴포넌트


//import css




// 배열로 값을 주기때문에 [변수이름, 메소드이름]  useState는 값을 안넣어줘도 됨ㅇㅇ state()안에 값 넣어주면 초기값으로 적용됨ㅇㅇ 그리고 변경시키는거
const Ex08 = () => {

    
    /*#####---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /*#######---일반 메소드 --------------------------------------------*/


    /*######---생명주기 + 이벤트 관련 메소드 ----------------------*/

    //email 입력할때
    const handleEmailChange = (event)=>{

        console.log('키보드 입력');
        console.log(event.target.value);
        setEmail(event.target.value);
    };

    //password 입력할 때
    const handlePasswordChange = (e)=>{
        console.log('password입력');
        setPassword(e.target.value);
    };
    //login 할 때

    // 데이터 정송은 ajax 사용해서 보낼거임. (form 자체의 전송기능이 실행이 되면 안됨 : preventDefault() 로 기능 막아주기
    const handleLogin = (event)=>{
        
        // 1.이벤트 잡는다
        console.log("전송");
        console.log(event.target);

        event.preventDefault();

        // 2. 데이터 잡는다 >>  객체로 묶기

        console.log(email, password);

        const formValue = {
            email: email,
            password: password
        }

        console.log(formValue);

        // 3. 전송



    };



    return (
        <>
            <form action='/Ex02' method='get' onSubmit={handleLogin}>
                <div>
                    <label htmlFor='txt-email' >이메일</label>
                    <input id="txt-email" type="text" name="email" value={email} onChange={handleEmailChange} /> <br/><br/>
                </div>
                <div>
                    <label htmlFor="txt-password">패스워드</label>
                    <input id="txt-password" type="text" name="pasword" value={password} onChange={handlePasswordChange} />
                </div>


                <button type="submit">버튼</button>
            </form>
        </>
    );
}

export default Ex08;
