// ./pages/_document.js
import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'

import stylesheet from 'styles/index.scss'


export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const {html, head} = renderPage()
    const styles = flush()
    return {html, head, styles}
  }

  render() {
    return (
      <html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />

        <link rel="stylesheet" href="http://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" />
        <style dangerouslySetInnerHTML={{__html: stylesheet}}/>

        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
      </Head>
      <body>
      {this.props.customValue}
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}