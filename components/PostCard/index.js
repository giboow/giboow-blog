/**
 * Created by philippe on 21/03/2017.
 */
import {Card, CardTitle, Row, Col, Chip} from 'react-materialize'
import moment from 'moment'
import striptags from 'striptags'
import {XmlEntities as entities} from 'html-entities'
import truncate from 'truncate'

export default ({post}) => {

  const {html, meta} = post
  const {tags, title} = meta

  return (
    <div className="card medium hoverable">
      <div className="card-image">
        <img src="http://lorempixel.com/150/250/nature/6"/>
        <span className="card-title">
          {title}
        </span>
        <a className="btn-floating halfway-fab waves-effect waves-light red">
          <i className="material-icons">add</i>
        </a>
      </div>
      <div className="card-content">
        <p className="grey-text">
          {moment(post.meta.date).fromNow()}
        </p>
        <div>
          {tags && tags.map(item => (
            <Chip>{item}</Chip>
          ))}
        </div>
        <div
          dangerouslySetInnerHTML={{__html: truncate(striptags(entities.decode(html)), 80)}}></div>
      </div>
    </div>
  )
}
