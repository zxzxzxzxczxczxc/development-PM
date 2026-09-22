function App() {
  return (
    <main className="page">
      <header className="header">
        <h1>Harry Potter</h1>

        <p className="subtitle">
          View all characters from the Harry Potter universe
        </p>

        <div className="filters">
          <div className="filter">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Name" />
          </div>

          <div className="filter">
            <label htmlFor="school">School</label>
            <select id="school" defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Ravenclaw">Ravenclaw</option>
              <option value="Hufflepuff">Hufflepuff</option>
            </select>
          </div>
        </div>
      </header>

      <div className="divider" />

      <section className="content">
        <div className="characters">
          <article className="character-card">
            <img src="/images/hermione.jpg" alt="Hermione Granger" />

            <div className="card-body">
              <p>
                <strong>Hermione Granger</strong>
                <br />
                Actor: Emma Watson
                <br />
                Gender: female
                <br />
                House: Gryffindor
                <br />
                Wand core: dragon heartstring
                <br />
                Alive: yes
              </p>
            </div>
          </article>

          <article className="character-card">
            <img src="/images/Draco.jpg" alt="Draco Malfoy" />

            <div className="card-body">
              <p>
                <strong>Draco Malfoy</strong>
                <br />
                Actor: Tom Felton
                <br />
                Gender: male
                <br />
                House: Slytherin
                <br />
                Wand core: unicorn tail-hair
                <br />
                Alive: yes
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App