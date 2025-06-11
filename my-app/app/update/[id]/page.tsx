import CustomButton from "@/components/custom-button"
import { updateData } from "@/server/actions"

type EditTodoProps = {
    params:{
        id:string
    }
}

const EditTodo = ({params}:EditTodoProps) => {
  return (
    <main>
        <h2>Update todo</h2>
        <form action={updateData}>
            <input type="text" name="id" value={params.id} hidden readOnly />
            <input className="border border-black" type="text" name="title" required  />
            <CustomButton label="Update"/>
        </form>
    </main>
  )
}

export default EditTodo