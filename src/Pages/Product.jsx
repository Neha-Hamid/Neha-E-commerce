import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from '../components/Breadcrums/Breadcrum';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Description from '../components/DescriptionBox/DescriptionBox';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../components/RelatedProduct/RelatedProduct';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id=== Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
   <DescriptionBox/>
<RelatedProduct/>
    </div>
  )
}

export default Product