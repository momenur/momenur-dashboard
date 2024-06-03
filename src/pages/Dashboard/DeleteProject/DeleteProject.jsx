import { useEffect, useState } from "react";
import Title from "../../../components/Title/Title";
import Swal from "sweetalert2";

const DeleteProject = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://l2-b2-frontend-path-assignment-6-server-starter-pack-chi.vercel.app/api/v1/projects"
        );
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  console.log(projects);
  if (loading) {
    return <h1>Loading</h1>;
  }

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://l2-b2-frontend-path-assignment-6-server-starter-pack-chi.vercel.app/api/v1/projects/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <Title title="Delete Project" />
      <div>
        <div className="flex items-center px-10 py-4 text-xl font-semibold bg-gray-500 rounded-t-md">
          <div className="flex-1 gap-4 ">
            <span className="">Project Name</span>
          </div>
          <div className="flex-1">
            <h1>Photo</h1>
          </div>
          <h1>Action</h1>
        </div>
        <div>
          {projects.map((project, index) => (
            <div
              key={project._id}
              className={`flex items-center  px-10 py-2 text-xl font-semibold ${
                (index + 1) % 2 === 1 ? "bg-white" : "bg-gray-200"
              }`}
            >
              <div className="flex-1 gap-4 ">
                <span className="">{project.projectName}</span>
              </div>
              <div className="flex-1">
                <img className="max-w-[100px]" src={project.photo} alt="" />
              </div>
              <button
                onClick={() => handleDelete(project._id)}
                className="flex-1 transition-all max-w-[80px] bg-red-400 border-none btn hover:bg-red-500"
              >
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeleteProject;
