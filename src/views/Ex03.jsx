//import 라이브러리
import React from 'react';
import {Link} from 'react-router-dom' 

//import css
import '../css/reset.css';



//import 컴포넌트








const Ex03 = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/


    /*---일반 메소드 --------------------------------------------*/
    const name = "정우성";
    const company = "아티스트컴포니";
    const year = "1973/03/20";
    const firstMovie = "1994년 영화 구미호"
    const lastMovie = "2023년 영화 [서울의 봄]";

    let boxSize = {
        width: '600px'
    }

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    return (
        <>
            <h1>정우성 프로필</h1>
            <br/>
            
            <h2>최근작품</h2>
            {lastMovie}

            <h2>프로필사진</h2>
                <img src="./images/jung.jpg" alt="정우성 프로필 사진"/>
                <br/>
                <Link to="https://ko.wikipedia.org/wiki/%EC%A0%95%EC%9A%B0%EC%84%B1" rel="https://ko.wikipedia.org/wiki/%EC%A0%95%EC%9A%B0%EC%84%B1">위키백과 정우성</Link>
            <h2>정보</h2>

            <table style={boxSize} border="1">
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>소속사</th>
                        <th>생년월일</th>
                        <th>데뷔작</th>
                    </tr>
                </thead>    
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{company}</td>
                        <td>{year}</td>
                        <td>{firstMovie}</td>
                    </tr>
                    <tr>
                        <td colSpan="4">
                            <ul>
                                <li>2023년 영화 [보호자]</li>
                                <li>2022년 영화 [헌트]</li>
                                <li>2020년 영화 [강철비 2:정상회담]</li>
                                <li>2020년 영화 [지푸라기라도 잡고 싶은 짐승들]</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="email">
                <lable htmlFor="email"> 당신의 이메일 주소는?? </lable>
                <input type="text" id="email" name="email" placeholder='이메일'/>
            </div>
        </>
    );
}

export default Ex03;
