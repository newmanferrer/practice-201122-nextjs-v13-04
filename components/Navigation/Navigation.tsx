'use client'

import Link from 'next/link'
import { useShoppingCartContext } from '../../contexts'
import styles from './Navigation.module.css'

interface ILink {
  id: number
  label: string
  route: string
}

const links: ILink[] = [
  {
    id: 1,
    label: 'Home',
    route: '/'
  },
  {
    id: 2,
    label: 'Store',
    route: '/store'
  },
  {
    id: 3,
    label: 'FAQ',
    route: '/faq'
  }
]

export function Navigation() {
  const { toggleCart, getNumberOfProducts } = useShoppingCartContext()

  return (
    <nav className={styles.nav}>
      <ul>
        {links.map(({ id, label, route }) => (
          <li key={id}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>
      <button onClick={toggleCart}>{`Cart (${getNumberOfProducts()})`}</button>
    </nav>
  )
}
