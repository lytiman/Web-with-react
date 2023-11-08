import React from 'react'
import './article.css'
const Article = ({imgurl,date,title}) => {
  return (
    <div className='gpt3__blog-conatainer_article'>
    <div className="gpt3__blog-container_article-img">
      <img src={imgurl} alt="blog "/>
    </div>
    <div className='gpt3__blog-container_article-content'>
   <div>
   <p>{date}
   
   </p>
   <h3>{title}</h3>
   </div>
   <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
