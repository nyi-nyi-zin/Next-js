import CustomButton from "./custom-button.tsx";
import { createData } from "../server/actions";

function CreateForm() {
  return (
    <form action={createData} className="space-y-2">
      <input
        type="text"
        name="title"
        placeholder="title ..."
        className="bg-transparent w-full border border-black "
      />
      <textarea
        name="description"
        placeholder="Desc ..."
        className="bg-transparent w-full border border-black block"
      />
      <CustomButton label="Create" />
    </form>
  );
}

export default CreateForm;
