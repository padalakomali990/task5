import { useNavigate } from "react-router-dom";

function JobCard({ job }) {

  const navigate = useNavigate();

  return (
    <div className="card">

      <h2>{job.title}</h2>

      <p><b>Company:</b> {job.company}</p>

      <p><b>Location:</b> {job.location}</p>

      <p><b>Salary:</b> {job.salary}</p>

      <button onClick={() => navigate(`/job/${job.id}`)}>
        View Details
      </button>

    </div>
  )
}

export default JobCard;