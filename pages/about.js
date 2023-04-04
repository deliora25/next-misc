import Footer from "../components/Footer";
import Head from "next/head";
function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="content" />
      </Head>
      <h1 className="content">About</h1>
    </>
  );
}

export default About;

About.getLayout = function getLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
