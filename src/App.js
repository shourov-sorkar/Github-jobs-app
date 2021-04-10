import React, { useState } from "react";
import FetchJobs from "./Components/FetchJobs";
import { Container, Spinner } from "react-bootstrap";
import Job from "./Components/Job";
import PagePagination from "./Components/PagePagination";
import SearchForm from "./Components/SearchForm";
import logo from "./assets/logo.png"
function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = FetchJobs(params, page);

  function handleParamChange(e){
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return {...prevParams, [param]: value}
    })
  }
  return (
    <Container className="my-4">
      <div className="mb-4">
<img src={logo} alt="logo"/>
      </div>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <PagePagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
      {loading && (
        <div className="text-center my-5">
          <Spinner animation="border" />
        </div>
      )}
      {error && <h1>Error Try again....</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
      <PagePagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}

export default App;
