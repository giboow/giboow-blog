import React, {Component, PropTypes} from 'react'
import Head from 'next/head'


import LayoutHeader from './header'
import LayoutFooter from './footer'


export default class Layout extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType(
      [
        PropTypes.object,
        PropTypes.array
      ]
    ).isRequired
  }

  render() {
    const links = [
      {name: 'Home', link: '/'},
      {name: 'About', link: '/about'},
      {name: 'Contact', link: '/contact'},
    ]

    const {title, children} = this.props

    return (
      <div>
        <Head>
          <title>{ title }</title>
        </Head>

        <LayoutHeader />
        <main className="mastcontent">
          { children }
        </main>
        <LayoutFooter />

      </div>
    )
  }
}