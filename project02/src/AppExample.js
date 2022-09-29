import React from 'react'
import Member from './Components/Member'

const AppExample = () => {

    // 팀원을 소개하는 페이지를 만들어 보자!
    // 단, component 와 props를 이용해서 만들 것

    // 조건
    // 1) Member.js 라는 컴포넌트를 이용할 것
    // 2) 스타일은 객체 형태로 삽입할 것


      //let team='르세라핌'

  return (
    <div>
        {/* > <Member/> */}
        <Member leader={leader} team="team" name="나소연"></Member>   
        {/* <Member teamName={team} memberName=''/> */}
        <Member team="team" name="임다인"></Member>
        <Member team="team" name="유성용"></Member>
        <Member team="team" name="박민욱"></Member>
      
    </div>
  )
}

export default AppExample