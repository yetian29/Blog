

import Layout from './Layout'
import BlogList from '../blog/BlogList'
import Header from '../headers/Header'
import BlogCategories from '../category/BlogCategories'

function Home() {
  return (
    <Layout>
       <Header/>
       <BlogCategories/> 
       <BlogList/>
        
    </Layout>
  )
}

export default Home