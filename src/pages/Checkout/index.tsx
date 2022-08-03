import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  CreditCard,
  CurrencyDollar,
  MapPin,
  Minus,
  Plus,
  Trash,
} from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import {
  CheckoutContainer,
  CheckoutForm,
  CheckoutFormSubtitle,
  CheckoutFormTitle,
  CheckoutInfo,
  CheckoutInfoContent,
  ComplementInput,
  Input,
  InputGroup,
  InputGroupThree,
  Items,
  ItemsContent,
  PaymentType,
  PaymentTypeSubtitle,
  PaymentTypeTitle,
  SectionTitle,
  PaymentTypeButtonContainer,
  PaymentTypeButton,
  FinishButton,
  TotalInfo,
  TotalItem,
  ItemDescription,
  ItemName,
  RemoveItemContainer,
  ChangeItemQuantityContainer,
  ItemActions,
  ItemPrice,
  ItemPhoto,
  TotalItemContent,
  EmptyCart,
  Error,
} from './styles'

type PaymentMethods = 'credit' | 'debit' | 'money' | null

interface SubmitData {
  cep: string
  street: string
  houseNumber: string
  complement: string
  district: string
  city: string
  uf: string
}

const schema = yup
  .object({
    cep: yup.string().min(9, 'Invalid CEP').required(),
    street: yup.string().required(),
    houseNumber: yup.string().required(),
    complement: yup.string(),
    district: yup.string().required(),
    city: yup.string().required(),
    uf: yup.string().required(),
  })
  .required()

export function Checkout() {
  const [activePaymentMethod, setActivePaymentMethod] =
    useState<PaymentMethods>(null)
  const { cart, removeFromCart, reduceQuantityOfAnItemFromCart, addToCart } =
    useCart()

  const deliveryValue = 3.5

  const totalInCart = cart.reduce((acc, item) => {
    return (acc += item.quantityInCart * item.price)
  }, 0)

  const total = totalInCart + deliveryValue

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitData>({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: SubmitData) => console.log(data)

  function handleReduceQuantityInCart(id: string) {
    const item = cart.find((i) => i.id === id)

    if (!item || item.quantityInCart <= 0) return

    reduceQuantityOfAnItemFromCart(id)
  }

  function handleActivePaymentMethod(method: PaymentMethods) {
    setActivePaymentMethod(method)
  }

  if (cart.length <= 0) {
    return <EmptyCart>Não há items no carrinho!</EmptyCart>
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
      <CheckoutInfo>
        <SectionTitle>Complete seu pedido</SectionTitle>

        <CheckoutInfoContent>
          <CheckoutFormTitle>
            <MapPin size={22} />
            <div>
              <p>Endereço de Entrega</p>
              <CheckoutFormSubtitle>
                Informe o endereço onde deseja receber seu pedido
              </CheckoutFormSubtitle>
            </div>
          </CheckoutFormTitle>

          <CheckoutForm>
            <Input placeholder="CEP" {...register('cep')} />
            {errors.cep && <Error>{errors.cep?.message}</Error>}
            <Input placeholder="Rua" {...register('street')} />
            {errors.street && <Error>{errors.street?.message}</Error>}
            <InputGroup>
              <Input placeholder="Número" {...register('houseNumber')} />
              {errors.houseNumber && (
                <Error>{errors.houseNumber?.message}</Error>
              )}
              <ComplementInput htmlFor="complement">
                <input
                  placeholder="Complemento"
                  id="complement"
                  {...register('complement')}
                />
                <small>Opcional</small>
              </ComplementInput>
              {errors.complement && <Error>{errors.complement?.message}</Error>}
            </InputGroup>
            <InputGroupThree>
              <Input placeholder="Bairro" {...register('district')} />
              {errors.district && <Error>{errors.district?.message}</Error>}
              <Input placeholder="Cidade" {...register('city')} />
              {errors.city && <Error>{errors.city?.message}</Error>}
              <Input placeholder="UF" {...register('uf')} />
              {errors.uf && <Error>{errors.uf?.message}</Error>}
            </InputGroupThree>
          </CheckoutForm>
        </CheckoutInfoContent>

        <PaymentType>
          <PaymentTypeTitle>
            <CurrencyDollar size={22} />
            <div>
              <p>Pagamento</p>
              <PaymentTypeSubtitle>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </PaymentTypeSubtitle>
            </div>
          </PaymentTypeTitle>

          <PaymentTypeButtonContainer>
            <PaymentTypeButton
              isActive={activePaymentMethod === 'credit'}
              type="button"
              onClick={() => handleActivePaymentMethod('credit')}
            >
              <CreditCard />
              Cartão de Crédito
            </PaymentTypeButton>
            <PaymentTypeButton
              isActive={activePaymentMethod === 'debit'}
              type="button"
              onClick={() => handleActivePaymentMethod('debit')}
            >
              <CreditCard />
              Cartão de Débito
            </PaymentTypeButton>
            <PaymentTypeButton
              isActive={activePaymentMethod === 'money'}
              type="button"
              onClick={() => handleActivePaymentMethod('money')}
            >
              <CreditCard />
              Dinheiro
            </PaymentTypeButton>
          </PaymentTypeButtonContainer>
        </PaymentType>
      </CheckoutInfo>

      <Items>
        <SectionTitle>Cafés selecionados</SectionTitle>

        <ItemsContent>
          {cart.map((item) => (
            <TotalItem key={item.id}>
              <TotalItemContent>
                <ItemPhoto src={item.photo_url} alt="" />
                <ItemDescription>
                  <ItemName>Expresso Tradicional</ItemName>
                  <ItemActions>
                    <ChangeItemQuantityContainer>
                      <Minus
                        size={14}
                        onClick={() => handleReduceQuantityInCart(item.id)}
                      />{' '}
                      {item.quantityInCart}
                      <Plus size={14} onClick={() => addToCart(item.id)} />
                    </ChangeItemQuantityContainer>
                    <RemoveItemContainer
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash size={16} /> Remover
                    </RemoveItemContainer>
                  </ItemActions>
                </ItemDescription>
                <ItemPrice>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(item.price * item.quantityInCart)}
                </ItemPrice>
              </TotalItemContent>
            </TotalItem>
          ))}

          <TotalInfo>
            <p>
              Total de itens
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(totalInCart)}
              </span>
            </p>
            <p>
              Entrega
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(deliveryValue)}
              </span>
            </p>
            <p className="total">
              Total{' '}
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(total)}
              </span>
            </p>
          </TotalInfo>
          <FinishButton disabled={!activePaymentMethod}>
            Confirmar Pedido
          </FinishButton>
        </ItemsContent>
      </Items>
    </CheckoutContainer>
  )
}
