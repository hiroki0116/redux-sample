import Header from "../components/Header";
import CSSWrapper from "../components/CSSWrapper";
import Footer from "../components/Footer";
import ReduxSample from "../components/ReduxSample";
import Employees from "../components/Employees";

const redux = () => {
  return (
    <>
      <Header />
      <CSSWrapper>
        <ReduxSample />
        <Employees />
      </CSSWrapper>
      <Footer />
    </>
  );
};

export default redux;
