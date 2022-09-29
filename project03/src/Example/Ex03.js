import React, { useState } from 'react'

const Ex03 = () => {

    // 1. 랜덤한 수를 뽑아준다.
    // 범위는 1~3
     const [randomNum, setRandomNum] = useState(0)
     const [inputNum, setInputNum] = useState(0)

     
     
     // 2. 누른 버튼의 숫자를 랜덤한 수와 비교
     //      => 함수를 따로 만드는 것을 추천!
     const btnCK = (event) => {
        console.log(parseInt(event.target.innerText))
        setInputNum(event.target.innerText)

        setRandomNum(Math.floor(Math.random()*3+1))
     }
    
    // 3. 만약, 랜덤한 수와 누른 버튼의 수가 같다면 
    //      정답입니다!
    //      다르다면, '땡!' 을 출력할 것


  return (
    <div>
        <div>
            <button onClick={btnCK}>1</button>
            <button onClick={btnCK}>2</button>
            <button onClick={btnCK}>3</button>
        </div>

        <div> 
            내가 입력한 숫자 : {inputNum} 
            <br/>
            랜덤 수 : {randomNum}
            <br/>
            {inputNum === randomNum ? <p>정답입니다!</p> : <p>땡!</p>}
        </div>
    </div>
  )
}

export default Ex03