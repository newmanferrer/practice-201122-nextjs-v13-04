import { IProduct } from '../../models'

const BASE_URL = 'http://localhost:3000/api/products'

//* *************************************************************************************
//* 1.- All Products
//* *************************************************************************************
//* -------------------------------------------------------------------------------------
//* 1.1.- Generate static HTML
//* -------------------------------------------------------------------------------------
//* Default: It is equivalent to the old "getStaticProps()" in Nextjs 12
//* Note: It is not necessary to put the parameter: "{ cache: 'force-cache' }"
//* -------------------------------------------------------------------------------------
export const getProductsStatic = async (): Promise<IProduct[]> => {
  return await fetch(BASE_URL, { cache: 'force-cache' }).then(response => response.json())
}
//* -------------------------------------------------------------------------------------

//* -------------------------------------------------------------------------------------
//* 1.2.- Generate Dynamic HTML if receive a request
//* -------------------------------------------------------------------------------------
//* It is equivalent to the old "getServerSideProps()" in Nextjs 12
//* -------------------------------------------------------------------------------------
export const getProductsStaticDynamic = async (): Promise<IProduct[]> => {
  return await fetch(BASE_URL, { cache: 'no-store' }).then(response => response.json())
}
//* -------------------------------------------------------------------------------------

//* -------------------------------------------------------------------------------------
//* 1.3.- Generate Increment HTML - Revalidate Data if receive a request
//* -------------------------------------------------------------------------------------
//* It is equivalent to the old (ISR) "Incremental Static Regeneration" in Nextjs 12
//* Note: revalidate in seconds
//* -------------------------------------------------------------------------------------
export const getProductsIncrement = async (): Promise<IProduct[]> => {
  return await fetch(BASE_URL, { next: { revalidate: 60 } }).then(response => response.json())
}
//* -------------------------------------------------------------------------------------
//* *************************************************************************************

//* *************************************************************************************
//* 2.- Products Latest
//* *************************************************************************************
export const getProductsLatest = async (): Promise<IProduct[]> => {
  const products = await getProductsIncrement()
  return products.slice(0, 3)
}
//* *************************************************************************************
