import React from 'react'
import Header from './Header'
import Hero from './Hero'

const NewsPage = () => {
  return (
    <div className='news-page max-w-4xl mt-8 flex flex-col gap-4'>
        <Header />
        <Hero />
    </div>
  )
}

export default NewsPage