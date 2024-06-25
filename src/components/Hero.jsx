import React from 'react'
import ImageWebDesktop from '../assets/images/image-web-3-desktop.jpg'
import ImageWebMobile from "../assets/images/image-web-3-mobile.jpg"
import ImageRetroPc from "../assets/images/image-retro-pcs.jpg"
import ImageTopLaptops from "../assets/images/image-top-laptops.jpg"
import ImageGaming from "../assets/images/image-gaming-growth.jpg"
import { Card } from './Card'

const Hero = () => {
    const contents = [
        {
            icon: ImageRetroPc,
            number: "01",
            title:"Reviving Retro PCs",
            desc: "What happens when old PCs are given modern upgrades"
        },
        {
            icon: ImageTopLaptops,
            number: "02",
            title:"Top 10 Laptops of 2022",
            desc: "Our best picks for various needs and budgets."
        },
        {
            icon: ImageGaming,
            number: "03",
            title:"The Growth of Gaming",
            desc: "How the pandemic has sparked fresh opportunities"
        },
    ]
    return ( 
    <>
    {/* max-w-4xl mx-auto */}
        <div className='hero flex flex-row gap-4 max-sm:flex-col'>
            <div className='left-content max-w-xl'>
                <img src={ImageWebDesktop} alt="desktop hero image" className='max-sm:hidden'/>
                <img src={ImageWebMobile} alt="mobile hero image" className='md:hidden'/>
                <div className="sub-content flex flex-row mt-4 max-sm:flex-col">
                    <h1 className='hero-title w-72 text-5xl font-extrabold text-slate-900'>The Bright Future of Web 3.0?</h1>
                    <div className="flex-1 desc">
                        <p className='text-gray-500 mb-5 text-sm text-left'>
                            We dive into the next evolution of the web
                            that claims to put the power of the platforms
                            back into the hands of the people. But is it really
                            fulfilling its promise?
                        </p>
                        <button 
                            className='bg-red-500 text-slate-900 uppercase py-3 px-8 font-bold hover:bg-slate-950 hover:text-white
                            '>Read More</button>
                    </div>
                </div>
            </div>
            <div className="right-content bg-slate-950 w-80 p-4">
                <h3 className='text-yellow-600 mb-3 text-3xl font-bold'>New</h3>
                
                <div className="articles flex flex-col gap-4">
                    <h3 className='text-white font-bold text-lg hover:text-yellow-600 cursor-pointer'>Hydrogen VS Electric Cars</h3>
                    <p className='text-slate-400 text-sm'>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    <hr />

                    <h3 className='text-white font-bold text-lg hover:text-yellow-600 cursor-pointer'>The Downsides of AI Artistry</h3>
                    <p className='text-slate-400 text-sm'>What are the possible adverse effects of on-demand AI image generation?</p>
                    <hr />

                    <h3 className='text-white font-bold text-lg hover:text-yellow-600 cursor-pointer'>Is VC Funding Drying Up</h3>
                    <p className='text-slate-400 text-sm'>Private funding by VC firms is down 50% YOY. We take a look at what that means</p>
                </div>
            </div>
        </div>
        {/* max-w-4xl mx-auto*/}
        <div className="cards flex flex-row max-sm:flex-col max-sm:gap-4">
        {contents.map(content=>(
            <>
                <Card content={content}/>
            </>
        ))}
        </div>
    </>
  )
}

export default Hero