import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space, Table, Tag } from "antd";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";

const UserTable = (props) => {
  const { dataUsers, loadUser } = props;

  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      render: (_, record) => {
        return <a href="#!">{record._id}</a>;
      },
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
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            style={{ cursor: "pointer", color: "orange", marginRight: 8 }}
            onClick={() => {
              // console.log('>>> check record: ', record);
              setDataUpdate(record);
              setIsModalUpdateOpen(true);
            }}
          />
          <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
        </div>
      ),
    },
  ];

  console.log(">>> run render 000");

  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
    </>
  );
};

export default UserTable;
