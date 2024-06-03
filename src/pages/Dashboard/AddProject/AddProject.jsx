import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Title from "../../../components/Title/Title";

const AddProject = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;

    const photo = form.photo.value;
    const projectName = form.name.value;
    const serverLink = form.serverLink.value;
    const clientLink = form.clientLink.value;
    const liveLink = form.liveLink.value;
    const technology = form.technology.value;
    const technologyArr = technology.split(" ");
    const detail = form.detail.value;

    const newProject = {
      photo,
      projectName,
      clientLink,
      liveLink,
      technologyArr,
      serverLink,
      detail,
    };
    console.log(newProject);

    fetch(
      "https://l2-b2-frontend-path-assignment-6-server-starter-pack-chi.vercel.app/api/v1/project",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProject),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        alert("Project is Added");
      });
  };
  return (
    <div>
      <Title title="add a Project" />
      <div className="flex-shrink-0 w-full my-8 bg-gray-200 rounded-md shadow-2xl card">
        <form onSubmit={handleAddToy} className="card-body">
          <div className="gap-8 md:flex">
            <div className="md:w-1/2 form-control">
              <label className="label">
                <span className="label-text">Picture URL *</span>
              </label>
              <input
                type="text"
                placeholder="Project Photo"
                name="photo"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Project Name *</span>
              </label>
              <input
                type="text"
                placeholder="Project Name"
                name="name"
                required
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="gap-8 md:flex">
            <div className="md:w-1/2 form-control">
              <label className="label">
                <span className="label-text">Server Site Code Link *</span>
              </label>
              <input
                type="text"
                placeholder="Server Site Code Link"
                name="serverLink"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Client Site Code Link *</span>
              </label>
              <input
                type="text"
                placeholder="Client Site Code Link"
                name="clientLink"
                required
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="gap-8 md:flex">
            <div className="md:w-1/2 form-control">
              <label className="label">
                <span className="label-text">Client Site Live Link *</span>
              </label>
              <input
                type="text"
                placeholder="Client Site Live Link"
                name="liveLink"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Technology Names *</span>
              </label>
              <input
                type="text"
                placeholder="React, Tailwind, Firebase etc"
                name="technology"
                required
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Project Descriptions *</span>
            </label>
            <textarea
              placeholder="Project Descriptions"
              name="detail"
              required
              className="w-full textarea textarea-bordered textarea-md"
            ></textarea>
          </div>
          <div className="mt-6 form-control">
            <input
              className="btn max-w-[300px] mx-auto"
              type="submit"
              value="Add a Project"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
