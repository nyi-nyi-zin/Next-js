import BlogCard from "@/components/blog-card";
import {  getPosts, } from "@/server/actions";

export const revalidate = 5;

export default async function Home() {
  const {error,success} = await getPosts();
 
  if(error){
    throw new Error(error)
  }
   
   console.log(success)
  
  return (
    <main className="my-10">
      <h1 className="title-text">Blogs</h1>
      {success?.length === 0 && <p className="text-sm font-medium">No Posts To Show</p>}
     {
       success?.map(post=>(
        <BlogCard title={post.title} id={post.id} key={post.id} description={post.description} />
       ))
     }
     <div className="mt-2">
     </div>
    </main>
  );
}
