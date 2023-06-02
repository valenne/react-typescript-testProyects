import { ReactElement } from 'react'
import { header, img, link } from './Header.css'

export default function Header (): ReactElement {
  return (
    <nav className={header}>
      <img className={img} src='/ys.png' alt='Logo de Hacker News' />
      <a className={link} href='/'>Hacker News</a>
    </nav>
  )
}
