import React from 'react'
import { deleteData } from '@/server/actions'
import Link from 'next/link'

type BlogCardProps = {
    id:number,
    title: string,
    description:string,
}

function BlogCard({id,title,description}:BlogCardProps) {
  return (
    <div >   
      
            <p>{title}</p>
            <p>{description.slice(0,120)}<Link className='text-blue-600' href={`/post/${id}`}> Seemore...</Link></p>
            <form action={deleteData}>
              <input type="text" name="id" value={id} hidden readOnly />
              <button type="submit" className="text-red-600 underline">Delete</button>
            </form>
            <Link className="text-green-600" href={`/update/${id}`} >Edit</Link>
        </div>
  )
}

export default BlogCard