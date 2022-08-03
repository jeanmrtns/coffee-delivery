import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
`

export const Title = styled.h2`
  font-family: 'Baloo 2';
  line-height: 1.3;
  font-size: 2rem;
`

export const CoffeeListItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  row-gap: 3rem;
  column-gap: 6.5rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.mediaScreen}) {
    flex-direction: column;
    align-items: center;
  }
`

export const Card = styled.li`
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.card};
  width: 17rem;
  padding: 0 1.5rem 1.25rem 1.5rem;
`

export const CardImage = styled.img`
  margin-top: -1.25rem;
`

export const CardBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.75rem;

  span {
    background-color: ${({ theme }) => theme['primary-light']};
    color: ${({ theme }) => theme['primary-dark']};
    border-radius: 20px;
    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
    line-height: 1.2;
    font-weight: bold;
  }
`

export const CardTitle = styled.strong`
  margin-top: 1rem;
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  line-height: 1.3;
`

export const CoffeeDescription = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.label};
  text-align: center;
`

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  align-self: flex-start;
  width: 100%;
`

export const Price = styled.strong`
  font-size: 1.5rem;
  font-family: 'Baloo 2';

  span {
    font-weight: 400;
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
  }
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const QuantityCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.75rem 0.5rem;
  background-color: ${({ theme }) => theme.button};
  border-radius: 6px;

  svg {
    color: ${({ theme }) => theme['purple-500']};
    cursor: pointer;
  }
`

export const ShoppingCartIcon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme['purple-700']};
  color: ${({ theme }) => theme.white};
  padding: 0.5rem;
  border-radius: 6px;
`
