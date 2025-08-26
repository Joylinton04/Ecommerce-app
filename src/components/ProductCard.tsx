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
        <Link to={`/product/${id}`} className='flex flex-col cursor-pointer ssm:p-2 ssm:bg-white w-[250px] ssm:w-[160px]'>
            <img src={img} className=' w-full ssm:h-[240px] h-[300px] object-cover object-center'/>
            <p className='capitalize py-1 ssm:text-sm'>{title}</p>
            <h3 className='font-bold ssm:text-sm'>${price}</h3>
        </Link>
    )
}

export default ProductCard;