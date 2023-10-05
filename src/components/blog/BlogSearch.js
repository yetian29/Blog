

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { blog_search, blog_search_page } from '../../redux/actions/blog'
import { useParams } from 'react-router-dom'
import SearchSmallSetPagination  from '../paginations/SearchSmallSetPaginations'
import BlogCard from './BlogCard'
import LoadingCard from '../loader/LoadingCard'
import Layout from '../pages/Layout'
function BlogSearch({blog_search, blog_search_page, posts, count}) {

    const params = useParams()

    const term = params.term

    useEffect(() => {
        blog_search(term)
    }, [])
  return (
    <Layout>
    {  
        posts ? 
         <>
                <div className="relative bg-gray-50 pb-8 px-4 sm:px-6 lg:pb-12 lg:px-8">
                    <div className="absolute inset-0">
                        <div className="bg-white h-1/3 sm:h-2/3" />
                    </div>
                    <div className="relative max-w-7xl mx-auto">
                        
                        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                          {
                            posts.map(post => (
                                <BlogCard post={post}/>
                            ))
                          }
                        </div>
                        <SearchSmallSetPagination blog_search_page={blog_search_page} term={term} count={count} />

                    </div>
                </div>
                </>
        :
        <LoadingCard/>
        }
  
    
    </Layout>
    
  )   
}

const mapStateToProps = state => ({
    posts: state.Blog.posts,
    count: state.Blog.count
})
export default connect(mapStateToProps, {
    blog_search,
    blog_search_page
}) (BlogSearch)