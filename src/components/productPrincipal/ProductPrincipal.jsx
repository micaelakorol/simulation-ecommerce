import React from 'react'
import style from '../../styles/productPrincipal.module.sass'
import CarruselImages from './CarruselImages'
import DescriptionProduct from './DescriptionProduct'

const ProductPrincipal = () => {
  return (
    <main className={style.productPrincipal}>
<CarruselImages />
<DescriptionProduct />
    </main>
  )
}

export default ProductPrincipal