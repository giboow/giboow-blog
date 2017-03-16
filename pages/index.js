import Layout from '../components/layout'

export default () => (
  <Layout title="hello">
    <div className="grid">
      <div className="grid__column grid__column--6 grid__column--#--sm ">...</div>
      <div className="grid__column grid__column--6 grid__column--#--md ">...</div>
      <div className="grid__column grid__column--12 grid__column--#--lg ">...</div>
      <div className="grid__column grid__column--12 grid__column--#--xl ">...</div>
    </div>
  </Layout>
)