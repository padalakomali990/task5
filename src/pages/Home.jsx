import { useEffect, useState } from "react";
import jobsData from "../data/jobs";
import JobCard from "../components/JobCard";

function Home() {

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  // useEffect
  useEffect(() => {

    // Mock API Fetch
    setJobs(jobsData);

  }, []);

  // filter()
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>Available Jobs</h1>

      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="jobs-grid">

        {
          filteredJobs.length > 0 ? (

            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))

          ) : (

            <h2>No Jobs Found</h2>

          )
        }

      </div>

    </div>
  )
}

export default Home;