import { Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";
import { useEffect, useState } from "react";

const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([]);

  // empty array => run once
  useEffect(() => {
    console.log(">>> run useEffect 111");
    loadUser();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Fullname",
      dataIndex: "fullName",
    },
    {
      title: "Mail",
      dataIndex: "email",
    },
    {
      title: "Phone number",
      dataIndex: "phone",
    },
  ];

  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    // console.log(res.data);

    setDataUsers(res.data);
  };

  console.log(">>> run render 000");

  return <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />;
};

export default UserTable;
