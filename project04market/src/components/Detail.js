import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Detail = () => {

    // useParams() => 파라미터
    // Route path 값을 수정
    let {num} = useParams()
    
    // useSearchParams() => 쿼리
    // url 값을 수정
    const [query, setQuery] = useSearchParams()

    // 장소까지 추가로 가져와서
    // h2 => 타이틀
    // p => 가격
    // p => 장소

    console.log(query.get('title'))
    console.log(query.get('price'))
    console.log(query.get('place'))


    let container={
      backgroundColor : 'whitesmoke',
      width : '500px',
      height : '300px'
    }
    
  return (
    <div style={container}>
      <p>{num}번째 게시글</p>
      <h2>{query.get('title')}</h2>
      <p>{query.get('price')}</p>
      <p>{query.get('place')}</p>

    </div>
  )
}

export default Detail