// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:8000/auth/login", {
//         username,
//         password,
//       });
//       const { token, user } = response.data;
//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(user));
//       // Redirect to dashboard or another page
//     } catch (err) {
//       setError(err.response.data.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        username,
        password,
      });
      const { token, user } = response.data;
      console.log(token);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      // Redirect to dashboard or another page
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to="/"><button onClick={handleLogin}>Login</button></Link>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
