import deliveryImg from '../../../assets/delivery.svg'

import {
  DeliveryInfo,
  Message,
  SuccessContainer,
  SuccessContent,
  SuccessPageTitle,
} from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <SuccessPageTitle>Uhu! Pedido confirmado</SuccessPageTitle>
      <Message>Agora é só aguardar que logo o café chegará até você</Message>
      <SuccessContent>
        <DeliveryInfo>Info</DeliveryInfo>
        <img src={deliveryImg} alt="" />
      </SuccessContent>
    </SuccessContainer>
  )
}
