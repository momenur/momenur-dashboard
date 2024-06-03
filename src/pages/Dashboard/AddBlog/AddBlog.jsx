import Title from "../../../components/Title/Title";

const AddBlog = () => {
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;

    const blogImage = form.photo.value;
    const blogName = form.name.value;
    const shortDescription = form.serverLink.value;
    const detail = form.detail.value;

    const newBlog = {
      blogImage,
      blogName,
      shortDescription,
      detail,
    };
    console.log(newBlog);

    fetch(
      "https://l2-b2-frontend-path-assignment-6-server-starter-pack-chi.vercel.app/api/v1/blog",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBlog),
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
      <Title title="add a blog" />
      <div className="flex-shrink-0 w-full my-8 bg-gray-200 rounded-md shadow-2xl card">
        <form onSubmit={handleAddToy} className="card-body">
          <div className="gap-8 md:flex">
            <div className="md:w-1/2 form-control">
              <label className="label">
                <span className="label-text">Blog Image URL *</span>
              </label>
              <input
                type="text"
                placeholder="Blog Photo"
                name="photo"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Blog Name *</span>
              </label>
              <input
                type="text"
                placeholder="Blog Name"
                name="name"
                required
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="gap-8 md:flex">
            <div className="w-1/2 form-control">
              <label className="label">
                <span className="label-text">Short Description *</span>
              </label>
              <input
                type="text"
                placeholder="Short Description"
                name="serverLink"
                required
                className="input input-bordered"
              />
            </div>
            <div className="w-full md:w-1/2 form-control">
              <label className="label">
                <span className="label-text">Blog Details *</span>
              </label>
              <textarea
                placeholder="Blog Details"
                name="detail"
                required
                className="w-full textarea textarea-bordered textarea-md"
              ></textarea>
            </div>
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

export default AddBlog;
