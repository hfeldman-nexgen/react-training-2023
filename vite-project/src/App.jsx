import { useState } from "react"

const styles = {
  body: {
    width: "100%",
    height: "100%"
  },
  fluff: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0099aa"
  },
  container: {
    height: "100%",
    width: '30%',
    backgroundColor: "white",
    color: "black",
  },
  loginHeader: {
    alignSelf: "center"
  },
  field: {
    marginTop: 50,
    padding: 5
  },
  input: {
    height: 45,
    borderRadius: 5,
    border: 0,
    color: "black",
    backgroundColor: "#aaaaaa"
  },
  button: {
    backgroundColor: "#0099aa",
    width: "100%",
    margin: "100px 5px 0 5px",
    alignSelf: "center"
  }
}

export default function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleClick() {
    console.log("hello")
  }

  function handleChange(event) {
    setUsername(event.target.value)
  }


  return (
    <section
      style={styles.body}
    >

      {/*Fluff Box */}
      <article
        style={styles.fluff}
      >
        <article>
          <h1>Welcome Back!</h1>
          <h2>You can sign in to acces with your existing account</h2>
        </article>
      </article>

      {/* Login Container */}
      <article
        style={styles.container}
      >
        <h2
          style={styles.loginHeader}
        >
          Login
        </h2>

        {/* Username */}
        <article
          style={styles.field}
        >
          <label>Username</label>
          <input
            placeholder="johns"
            style={styles.input}
            onChange={(event) => handleChange(event)}
          />
        </article>

        {/* Password */}
        <article
          style={styles.field}
        >
          <label>Password</label>
          <input type="password" style={styles.input} />
        </article>

        {/* Button */}
        <button
          style={styles.button}
          onClick={() => handleClick()}
        >
          Login
        </button>

      </article>
    </section>
  )
}

