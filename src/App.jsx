import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import { Outlet } from "react-router-dom";
import { getAccountAPI } from "./services/api.service";
import { useContext, useEffect } from "react";
import { AuthContext } from "./components/context/auth.context";
import { Spin } from "antd";

function App() {
  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);

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
    // await delay(3000);

    if (res.data) {
      setUser(res.data.user);
      // console.log(">>> check user info", res.data);
    }

    setIsAppLoading(false);
  };

  return (
    <>
      {isAppLoading ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spin />
        </div>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
