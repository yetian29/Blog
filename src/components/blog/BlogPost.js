

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { get_blog} from '../../redux/actions/blog'
import LoadingCard from '../loader/LoadingCard'
import BlogPostCard from './BlogPostCard'
import Layout from '../pages/Layout'
import { useParams } from 'react-router-dom'


function BlogPost({get_blog, post}) {


    const params = useParams();

    const slug = params.slug;

    useEffect(() => {
        get_blog(slug)
    }, [])

  return (
    <Layout>

        { post ? 
         <>
                <div className="relative bg-gray-50 pb-8 px-4 sm:px-6 lg:pb-12 lg:px-8">
                    <div className="absolute inset-0">
                        <div className="bg-white h-1/3 sm:h-2/3" />
                    </div>
                    <div className="relative max-w-7xl mx-auto">
                        
                        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                          {
                           
                            <BlogPostCard post={post}/>
                        
                          }
                        </div>

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
    post: state.Blog.post
})



export default connect(mapStateToProps, {
    get_blog,
   
}) (BlogPost)