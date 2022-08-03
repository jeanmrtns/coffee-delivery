import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { Link } from 'react-router-dom'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { useCart } from '../../hooks/useCart'
import {
  ActionsContainer,
  Cart,
  HeaderContainer,
  Location,
  QuantityBadge,
} from './styles'

export function Header() {
  const { cart } = useCart()

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={coffeeDeliveryLogo} alt="" />
      </Link>

      <ActionsContainer>
        <Location>
          <MapPin weight="fill" size={22} />
          <span>Poços de Caldas, MG</span>
        </Location>

        <Cart to="/checkout">
          <ShoppingCartSimple weight="fill" size={22} />
        </Cart>
        <QuantityBadge>{cart.length}</QuantityBadge>
      </ActionsContainer>
    </HeaderContainer>
  )
}
