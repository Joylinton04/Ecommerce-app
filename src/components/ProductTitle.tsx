import React from 'react'

interface prop {
    title: string,
    text: string
}

const ProductTitle = ({ title, text }: prop) => {
    return (
        <div className='flex flex-col'>
            <div className='flex items-center gap-4'>
                <h1 className='font-heading font-bold text-2xl ssm:text-lg ssm:pb-2'>{title}</h1>
                <span className='block h-1 w-20 bg-black'></span>
            </div>
            <p className='font-body text-sm text-gray-600 ssm:text-center'>{text}</p>
        </div>
    )
}

export default ProductTitle;