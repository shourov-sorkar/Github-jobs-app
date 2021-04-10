import React from 'react'
import FetchJobs from './Components/FetchJobs'
import {Container} from 'react-bootstrap'

function App() {
  const { jobs, loading, error } = FetchJobs()
  return (
    <Container>
      {loading && <h1>Loading....</h1>}
      {error && <h1>Error Try again....</h1>}
      {<h1>{jobs.length}</h1>}
    </Container>
  )
}

export default App
