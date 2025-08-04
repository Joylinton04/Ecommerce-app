import React from 'react'

interface prop {
    img: string,
    text: string,
    price: number
}

const ProductCard = ({img, text, price}: prop) => {
    return (
        <div className='flex flex-col'>
            <img src={img} className='w-[260px] h-[300px] object-cover object-center' />
            <p className='capitalize py-1'>{text}</p>
            <h3 className='font-bold'>${price}</h3>
        </div>
    )
}

export default ProductCard;