import Head from "next/head";
import Image from "next/image";
import React from "react";
import LoginImage from "./LoginImage";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="flex justify-between h-screen bg-red">
      <Head>
        <title>Login</title>
      </Head>

      <LoginForm />
      <LoginImage />
    </div>
  );
};

export default Login;
