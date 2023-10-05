import React from 'react'
import { Link } from 'react-router-dom'


function BlogCard({post}) {


  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div className="flex-shrink-0">
        {
            post.image ?
            <img className="h-48 w-full object-cover" src={`${process.env.REACT_APP_API_URL}${post.image}`} alt="" />
            : <video
                src={`${process.env.REACT_APP_API_URL}${post.video}`}
                type="video/mp4"
                controls
                className="clip w-full">

            </video>


        }
    </div>
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
    <div className="flex-1">
        <p className="text-sm font-medium text-indigo-600">
        <Link to={`/blog/category/${post.category.id}`} className="hover:underline">
            {post.category.name}
        </Link>
        </p>
        <Link to={`/blog/${post.slug}`} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{post.title}</p>

            <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
        </Link>
    </div>
    </div>
     
</div>
  )
}

export default BlogCard