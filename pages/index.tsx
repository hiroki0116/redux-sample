import Button from "antd/lib/button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DataDisplay from "../components/DataDisplay";
import { APIData } from "../types";
import LinkButton from "../components/LinkButton";
import CSSWrapper from "../components/CSSWrapper";

export default function Home({ data, time }: { data: APIData; time: number }) {
  return (
    <>
      <Header />
      <CSSWrapper>
        <LinkButton path={"/client-fetch"} label="Try API fetch on client" />
        <DataDisplay data={data} time={time} />
      </CSSWrapper>
      <Footer />
    </>
  );
}

// server side props
export const getServerSideProps = async () => {
  // I want to calulate the time it takes to fetch the data
  const start = Date.now();
  const res = await fetch("https://api.publicapis.org/entries");
  const data = await res.json();
  const end = Date.now();
  const time = end - start;
  return {
    props: {
      data,
      time,
    },
  };
};
