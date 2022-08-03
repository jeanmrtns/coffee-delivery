import styled, { css } from 'styled-components'

export const EmptyCart = styled.h2`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  font-size: 1.5rem;
`

export const CheckoutContainer = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 2rem;
  padding: 6.6875rem 0;
`

export const CheckoutInfo = styled.div``

export const Items = styled.div``

export const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.subtitle};
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  line-height: 1.3;
`

const BaseContent = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 1rem;
`

export const CheckoutInfoContent = styled(BaseContent)``

export const PaymentType = styled(BaseContent)``

export const ItemsContent = styled(BaseContent)`
  width: 100%;
  flex: 1;
  padding: 2.5rem;

  border-bottom-left-radius: 44px;
  border-top-right-radius: 44px;
`

export const CheckoutForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`

export const CheckoutFormTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: ${({ theme }) => theme.subtitle};

  svg {
    color: ${({ theme }) => theme['primary-dark']};
  }
`

export const CheckoutFormSubtitle = styled.p`
  margin-top: 2px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text};
`

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.button};
  background-color: ${({ theme }) => theme.input};
  padding: 0.75rem;
  border-radius: 4px;
  width: 100%;

  &:focus,
  &:hover {
    outline: 1px solid ${({ theme }) => theme['primary-dark']};
  }
`

export const Error = styled.small`
  color: ${({ theme }) => theme.primary};
`

export const ComplementInput = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.input};
  border: 1px solid ${({ theme }) => theme.button};
  padding: 0 1rem 0 0;

  input {
    border: 0;
    border-right: none;
    background-color: ${({ theme }) => theme.input};
    padding: 0.75rem;
    border-radius: 4px;
    width: 100%;

    &:focus,
    &:hover {
      outline: 1px solid ${({ theme }) => theme['primary-dark']};
    }
  }

  small {
    margin-left: 1rem;
    font-size: 0.75rem;
    font-style: italic;
    color: ${({ theme }) => theme.label};
  }
`

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 0.75rem;
`

export const InputGroupThree = styled(InputGroup)`
  grid-template-columns: 200px 1fr 60px;
`

export const PaymentTypeTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: ${({ theme }) => theme.subtitle};

  svg {
    color: ${({ theme }) => theme['purple-700']};
  }
`

export const PaymentTypeSubtitle = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text};
  margin-top: 2px;
`

export const PaymentTypeButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface PaymentTypeButtonProps {
  isActive: boolean
}

export const PaymentTypeButton = styled.button<PaymentTypeButtonProps>`
  background-color: ${({ theme }) => theme.button};
  border-radius: 6px;
  border: 0;
  display: flex;
  align-items: center;
  gap: 0.8125rem;
  padding: 1rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.text};
  width: 11.125rem;
  transition: background-color 0.2s;

  svg {
    color: ${({ theme }) => theme['purple-500']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }

  ${({ isActive, theme }) =>
    isActive &&
    css`
      background: ${theme['purple-100']};
      border: 1px solid ${theme['purple-500']};

      &:hover {
        background: ${theme['purple-100']};
      }
    `}
`

export const FinishButton = styled.button`
  color: ${({ theme }) => theme.white};
  margin-top: 1.5rem;
  font-size: 0.875rem;
  border: 0;
  width: 100%;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.primary};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['primary-dark']};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      background-color: ${({ theme }) => theme.primary};
    }
  }
`

export const TotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-top: 1.5rem;

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.total {
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
`

export const TotalItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.button};
  }

  &:not(:first-of-type) {
    margin-top: 1.5rem;
  }
`

export const TotalItemContent = styled.div`
  display: flex;
  padding: 0.25rem;
  gap: 1.25rem;
`

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemName = styled.p``

export const RemoveItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.button};
  padding: 0.5rem;
  font-size: 0.75rem;
`

export const ChangeItemQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.button};
  padding: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.title};
`

export const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  text-transform: uppercase;

  svg {
    color: ${({ theme }) => theme['purple-500']};
    cursor: pointer;
  }
`

export const ItemPrice = styled.strong``

export const ItemPhoto = styled.img`
  width: 4rem;
  height: 4rem;
`
