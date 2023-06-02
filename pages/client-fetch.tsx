import Header from "../components/Header";
import Footer from "../components/Footer";
import DataDisplay from "../components/DataDisplay";
import useUniversities from "../hooks/useUniversities";
import LinkButton from "../components/LinkButton";
import CSSWrapper from "../components/CSSWrapper";

export default function ClientFetch() {
  const { univiersities, loading, time } = useUniversities();
  return (
    <>
      <Header />
      <CSSWrapper>
        <LinkButton path={"/"} label={"Try API Fetch on Server"} />
        <DataDisplay data={univiersities} loading={loading} time={time} />
      </CSSWrapper>
      <Footer />
    </>
  );
}
