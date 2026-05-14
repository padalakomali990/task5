import { useParams, useNavigate } from "react-router-dom";
import jobs from "../data/jobs";

function JobDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return <h2>Job Not Found</h2>
  }

  return (
    <div className="container">

      <h1>{job.title}</h1>

      <p><b>Company:</b> {job.company}</p>

      <p><b>Location:</b> {job.location}</p>

      <p><b>Salary:</b> {job.salary}</p>

      <p><b>Description:</b> {job.description}</p>

      <button onClick={() => navigate(`/apply/${job.id}`)}>
        Apply Now
      </button>

    </div>
  )
}

export default JobDetails;