import { createContext, ReactNode, useState } from 'react'
import { coffees } from '../utils/coffees'

type Coffee = {
  id: string
  photo_url: string
  badges: string[]
  title: string
  description: string
  price: number
  quantityInCart: number
}

interface CartContextData {
  items: Coffee[]
  cart: Coffee[]
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  reduceQuantityOfAnItemFromCart: (id: string) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Coffee[]>([])
  const items = coffees

  function addToCart(id: string) {
    console.log('Im here')

    const itemAlreadyInCart = cart.findIndex((cart) => cart.id === id)

    if (itemAlreadyInCart < 0) {
      const newItem = items.find((coffee) => coffee.id === id)

      if (!newItem) throw new Error('Item not found')

      newItem.quantityInCart = 1
      setCart((prevState) => [...prevState, newItem])
    } else {
      updateItemQuantity(id)
    }
  }

  function updateItemQuantity(id: string) {
    const item = cart.find((i) => i.id === id)

    if (!item) throw new Error('Item not found')

    item.quantityInCart++

    const updatedCart = cart.map((i) => (i.id === id ? item : i))

    setCart(updatedCart)
  }

  function reduceQuantityOfAnItemFromCart(id: string) {
    const item = cart.find((i) => i.id === id)

    if (!item) throw new Error('Item not in cart')

    if (item.quantityInCart - 1 <= 0) {
      removeFromCart(id)
      return
    }

    item.quantityInCart--

    const updatedCart = cart.map((i) => (i.id === id ? item : i))
    setCart(updatedCart)
  }

  function removeFromCart(id: string) {
    const updatedCart = cart.filter((coffee) => coffee.id !== id)
    const originalItem = items.find((i) => i.id === id)

    if (!originalItem) throw new Error('Item not found')
    originalItem.quantityInCart = 0

    setCart(updatedCart)
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        removeFromCart,
        items,
        reduceQuantityOfAnItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
