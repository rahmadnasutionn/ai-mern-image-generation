import React from 'react';

const FormField = ({ labelName, type, name, placeholder, handleChange, isSurpriseMe, handleSurpriseMe, value }) => {
  return (
    <div>
        <div className='flex items-center gap-2 mb-2'>
         <label htmlFor={name} className='block tex-sm font-medium text-gray-900'>
            {labelName}
         </label>
         {isSurpriseMe && (
            <button type='button' onClick={handleSurpriseMe} className='font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black'>
             Surprise Me
            </button>
         )}
        </div>
        <input 
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required
          id={name}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] otline-none block w-full p-3'
        />
    </div>
  )
}

export default FormField;