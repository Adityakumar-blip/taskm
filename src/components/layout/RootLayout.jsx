import React from "react";
import Layout from "./Layout";

const RootLayout = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default RootLayout;
