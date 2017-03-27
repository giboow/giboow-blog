import React, {Component, PropTypes} from 'react'
import {Row, Col} from 'react-materialize'
import PostCard from '../PostCard'

export default class PostList extends Component {

  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired
  }


  render() {
    const {posts} = this.props


    return (
      <div>
        <Row>
          {posts.map((post, index) => (
            <Col l={6} m={6} s={12} key={index}>
              <PostCard post={post}/>
            </Col>
          ))}

        </Row>
      </div>
    )
  }
}