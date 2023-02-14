import { Button, TextField } from "@mui/material"
import { useState } from "react"

const styles = {
  header: {
    color: "black",
    fontSize: 22,
    backgroundColor: "white",
    margin: "0",
    width: "100%",
    height: "100%",



  },
  input: {
    height: 45,
    borderRadius: 5



  },
  Button: {
    backgroundColor: "#0099aa",
    color: "white"


  },
  Body: {
    fontsize: 26
  },
  errMsg: {
    color: "red",
    fontSize: 22
  },

  box: {

    width: "70%",
    backgroundColor: "#0099aa",
    justifyContent: "center",
    alignItems: "center",

  },

  login: {
    display: "grid",
    gridColumns: 1,
    gridRows: 3,
    gridGap: "10px"
  },

  articleLogIn: {
    padding: 10
  },
  subHeading: {
    color: "white",
  },

}

export default function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errMsg, setErrMsg] = useState("")

  function handleClick() {
    console.log(username)
  }

  function handleClick() {
    if (username === "") {
      setErrMsg("Please choose a Username")
    } else if (password === "") {
      setErrMsg("Please choose a Password")

    } if ((username === "User") && (password === "Pass")) {
      console.log("valid")
    } else { setErrMsg("invalid") }
  }




  function handleChange(event) {
    if (event.target.name === "Username") {

      setUsername(event.target.value)
    } else if (event.target.name === "Password") {
      setPassword(event.target.value)
    }

  }




  return (

    <section class="column"
      style={styles.header}>
      <article
        style={styles.box}
      >
        <h1
          style={styles.subHeading}> Welcome Back!</h1>
        <p
          style={styles.subHeading}> You can sign in to access with your existing account</p>
      </article>
      <article
        style={styles.articleLogIn}>
        <h2> Login </h2>
        <article
          style={styles.login}>

          <label>Username</label>
          <TextField
            onChange={handleChange}
          />
          <label>Password</label>
          <TextField
            type="password"
            onChange={handleChange}
          />
          <p
            style={styles.errMsg}
          >
            {errMsg}
          </p>
          <Button

            onClick={handleClick}
          >
            Login
          </Button>

        </article>

      </article>

    </section>

  )
}
