import CustomButton from "@/components/custom-button";
import { createData, deleteData, readData, } from "@/server/actions";

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
              <input type="text" name="id" value={todo.id} hidden />
              <button type="submit" className="text-red-600 underline">Delete</button>
            </form>
        </div>
       ))
     }
     <div className="mt-2">
      <form action={createData}>
        <input type="text" name="todoTitle" className="bg-transparent border border-black " />
       <CustomButton/>
      </form>
     </div>
    </main>
  );
}
