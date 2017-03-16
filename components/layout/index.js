import Link from 'next/link'
import Head from 'next/head'

import styles from './index.scss'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
    </Head>
    <header className="masthead bg-color-darker padding-y padding-xxs padding-null">
      <div className="container">
        <div className="grid grid--bottom">
          <div className="grid__column grid__column--12 grid__column--3--md">
          </div>
          <div className="grid__column grid__column--12 grid__column--9--md type-right">
            <ul className="masthead__nav list--inline margin-null">
              <li className="list__item margin-xs margin-x padding-null">
                <Link href='/'><a className="color-light">Home</a></Link>
              </li>
              <li className="list__item margin-xs margin-x padding-null">
                <Link href='/about'><a className="color-light">About</a></Link>
              </li>
              <li className="list__item margin-xs margin-x padding-null">
                <Link href='/contact'><a className="color-light">Contact</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <main className="mastcontent">
    { children }
    </main>

    <footer className="mastfoot">
      I`m here to stay
    </footer>
  </div>
)