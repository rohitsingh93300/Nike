import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (
        <div className="group relative">
            <Link to={`/products/${product?.id}`} >
                <div onClick={window.scrollTo(0,0)} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 h-96">
                    <img onClick={window.scrollTo(0,0)}
                        alt={product?.name}
                        src={product?.image}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />

                </div>
            </Link>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link to={`/products/${product?.id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product?.name}
                        </Link>
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <p className="text-sm font-medium text-gray-900">${product?.new_price}</p>
            </div>
        </div>
    )
}

export default Item