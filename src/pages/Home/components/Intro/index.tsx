import { ShoppingCartSimple } from 'phosphor-react'
import coffeeImage from '../../../../assets/coffee.svg'
import {
  CoffeeImage,
  Content,
  IconContainer,
  IntroContainer,
  ItemsContainer,
  Subtitle,
  Title,
  TitleContainer,
} from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <Content>
        <TitleContainer>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
        </TitleContainer>

        <ItemsContainer>
          <ul>
            <li>
              <IconContainer backgroundColor="#C47F17">
                <ShoppingCartSimple weight="fill" size={16} />
              </IconContainer>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <IconContainer backgroundColor="#574F4D">
                <ShoppingCartSimple weight="fill" size={16} />
              </IconContainer>
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li>
              <IconContainer backgroundColor="#DBAC2C">
                <ShoppingCartSimple weight="fill" size={16} />
              </IconContainer>
              <span>Entrega rápida e rastreada</span>
            </li>
            <li>
              <IconContainer backgroundColor="#8047F8">
                <ShoppingCartSimple weight="fill" size={16} />
              </IconContainer>
              <span>O café chega fresquinho até você</span>
            </li>
          </ul>
        </ItemsContainer>
      </Content>

      <CoffeeImage
        src={coffeeImage}
        alt="Um copo de café com a logo da empresa e vários grãos representando a receita natural do café"
      />
    </IntroContainer>
  )
}
