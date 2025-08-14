import React from 'react'
import { Link } from 'react-router-dom';

interface prop {
    id: number,
    img: string,
    title: string,
    price: number
}

const ProductCard = ({img, title, price, id}: prop) => {
    return (
        <Link to={`/product/${id}`} className='flex flex-col cursor-pointer'>
            <img src={img} className='w-[260px] h-[300px] ssm:w-[300px] object-cover object-center'/>
            <p className='capitalize py-1'>{title}</p>
            <h3 className='font-bold'>${price}</h3>
        </Link>
    )
}

export default ProductCard;