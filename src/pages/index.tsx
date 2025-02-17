import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>NALcoin Network</title>
        <meta
          name="description"
          content="NALcoin Network"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
