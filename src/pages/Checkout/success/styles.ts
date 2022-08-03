import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 5rem;
`

export const SuccessContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8.4rem;
  margin-top: 2.5rem;
`

export const SuccessPageTitle = styled.h2`
  color: ${({ theme }) => theme['primary-dark']};
  font-size: 2rem;
  font-family: 'Baloo 2';
  line-height: 1.3;
`

export const Message = styled.p`
  color: ${({ theme }) => theme.subtitle};
  font-size: 1.25rem;
  line-height: 1.3;
`

export const DeliveryInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  border: 4px solid transparent;
  padding: 2.5rem;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 36px;
  background: linear-gradient(
        ${({ theme }) => theme.background},
        ${({ theme }) => theme.background}
      )
      padding-box,
    linear-gradient(to right, rgb(219, 172, 44), rgb(128, 71, 248)) border-box;
  border: 1px solid transparent;
`
