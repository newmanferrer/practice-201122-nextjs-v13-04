//* ///////////////////////////////////////////////////////////////////////////
//* Shopping Cart Context
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
'use client'

import { createContext, ReactNode, useState, useContext } from 'react'
import { IProduct, ICartProduct } from '../../models'
//* ===========================================================================

//* ===========================================================================
//* 2.- Models / Interfaces
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 2.1.- IShoppingCartContextValues
//* ---------------------------------------------------------------------------
interface IShoppingCartContextValues {
  isOpen: boolean
  cart: ICartProduct[]
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
  addProductToCart: (product: IProduct) => void
  removeProductToCart: (productId: number) => void
  quantityAddOne: (productId: number) => void
  quantityRemoveOne: (productId: number) => void
  getNumberOfProducts: () => void
}
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 2.2.- IShoppingCartProviderProps
//* ---------------------------------------------------------------------------
interface IShoppingCartProviderProps {
  children: ReactNode
}
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 3.- Create the context
//* ===========================================================================
const ShoppingCartContext = createContext<IShoppingCartContextValues | undefined>(undefined)
//* ===========================================================================

//* ===========================================================================
//* 4.- Create the Provider
//* ===========================================================================
const ShoppingCartProvider = ({ children }: IShoppingCartProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [cart, setCart] = useState<ICartProduct[] | []>([])

  const toggleCart = () => setIsOpen(!isOpen)

  const openCart = () => setIsOpen(isOpen => (isOpen = true))

  const closeCart = () => setIsOpen(isOpen => (isOpen = false))

  const addProductToCart = (product: IProduct) => {
    const tempCart = [...cart]
    const found = tempCart.find(productInCart => productInCart.id === product.id)

    if (found && found.quantity) {
      found.quantity++
    } else {
      const productToCart = { ...product, quantity: 1 }
      tempCart.push(productToCart)
    }

    setCart([...tempCart])
  }

  const removeProductToCart = (productId: number) => {
    const productToRemove = cart.find(product => product.id === productId)
    let newCart = []

    if (productToRemove) {
      newCart = cart.filter(product => product.id !== productId)
      setCart(newCart)
    } else {
      throw new Error(`product id "${productId}", not found!`)
    }
  }

  const quantityAddOne = (productId: number) => {
    const productToAdd = cart.find(product => product.id === productId)
    let newCart = []

    if (productToAdd) {
      newCart = cart.map(product =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
      setCart(newCart)
    } else {
      throw new Error(`product id "${productId}", not found!`)
    }
  }

  const quantityRemoveOne = (productId: number) => {
    const productToRemove = cart.find(product => product.id === productId)
    let newCart = []

    if (productToRemove) {
      if (productToRemove.quantity > 1) {
        newCart = cart.map(product =>
          product.id === productToRemove.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      } else {
        newCart = cart.filter(product => product.id !== productId)
      }

      setCart(newCart)
    } else {
      throw new Error(`product id "${productId}", not found!`)
    }
  }

  const getNumberOfProducts = () => {
    const total = cart.reduce((acc: number, product: ICartProduct) => acc + product.quantity, 0)
    return total
  }

  const data: IShoppingCartContextValues = {
    isOpen,
    cart,
    toggleCart,
    openCart,
    closeCart,
    addProductToCart,
    removeProductToCart,
    quantityAddOne,
    quantityRemoveOne,
    getNumberOfProducts
  }

  return <ShoppingCartContext.Provider value={data}>{children}</ShoppingCartContext.Provider>
}
//* ===========================================================================

//* ===========================================================================
//* 5.- Create useShoppingCartContext
//* ===========================================================================
const useShoppingCartContext = () => {
  const context = useContext(ShoppingCartContext)

  if (context === undefined) {
    throw Error('Error: useShoppingCartContext, must be used within a ShoppingCartProvider')
  }

  return context
}
//* ===========================================================================

//* ===========================================================================
//* 6.- Export
//* ===========================================================================
export { ShoppingCartProvider, useShoppingCartContext }
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
