import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from './Breadcrum';
import ProductDisplay from './ProductDisplay';
import DescriptionBox from './DescriptionBox';
 import all_product from '../Utils/all_product';
// import new_collections from '../utils/NewCollection';
// import Item from './Item';

const SingleProduct = () => {
//    const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='max-w-7xl mx-auto mb-32 mt-14'>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
    </div>
  )
}

export default SingleProduct