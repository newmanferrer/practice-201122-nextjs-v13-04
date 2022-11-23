import { IProduct } from '../../models'

export const convertProductNameToPath = (productName: string) => {
  return productName.toLowerCase().replace(/\s/g, '-')
}

export const createFriendlyUrl = (product: IProduct) => {
  return product.name.toLocaleLowerCase().replace(/\s/g, '-').concat(`-${product.id}`)
}
