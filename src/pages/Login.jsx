import { useState } from "react";

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [loggedIn, setLoggedIn] = useState(false);

  function handleChange(e) {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {

    e.preventDefault();

    if (user.email && user.password) {
      setLoggedIn(true);
    }
  }

  return (
    <div className="container">

      <h1>Login Page</h1>

      {
        loggedIn ? (

          <h2>Login Successful</h2>

        ) : (

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={user.password}
              onChange={handleChange}
            />

            <button type="submit">
              Login
            </button>

          </form>
        )
      }

    </div>
  )
}

export default Login;