import CustomButton from "@/components/custom-button";
import { createData, deleteData, readData, } from "@/server/actions";
import Link from "next/link";

export const revalidate = 5;

export default async function Home() {
  const {error,success} = await readData();
 
  if(error){
    throw new Error(error)
  }
   
   console.log(success)
  
  return (
    <main>
      <h1 className="text-xl font-bold ">Todos</h1>
     {
       success?.map(todo=>(
        <div key={todo.id}>
            <p>{todo.title}</p>
            <form action={deleteData}>
              <input type="text" name="id" value={todo.id} hidden readOnly />
              <button type="submit" className="text-red-600 underline">Delete</button>
            </form>
            <Link className="text-green-600" href={`/update/${todo.id}`} >Edit</Link>
        </div>
       ))
     }
     <div className="mt-2">
      <form action={createData}>
        <input type="text" name="todoTitle" className="bg-transparent border border-black " />
       <CustomButton label="Create"/>
      </form>
     </div>
    </main>
  );
}
