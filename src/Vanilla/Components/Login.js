import { useState } from "react";

export default function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      `The following sign-in attempt was made: Email=${email}, Password=${password}`
    );
    setPassword("");
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div
      id="container"
      style={{
        //height: "100%",
        //display: "flex",
        //flexDirection: "column",
        //backgroundColor: "#f8fafc",
      }}
      className="
      
      flex 
      flex-col 
      bg-slate-50 
      h-full
      "
    >
      <img
        src="/pizzafox.png"
        style={{
          width: "40%",
          alignSelf: "flex-end",
          margin: "1em 1em 4em 1em",
        }}
        className=""
      />
      <form
        style={{
         width: "60%",
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
        }}
        className=""
        onSubmit={handleSubmit}
      >
        <h1
          style={{
            fontSize: "3rem",
            lineHeight: "1",
          }}
          className=""
        >
          Sign in
        </h1>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "2rem",
            color: "#475569",
          }}
          className=""
        >
          Please sign in to continue
        </p>
      </form>
      <div class="form-floating mb-3">
  <input 
    type="email" 
    class="form-control" 
    id="floatingInput" 
    placeholder="name@example.com"/>

  <label 
  for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>

    </div>
  );
}
