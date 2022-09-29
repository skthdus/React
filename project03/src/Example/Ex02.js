import React from 'react'
import { useState } from 'react'
//외부링크 사용 import iuPic from './img/iuPic'

const Ex02 = () => {

     // 1. '좋아요' 버튼 클릭 시, 버튼의 내용이 '좋아요 취소'로 변경
     //      '좋아요 취소' 버튼 클릭 시, 버튼의 내용이 '좋아요'로 변경

     // 2. '좋아요' 버튼 클릭 시, 비어있는 하트가 꽉찬 하트로 변경
     //      '좋아요 취소' 버튼 클릭 시, 꽉찬 하트가 비어있는 하트로 변경

    const [good, setGood] = useState('좋아요')
    const [heart, setHeart] = useState('♡')

    const like = () => {
        if(good=='좋아요'){
            setGood('좋아요 취소')
            setHeart('♥')
        } else{
            setGood('좋아요')
            setHeart('♡')
        }
        
        // good == '좋아요' ? setGood('좋아요 취소') : setGood('좋아요')
        // heart == '♡' ? setHeart('♥') : setHeart('♡')
    }
       
    // 3. '+1' 버튼 클릭 시, 숫자가 1씩 증가
    const [num, setNum] = useState(0)
    const increase = () =>{
        setNum(num+1)
    }

    // 4. '-1' 버튼 클릭 시, 숫자가 1씩 감소
    //      (단, 0 밑으로는 내려가지 않도록!)
    const [num2, setNum2] = useState(num)
    const decrease = () => {
        //조건이 하나일 때 -> && 사용 : num>0 && setNum(num-1)
        if(num>0){
            setNum(num-1)
        }
    }

  return (
    <div>
        {/* 이미지, 좋아요 버튼, +1 버튼, -1 버튼 */}
        <img
        width="300px" 
        src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/451/3372cafa51c493af747dc3b35a26d5a0_res.jpeg">
        {/* src={iuPic} */}
        </img>
        <p>{heart} {num}</p>
        <br/>
        <button onClick={like}>{good}</button>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
    </div>
  )
}

export default Ex02