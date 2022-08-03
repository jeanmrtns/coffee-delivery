import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useCart } from '../../../../hooks/useCart'
import {
  BuyContainer,
  Card,
  CardBadge,
  CardTitle,
  CartContainer,
  CoffeeDescription,
  CoffeeListContainer,
  Price,
  QuantityCounter,
  Title,
  ShoppingCartIcon,
  CoffeeListItems,
  CardImage,
} from './styles'

export function CoffeeList() {
  const { items, addToCart, reduceQuantityOfAnItemFromCart } = useCart()

  function handleReduceQuantityInCart(id: string) {
    const item = items.find((i) => i.id === id)

    if (!item || item.quantityInCart <= 0) return

    reduceQuantityOfAnItemFromCart(id)
  }

  return (
    <CoffeeListContainer>
      <Title>Nossos cafés</Title>

      <CoffeeListItems>
        {items.map((coffee) => (
          <Card key={coffee.id}>
            <CardImage src={coffee.photo_url} />
            <CardBadge>
              {coffee.badges.map((badge, index) => (
                <span key={index}>{badge}</span>
              ))}
            </CardBadge>
            <CardTitle>{coffee.title}</CardTitle>
            <CoffeeDescription>{coffee.description}</CoffeeDescription>
            <BuyContainer>
              <Price>
                <span>R$ </span>
                {new Intl.NumberFormat('pt-BR', {
                  minimumFractionDigits: 2,
                }).format(coffee.price)}
              </Price>

              <CartContainer>
                <QuantityCounter>
                  <Minus
                    weight="fill"
                    size={14}
                    onClick={() => handleReduceQuantityInCart(coffee.id)}
                  />
                  <span>{coffee.quantityInCart}</span>
                  <Plus
                    weight="fill"
                    size={14}
                    onClick={() => addToCart(coffee.id)}
                  />
                </QuantityCounter>
                <ShoppingCartIcon to="/checkout">
                  <ShoppingCartSimple weight="fill" size={22} />
                </ShoppingCartIcon>
              </CartContainer>
            </BuyContainer>
          </Card>
        ))}
      </CoffeeListItems>
    </CoffeeListContainer>
  )
}
