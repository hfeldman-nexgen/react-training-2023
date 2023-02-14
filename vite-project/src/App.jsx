import { TextField } from "@mui/material"
import { useState } from "react"

const mainColour = "#0099aa"

const styles = {
  body: {
    width: "100%",
    height: "100%"
  },
  fluff: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: mainColour

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
  fields: {
    display: "grid",
    gridRow: 10,
    padding: 10,
    gridGap: 30
  },
  input: {
    height: 45,
    borderRadius: 5,
    border: 0,
    color: "black",
    backgroundColor: "#aaaaaa",
  },
  button: {
    backgroundColor: mainColour,
  },
  errMsg: {
    color: "red",
    fontWeight: "bold",
  }
}

export default function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errMsg, setErrMsg] = useState("")

  function handleClick() {
    setErrMsg("")

    if (username === "") {
      setErrMsg("Username is empty")
      return
    } else if (password === "") {
      setErrMsg("Password is empty")
      return
    }

    if (username === "user" && password === "pass") {
      alert("valid")
    } else {
      setErrMsg("Invalid Username or Password")
    }
  }

  function handleChange(ev) {
    if (ev.target.name === "username") {
      setUsername(ev.target.value.toLowerCase())
    } else if (ev.target.name === "password") {
      setPassword(ev.target.value)
    } else {

    }

    /*
    EVENT - GIBBERISH ABOUT WHERE THE CHANGE CAME FROM (user clicked this from position x,y on screen)
    EVENT.TARGET - Information about the field (<input style={.....} placeholder="username"/>)
    EVENT.TARGET.VALUE - The actual info we want
    */

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
        <article style={styles.fields}>

          <article
            style={styles.field}
          >
            <TextField
              label="Username"
              placeholder="Username"
              name="username"
              error={errMsg.includes("Username")}
              onChange={handleChange}//LOOK AT ME OVER HERE!!!
            />
          </article>

          {/* Password */}
          <article
            style={styles.field}
          >
            <label>Password</label>
            <input
              type="password"
              style={styles.input}
              name="password"
              error={errMsg.includes("Password")}
              onChange={handleChange}//LOOK AT ME OVER HERE!!!
            />
          </article>


          {/* Button */}
          <button
            style={styles.button}
            onClick={handleClick}
          >
            Login
          </button>

          {/* Error Message */}
          <p
            style={styles.errMsg}
          >
            {errMsg}
          </p>
        </article>
      </article>
    </section>
  )
}

