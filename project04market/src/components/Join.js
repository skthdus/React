import React, {useRef, useState, useEffect } from 'react'

const Join = () => {

    const [userData, setUserData] = useState({})
    const idRef = useRef()
    const pwRef = useRef()
    const nameRef = useRef()
    const selRef = useRef()

    const btnCK = () => {
        console.log('id : ', idRef.current.value)
        console.log('pw : ', pwRef.current.value)
        console.log('name : ', nameRef.current.value)
        console.log('selected : ', selRef.current.value)

        setUserData({
            'id' : idRef.current.value,
            'pw' : pwRef.current.value,
            'name' : nameRef.current.value,
            'select' :  selRef.current.value
        })
    }

        useEffect(()=>{
            console.log('현재 data : ', userData)
            // backend => 값을 보내줌
            // userData.id !== undefined && alert(userData.id)
        }, [userData])
        // alert(`${selRef.current.value}을 좋아하는 ${nameRef.current.value}님 환영합니다!` );
       alert(`${userData.select}을 좋아하는 ${userData.name}님 환영합니다!`)


  return (
    <div>

        ID : <input type="text" placeholder='ID를 입력하시오' ref={idRef}></input>
        <button>아이디 중복확인</button>
        <br></br>
        PW : <input type="password" placeholder='PW를 입력하시오' ref={pwRef}></input>
        <br></br>
        이름 : <input type="text" placeholder='이름을 입력하시오' ref={nameRef}></input>
        <br></br>

        좋아하는 계절 : 
        <select ref={selRef}>
            <option value="봄">봄</option>
            <option value="여름">여름</option>
            <option value="가을">가을</option>
            <option value="겨울">겨울</option>
        </select>
        <br></br>

        <button onClick={btnCK}>회원가입</button>

    </div>
  )
}

export default Join