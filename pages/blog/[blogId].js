import Head from "next/head";

function Blog({ title }, { description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">
        Env Address is {process.env.NEXT_PUBLIC_ADDRESS}
      </h1>
    </div>
  );
}

export default Blog;

export async function getServerSideProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(`Connecting with username ${user} and password ${password}`);
  return {
    props: {
      title: "Article 1",
      description: "Article 1 descrption",
    },
  };
}
