//import 라이브러리
import React from 'react';
import { useSearchParams } from 'react-router-dom';

//import 컴포넌트


//import css





const Ex11 = () => {


    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    const [searchParams] = useSearchParams();
    

    /* ------------ 일반변수 ---------------------------------  */
    const strNo = searchParams.get('no');
    const intNo = Number(strNo);

    /*---일반 메소드 --------------------------------------------*/
    /* 형변환한 intNo 값을 getImgTag()메소드를 사용해서 받은 값을 일반메소드 부분에서 no라는 변수이름으로 값 가져와서 사용한다. (밑에서 if문을 쓰면 코드가 복잡해지고 한개씩 다 짤라서 써야하기때무에 
    코드가 복잡해 진다고 하면, 메소드로만 간단하게 남겨두고 위에서 처리하는게 맞다.) */

    
    const getImgTag = (no)=>{
        
        if(no === 1){
            console.log("1번 이미지");
            return <img src="./images/01.png" />
        }else if(no === 2){
            console.log("2번 이미지");
            return <img src="./images/02.png" />
        }else if(no === 3){
            console.log("3번 이미지");
            return <img src="./images/03.png" />
        }else if(no === 4){
            console.log("4번 이미지");
            return <img src="./images/04.png" />
        }else{
            console.log("이미지 없음");
            return <p>그림없음</p>
        }
    };



    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    // 1.이벤트 잡기




    //2. 데이터 잡기 + 묶기(배열)





    //3. 전송 (ajax 사용)





    return (
        <>
        
            {getImgTag(intNo)}

        

        </>
    );
}

export default Ex11;
