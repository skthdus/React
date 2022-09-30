import React from 'react'
import PhotoCard from './Ex05Com/PhotoCard'

const Ex05 = () => {

    // 조건1) Ex05Com 폴더 =>  PhotoCard.js 컴포넌트 사용
    // 조건2) member라는 배열 안에 name과 url 주소가 포함된 객체들을 생성할 것
    // 조건3) 만약 배열에 값을 추가하면 바로 새로운 카드들이 생기게 할 것
    // *** 다하면 디자인을 진행~

    let member = [{
        name : '차',
        url : <img src='http://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/06/23/a69b4e70-4fa2-404c-993f-d06dafce9c3b.jpg' width={300}></img>
        
    },{
        name : '은',
        url : <img src='https://img.wowtv.co.kr/wowtv_news/dnrs/20220330/B20220330181301797.jpg' width={300}></img>
    },{
        name : '우',
        url : <img src='https://biz.chosun.com/resizer/qR-G_CcaWLkzv53XYaR8IFu3_po=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/3QH4DEZFCNIPXVWETUCMA3PLFA.jpg' width={300}></img>
    }]

    let memberSel = member.map(item=>(<PhotoCard key={item.name} item={item}></PhotoCard>));

    let container ={
        display : 'flex',
        flexDirection : 'low'
    }
  return (
    <div style={container}>
        {memberSel}
    </div>
  )
}

export default Ex05