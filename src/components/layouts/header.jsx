import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
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

const Header = () => {
  const [current, setCurrent] = useState("");

  const { user } = useContext(AuthContext);

  console.log(">>> check user", user);

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
                label: <Link to="/logout">Đăng xuất</Link>,
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
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
