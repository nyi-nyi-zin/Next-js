import CustomButton from "@/components/custom-button";
import { getPost, updateData } from "../../../server/actions";

type EditTodoProps = {
  params: {
    id: string;
  };
};

const EditTodo = async ({ params }: EditTodoProps) => {
  const { success } = await getPost(Number(params.id));

  return (
    <main>
      <h2>Update todo</h2>
      <form action={updateData}>
        <input type="text" name="id" value={params.id} hidden readOnly />
        <input
          className="border border-black"
          type="text"
          name="title"
          required
          defaultValue={success?.title}
        />
        <textarea
          name="description"
          placeholder="Desc ..."
          className="bg-transparent w-full border border-black block"
          defaultValue={success?.description}
        />
        <CustomButton label="Update" />
      </form>
    </main>
  );
};

export default EditTodo;
