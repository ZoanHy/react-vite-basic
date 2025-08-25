import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import { Outlet } from "react-router-dom";
import { getAccountAPI } from "./services/api.service";
import { useContext, useEffect } from "react";
import { AuthContext } from "./components/context/auth.context";

function App() {
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const delay = (milliseconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, milliseconds);
    });
  };
  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    await delay(3000);

    if (res.data) {
      setUser(res.data.user);
      console.log(">>> check user info", res.data);
    }
  };

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
