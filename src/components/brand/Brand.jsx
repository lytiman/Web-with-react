import React from 'react'
import './brand.css'
import {Google,Slack,Atlassian,Dropbox, Shopify} from './imports';
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
    <div>
      <img src={Google} alt="google"/>
    </div>
    <div>
      <img src={Slack} alt="Slack"/>
    </div>
    <div>
      <img src={Atlassian} alt="Atlassian"/>
    </div>
    <div>
      <img src={Dropbox} alt="Dropbox"/>
    </div>
    <div>
      <img src={Shopify} alt="Shopify"/>
    </div>

    </div>
  )
}

export default Brand
