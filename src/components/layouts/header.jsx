import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, message } from "antd";
import {
  AppstoreOutlined,
  BookOutlined,
  HomeOutlined,
  MailOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  LoginOutlined,
  AuditOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { logoutAPI } from "../../services/api.service";

const Header = () => {
  const [messageApi, contextHolderMessage] = message.useMessage();

  const [current, setCurrent] = useState("");

  const { user, setUser } = useContext(AuthContext);

  console.log(">>> check user", user);

  let navigate = useNavigate();

  const handleLogout = async () => {
    const res = await logoutAPI();

    if (res.data) {
      // clear data
      localStorage.removeItem("access_token");
      setUser({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: "",
      });
      messageApi.open({
        type: "success",
        content: "Logout successfully",
      });

      // redirect to home
      navigate("/");
    }
  };

  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/users">Users</Link>,
      key: "users",
      icon: <UsergroupAddOutlined />,
    },

    {
      label: <Link to="/books">Books</Link>,
      key: "products",
      icon: <BookOutlined />,
    },

    ...(!user.id
      ? [
          {
            label: <Link to="/login">Đăng nhập</Link>,
            key: "login",
            icon: <LoginOutlined />,
          },
        ]
      : []),

    ...(user.id
      ? [
          {
            label: `Welcome ${user.fullName}`,
            key: "setting",
            icon: <AliwangwangOutlined />,
            children: [
              {
                label: <span onClick={() => handleLogout()}>Đăng xuất</span>,
                key: "logout",
              },
            ],
          },
        ]
      : []),
  ];

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      {contextHolderMessage}
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </>
  );
};

export default Header;
