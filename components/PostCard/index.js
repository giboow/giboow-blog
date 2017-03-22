/**
 * Created by philippe on 21/03/2017.
 */
import {Card, CardTitle, Row, Col, Chip} from 'react-materialize'
import moment from 'moment'
export default ({post}) => {

  console.log(post);
  return (
  <article>
    <Card header={
      <CardTitle
        reveal
        image={"https://s-media-cache-ak0.pinimg.com/originals/06/99/92/069992aeb15fcbc0a4d5012fd42662b4.jpg"}
        waves='light'/>
    }
          title={post.meta.title}
          actions={[<a href="#">Read</a>]}
          reveal={<p>Here is some more information about this product that is
            only revealed once clicked on.</p>}
    >
      <div>
        {moment(post.meta.date).fromNow()}
      </div>
      <Row>
        <Col s={12}>
          <Chip>Hello</Chip>

          <Chip>Toto</Chip>
        </Col>
      </Row>
    </Card>
  </article>
)}
