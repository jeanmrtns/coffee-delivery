import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ActionsContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  position: relative;
`

export const Location = styled.div`
  line-height: 1.1375;
  background-color: ${({ theme }) => theme['purple-100']};
  color: ${({ theme }) => theme['purple-700']};
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const Cart = styled(Link)`
  padding: 0.5rem;
  border-radius: 6px;
  color: ${({ theme }) => theme['primary-dark']};
  background-color: ${({ theme }) => theme['primary-light']};
`

export const QuantityBadge = styled.span`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme['primary-dark']};
  font-size: 0.75rem;
  border-radius: 50%;
  padding: 2px;
  color: ${({ theme }) => theme.white};
  top: -0.75rem;
  right: -0.5rem;
  font-weight: bold;
`
