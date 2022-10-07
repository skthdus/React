import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({item, idx}) => {
               //(props.item)
  console.log(item)

  const containerStyle ={
    border : '1px solid gray',
    display : 'flex',
    flexDirection : 'column'
}

  return (
    <div style={containerStyle}>
      <img src={item.photo} width='300px' height='500px'></img>
      <h2>
        <Link to={'/detail' + idx + '?title=' + item.title+'&price=' + item.price+'&place=' + item.place}>
          {item.title}
        </Link>
        </h2>
      <p>{item.price}</p>
      <p>{item.place}</p>
    </div>
  )
}

export default Product