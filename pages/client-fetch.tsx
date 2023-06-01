import Header from "../components/Header";
import Footer from "../components/Footer";
import DataDisplay from "../components/DataDisplay";
import useUniversities from "../hooks/useUniversities";

export default function ClientFetch() {
  const { univiersities, loading } = useUniversities();
  return (
    <div>
      <Header />
      <DataDisplay data={univiersities} loading={loading} />
      <Footer />
    </div>
  );
}
