import americanCoffee from '../assets/american.svg'
import arabeCoffe from '../assets/arabe.svg'
import capuccinoCoffee from '../assets/capuccino.svg'
import creamExpressCoffee from '../assets/cream-express.svg'
import cubanCoffee from '../assets/cuban.svg'
import expressCoffee from '../assets/express.svg'
import havaiCoffee from '../assets/havai.svg'
import hotChocolateCoffee from '../assets/hot-chocolate.svg'
import iceCoffee from '../assets/ice.svg'
import irlishCoffee from '../assets/irlish.svg'
import latteCoffee from '../assets/latte.svg'
import macchiatoCoffee from '../assets/macchiato.svg'
import mochaccinoCoffee from '../assets/mochaccino.svg'
import withMilkCoffee from '../assets/with-milk.svg'

type Badge = 'Tradicional' | 'Gelado' | 'Com leite' | 'Especial' | 'Alcoólico'

interface Coffee {
  id: string
  photo_url: string
  badges: Badge[]
  title: string
  description: string
  price: number
  quantityInCart: number
}

export const coffees: Coffee[] = [
  {
    id: '11314',
    photo_url: expressCoffee,
    badges: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantityInCart: 0,
  },
  {
    id: '145745',
    photo_url: americanCoffee,
    badges: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantityInCart: 0,
  },
  {
    id: '1fdgfdsas',
    photo_url: creamExpressCoffee,
    badges: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantityInCart: 0,
  },
  {
    id: '1sdfv',
    photo_url: iceCoffee,
    badges: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantityInCart: 0,
  },
  {
    id: 'bndn',
    photo_url: withMilkCoffee,
    badges: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantityInCart: 0,
  },
  {
    id: 'dshjuj',
    photo_url: latteCoffee,
    badges: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantityInCart: 0,
  },
  {
    id: 'sdfwseeeee',
    photo_url: capuccinoCoffee,
    badges: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantityInCart: 0,
  },
  {
    id: '1zzfb',
    photo_url: expressCoffee,
    badges: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantityInCart: 0,
  },
  {
    id: 'df6thjj',
    photo_url: macchiatoCoffee,
    badges: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantityInCart: 0,
  },
  {
    id: 'ukdfgb',
    photo_url: mochaccinoCoffee,
    badges: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantityInCart: 0,
  },
  {
    id: 'zcxbxcb',
    photo_url: hotChocolateCoffee,
    badges: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantityInCart: 0,
  },
  {
    id: 'dfdsafserty',
    photo_url: cubanCoffee,
    badges: ['Especial', 'Alcoólico', 'Gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    quantityInCart: 0,
  },
  {
    id: 'dfdgbhc',
    photo_url: havaiCoffee,
    badges: ['Especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    quantityInCart: 0,
  },
  {
    id: 'sfddtyh',
    photo_url: arabeCoffe,
    badges: ['Especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    quantityInCart: 0,
  },
  {
    id: 'sdaujgjfg',
    photo_url: irlishCoffee,
    badges: ['Especial', 'Alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    quantityInCart: 0,
  },
]
