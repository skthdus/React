import React from 'react'

const PhotoCard = (props) => {
    console.log('넘어온 값', props)

    let boxStyle ={
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContents : 'center',
        border : '1px solid black'

    }
  return (
    <div style={boxStyle}>

        <h2>{props.item.name}</h2>
        {props.item.url}
    </div>
    
  )
}

export default PhotoCard
