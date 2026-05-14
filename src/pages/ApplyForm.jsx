import { useState } from "react";
import { useParams } from "react-router-dom";

function ApplyForm() {

  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: ""
  });

  const [success, setSuccess] = useState(false);

  // Form Handling
  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {

    e.preventDefault();

    console.log(formData);

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      resume: ""
    });
  }

  return (
    <div className="container">

      <h1>Apply for Job ID: {id}</h1>

      {
        success ? (
          <h2>Application Submitted Successfully!</h2>
        ) : (
          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="resume"
              placeholder="Resume Link"
              value={formData.resume}
              onChange={handleChange}
              required
            />

            <button type="submit">Submit</button>

          </form>
        )
      }

    </div>
  )
}

export default ApplyForm;