import Button from "antd/lib/button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DataDisplay from "../components/DataDisplay";
import { APIData } from "../types";
import LinkButton from "../components/LinkButton";
import CSSWrapper from "../components/CSSWrapper";

export default function Home({ data }: { data: APIData }) {
  return (
    <>
      <Header />
      <CSSWrapper>
        <LinkButton path={"/client-fetch"} label="Try API fetch on client" />
        <DataDisplay data={data} />
      </CSSWrapper>
      <Footer />
    </>
  );
}

// server side props
export const getServerSideProps = async () => {
  const res = await fetch("https://api.publicapis.org/entries");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
