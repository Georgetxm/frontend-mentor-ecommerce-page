import React from "react";
import Head from "next/dist/shared/lib/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "E-commerce product page | Frontend Mentor",
  keywords: "frontend mentor, e-commerce, product",
  description:
    "E-commerce product page challenge from Frontend Mentor, done by George Teo",
};

export default Meta;
