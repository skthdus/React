import React, { useRef } from 'react'

const App3 = () => {
    const idRef = useRef();
    const checkBoxRef = useRef();
    const selectRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        // form 태그가 다른 페이지로 정보를 이동시키지 못하도록 막아주는 것

        // (1) input text => useRef
        console.log('제출 완료!', idRef.current.value)

        // (2) input radio, checkbox => useRef
        console.log(checkBoxRef.current.checked)
        console.log(checkBoxRef.current.value)
        // checkbox, radio 같은 경우 =>
        // 값을 받아오고 싶으면 .value
        // 체크 여부를 알고싶으면 .checked

        // (3) select 태그 => useRef
        console.log('select : ', selectRef.current.value)


        // axios.post('springboot URL',{보내줄 data})
        // .then(()=>{})
        // // 데이터를 성공적으로 가져왔다면?
        // // navigate => 페이지 이동
        // .catch(()=>{})
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            이름 : <input type='text' name='userName' ref={idRef}/>

            <br></br>

            희망 근무지 : 
            광주 <input type='checkbox' name='ps' value='gj' ref={checkBoxRef}/>
            서울 <input type='checkbox' name='ps' value='sl' ref={checkBoxRef}/>
            판교 <input type='checkbox' name='ps' value='pg' ref={checkBoxRef}/>
            {/* name : 그룹이라는 것. value : 각각의 값 */}
            <br></br>

            <select ref={selectRef}>
                <option value='hw'>할로윈</option>
                <option value='xmas'>크리스마스</option>
                <option value='ny'>새해</option>
            </select>

            <input type='submit'/>

        </form>
    </div>
  )
}

export default App3