import Header from "../components/Header";
import CSSWrapper from "../components/CSSWrapper";
import Footer from "../components/Footer";
import ReduxSample from "../components/ReduxSample";

const redux = () => {
  return (
    <>
      <Header />
      <CSSWrapper>
        <ReduxSample />
      </CSSWrapper>
      <Footer />
    </>
  );
};

export default redux;
