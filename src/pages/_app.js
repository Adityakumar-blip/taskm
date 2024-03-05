import { useEffect, useState } from "react";
import Login from "@/components/auth/Login";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem("login");
    setLogin(storedLogin === "true");
  }, []);

  return login ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Login />
  );
}
