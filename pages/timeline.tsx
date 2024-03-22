import Timeline from "../components/timeline/Timeline";
import Layout from "../components/Layout";
import Head from "next/head";

const timeline = () => {
  return (
    <>
      <Head>
        <title>Proof of work - SRS</title>
      </Head>
      <Layout>
        <Timeline />
      </Layout>
    </>
  );
};

export default timeline;
