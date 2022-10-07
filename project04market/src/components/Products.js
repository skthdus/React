import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


// 데이터가 들어있는 json 파일 
import sell from '../json/sell.json'
import Product from './Product'

const Products = () => {

  console.log(sell.list)
  

    let list = sell.list.map((item,idx)=>(<Product key={idx+item.title} item={item} idx={idx} />))
  // <Product key={item+idx} item={item} idx={idx}></Product>
  
  let container ={
    display : 'flex',
    flexDirection : 'low'

    // flex-wrap : wrap;
    // => 크기가 넘어가는 데이터들은 다음 줄로 넘겨줌
}

  return (
    <div style={container} flex-wrap='wrap'>
      {list}   
    </div>
  )
}

export default Products