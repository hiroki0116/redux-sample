import Header from "../components/Header";
import Footer from "../components/Footer";
import DataDisplay from "../components/DataDisplay";
import { APIData } from "../types";

export default function Home({ data }: { data: APIData }) {
  return (
    <div>
      <Header />
      <DataDisplay data={data} />
      <Footer />
    </div>
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
