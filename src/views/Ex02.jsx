//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';

//css import
import '../css/ex02.css'    //import 뒤에 바로 상대경로 걸어주기


//import 컴포넌트


//import css


const Ex02 = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/


    /*---일반 메소드 --------------------------------------------*/
    let cssex = {
        width: '150px'
    }

    let name = '진소영';
    let cssex02 = {
        fontSize: '100px'   //-로 표시되던것들은 카멜표기법으로 사용해야한다.
        ,fontWeight: 'bold'
    }

    /*---이벤트 관련 메소드 ----------------------*/

    
    return (
        <>
            {/* 자바 스크립트 주석 */}
            <h1 style={ {fontSize: '100px', fontWeight:'bold'} }>{name} 홈페이지</h1>    {/* html에 script 문법을 가져다 쓸 때에는 {}안에 넣어주기 */}
            
            <img  src="./images/cat.png" alt="정우성 사진" />    {/* 1개짜리 태그들. input, img 등 태그 닫을때 뒤에  / 붙여줘야한다.*/}
            <br/>
            <Link to="https://ko.wikipedia.org/wiki/%EC%A3%BC%EC%9B%90" rel='https://ko.wikipedia.org/wiki/%EC%A3%BC%EC%9B%90'>문준원 위키백과</Link>
            <input type="text" name="" value="" />
            <br/>
            <h2 class="title">문준원 위키비키</h2>

            <table border="1">
                <colgroup>
                    <col style={cssex} />
                    <col style={ {width:'100px'} } />   {/* 스타일시트 가져다 쓴게 아니고 객체를 가져다 쓴것이기 때문에 ; ㄴㄴ */}
                    <col style={ {width:'100px'} } />
                </colgroup>

                <tbody>
                    <tr>
                        <td>1-1</td>
                        <td>1-2</td>
                        <td>1-3</td>
                        <td>1-4</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">2-1</td>
                        <td colSpan="2">2-2</td>    {/* 피피티 참고 정리 */}
                        
                        <td>2-4</td>
                    </tr>
                    <tr>
                        
                        <td>3-2</td>
                        <td>3-3</td>
                        <td>3-4</td>
                    </tr>
                    <tr>
                        <td>4-1</td>
                        <td>4-2</td>
                        <td>4-3</td>
                        <td>4-4</td>
                    </tr>
                </tbody>

            </table>

            <br/>
            <br/>
            <div>
                <label htmlFor="t-name">이름:</label>
                <input id="t-name" type="text" name="name" value=""/>
            </div>
            <div>
                <label htmlFor='a-dog'>강아지</label>
                <input id="a-dog" type="radio" name="pet"/>
                <br/>
                <label htmlFor='a-cat'>고양이</label> 
                <input id="a-cat" type="radio" name="pet" />

            </div>




        </>
    );
}

export default Ex02;