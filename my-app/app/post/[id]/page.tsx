import React from 'react'
import { getPost,deleteData } from '@/server/actions'
import Link from 'next/link';

type PostProps = {
  params:{
    id:string;
  }
}

async function Post({params}:PostProps) {
  const {success} = await getPost(Number(params.id))
  const {title,description} = success
  return (
    <div className='mt-4'>
      <h2 className='text-lg font-medium'>{title}</h2>
      <p className='text-sm'>{description}</p>
      <form action={deleteData}>
        <input type="text" name='id' value={params.id} hidden readOnly />
        <button type='submit' className='text-red-600 underline'>Delete</button>
      </form>
      <Link href={`/update/${params.id}`} className='underline text-green-600'>Edit</Link>
      </div>
  )
}

export default Post