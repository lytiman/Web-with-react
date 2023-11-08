import React from 'react'
import './blog.css'
import Articles from '../../components/article/Article';
import {Blog01,Blog02,Blog03,Blog04,Blog05} from './imports'
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A Lot is happeni ng we are blogging about it
        </h1>
        </div>

        <div className='gpt3__blog-container'>
          
          <div className="gpt3__blog-container_groupA">
            <Articles imgurl={Blog01} date="Sep 26,2021" title="GPT-3 and Open Ai is the futer.let us explore how it is"/>
          </div>

          <div className="gpt3__blog-container_groupB">
          <Articles imgurl={Blog02} date="Sep 26,2021" title="GPT-3 and Open Ai is the futer.let us explore how it is"/>
          <Articles imgurl={Blog03} date="Sep 26,2021" title="GPT-3 and Open Ai is the futer.let us explore how it is"/>
          <Articles imgurl={Blog04} date="Sep 26,2021" title="GPT-3 and Open Ai is the futer.let us explore how it is"/>
          <Articles imgurl={Blog05} date="Sep 26,2021" title="GPT-3 and Open Ai is the futer.let us explore how it is"/>
          </div>
        </div>
    </div>
  )
}

export default Blog
