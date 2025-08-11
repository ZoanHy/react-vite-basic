import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  );
}

export default App;
