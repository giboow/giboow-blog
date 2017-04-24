import React, {Component, PropTypes} from 'react'
import Head from 'next/head'

import moment from 'moment'
import 'moment/min/locales';

import LayoutHeader from './header'
import LayoutFooter from './footer'


export default class Layout extends Component {

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType(
      [
        PropTypes.object,
        PropTypes.array
      ]
    ).isRequired
  }

  componentWillMount() {
    //init locale
    moment.locale('fr-fr')
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
          <title>GiBoOw Blog{ title  && ` : ${title}`}</title>
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
