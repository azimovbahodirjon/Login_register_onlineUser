import { useSelector } from "react-redux";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import { useFireStore } from "../hook/useFireStore";
import { Navigate, useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const { addTask } = useFireStore("tasks");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const title = formData.get("title");
    const DueTo = formData.get("DueTo");
    const description = formData.get("description");
    addTask({
      title,
      DueTo,
      description,
      creator: {
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
      },
    }).then(() => Navigate("/"));
  };
  return (
    <section className="p-5">
      <h1 className="font-bold">Create New Task</h1>
      <form onSubmit={handleSubmit}>
        <FormInput name="title" label="Title" type="text" />
        <FormInput name="DueTo" label="DueTo" type="date" />
        <FormTextArea label="Description" name="description" />
        <div className="mt-10">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </section>
  );
}

export default Create;
