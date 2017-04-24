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

const getAllPosts = async() => {
  const query = gql`
      query allPosts {
        posts {
          html, 
          meta {
            title,
            date,
            author,
            category
          }
        }
      }`
  return await client.query({query})
}

export default class IndexPage extends Component {
  static async getInitialProps(props) {
    const posts = await getAllPosts()

    return {posts : posts.data.posts}
  }


  render() {
    const {posts} = this.props

    return (
      <Layout title="toto">
        <div className="container">
          <PostList posts={posts} />
        </div>
      </Layout>
    )
  }
}