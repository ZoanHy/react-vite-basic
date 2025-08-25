import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  BookOutlined,
  HomeOutlined,
  MailOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";

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
  {
    label: "Cài đặt",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      { label: <Link to="/login">Đăng nhập</Link>, key: "login" },
      { label: <Link to="/logout">Đăng xuất</Link>, key: "logout" },
    ],
  },
];

const Header = () => {
  const [current, setCurrent] = useState("");

  const { user } = useContext(AuthContext);

  console.log(">>> check user", user);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
