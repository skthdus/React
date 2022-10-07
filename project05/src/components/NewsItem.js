import React, { useEffect } from 'react'

const NewsItem = ({news}) => {
    console.log(news)
    
    useEffect(()=>{
        
    },[])
    
return (
    <div>
        <img src={news.urlToImage} width='200px'></img>
        <a href={news.url}><h2>{news.title}</h2></a>
        <p>{news.description}</p>
    </div>
  )
}

export default NewsItem