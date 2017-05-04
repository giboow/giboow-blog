import React, {Component} from 'react'
import Layout from '../components/Layout'
import PostList from '../components/PostList'


import ApolloClient, {createNetworkInterface} from 'apollo-client';
import gql from 'graphql-tag';


const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3001/graphql',
  }),
});

const getPost = async(path) => {
    console.log(path)

    const query = gql`
      query getPost {
        posts(path:${path}) {
          path,
          html, 
          meta {
            title,
            date,
            author,
            category,
            path(
          }
        }
      }`
  return await client.query({query})
}

export default class PostsPage extends Component {
  static async getInitialProps({query}) {
    const {path} = query
      console.log(path)
    const post = await getPost(path)

      console.log(post)
    return {post : post.data}
  }


  render() {
    const {post} = this.props

    return (
      <Layout title="toto">
        <div className="container">
          <div>{post}</div>
        </div>
      </Layout>
    )
  }
}