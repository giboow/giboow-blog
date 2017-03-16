import React, {Component, PropTypes} from 'react'
import Link from 'next/link'
import Head from 'next/head'

import styles from './index.scss'

export default class Layout extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children : PropTypes.element.isRequired
  }

  render() {
    const links = [
      {name : 'Home', link: '/'},
      {name : 'About', link: '/about'},
      {name : 'Contact', link: '/contact'},
    ]

    const {title, children} = this.props

    return (
      <div>
        <Head>
          <title>{ title }</title>
        </Head>
        <header className="masthead bg-color-primary padding-y padding-xxs padding-null">
          <div className="container">
            <div className="grid grid--bottom">
              <div className="grid__column grid__column--12 grid__column--3--md">
              </div>
              <div className="grid__column grid__column--12 grid__column--9--md type-right">
                <ul className="masthead__nav list--inline margin-null">
                  {
                    links.map((item, index) => (
                      <li key={index} className="list__item margin-xs margin-x padding-null type-bold">
                        <Link href={item.link}><a className="color-light">{item.name}</a></Link>
                      </li>
                    ))
                  }
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
  }
}
