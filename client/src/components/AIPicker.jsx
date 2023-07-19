import React from 'react'
import CustomButton from './CustomButton'

const AIPicker = ({ prompt,setPrompt,generatingImg,handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea className='aipicker-textarea' placeholder='AI Texture Generation' rows={5} value={prompt} onChange={(e)=>setPrompt(e.target.value)}/>
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (<CustomButton type="outline" title="Asking AI..." customStyles="text-xs"/>) : (<><CustomButton type="outline" title="AI Logo" handleClick={()=>handleSubmit('logo')} customStyles="text-xs"/> <CustomButton type="filled" title="AI Full" handleClick={()=>handleSubmit('full')} customStyles="text-xs"/></>)}
      </div>
    </div>
  )
}

export default AIPicker

//In CSS, the text-xs class is typically used to define the font size of an element as extra small (xs). It is part of a set of utility classes provided by many CSS frameworks, including Tailwind CSS.