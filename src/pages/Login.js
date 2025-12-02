import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (username === "Admin" && password === "12345") {
      localStorage.setItem("isAuth", "true");
      navigate("/profile");
    } else {
      setErr("Ім'я користувача або пароль введені неправильно");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {err && <div className="error">{err}</div>}
      <form onSubmit={submit} className="login-form">
        <div>
          <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
          <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <p>Тестові дані: username: <b>Admin</b>, password: <b>12345</b></p>
    </div>
  );
};

export default Login;
