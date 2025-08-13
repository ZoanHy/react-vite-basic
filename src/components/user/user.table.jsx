import { Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";
import { useState } from "react";

const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([]);

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
  // const data = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //     tags: ["nice", "developer"],
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //     tags: ["loser"],
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //     tags: ["cool", "teacher"],
  //   },
  // ];

  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    // console.log(res.data);

    // setDataUsers(res.data);
  };

  loadUser();

  return <Table columns={columns} dataSource={dataUsers} />;
};

export default UserTable;
