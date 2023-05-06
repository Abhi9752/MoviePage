import React from 'react'

const Summary = () => {
  return (
    <section className="my-5 row" id="summary">
      <h2 className="mb-3 bg-dark bg-gradient text-uppercase text-warning rounded text-center">Summary</h2>
      <div className="bg-dark text-warning shadow rounded p-3">
        <p><span className='fw-bold'>Release Year</span> : The movie was released in 1977.</p>
        <p><span className='fw-bold'>Director</span> : The movie was directed by George Lucas.</p>
        <span className='fw-bold'>Main Cast</span>
        <ul className="mx-3">
          <li>Mark Hamill as Luke Skywalker</li>
          <li>Harrison Ford as Han Solo</li>
          <li>Carrie Fisher as Princess Leia Organa</li>
          <li>Peter Cushing as Grand Moff Tarkin</li>
          <li>Alec Guinness as Obi-Wan Kenobi</li>
        </ul>
        <p><span className='fw-bold'>Overview :</span> "Star Wars" is a science-fiction movie that takes place in a fictional galaxy far, far away. The movie follows a young farm boy named Luke Skywalker, who joins the Rebel Alliance to fight against the evil Empire, led by Darth Vader.</p>
      </div>
    </section>
  )
}

export default Summary