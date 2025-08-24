import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space, Table, Tag, Popconfirm, Button, notification } from "antd";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";
import ViewUserDrawer from "./view.user.drawer";
import { deleteUserAPI } from "../../services/api.service";

const UserTable = (props) => {
  const [api, contextHolder] = notification.useNotification();

  const {
    dataUsers,
    loadUser,
    current,
    pageSize,
    total,
    setCurrent,
    setPageSize,
  } = props;

  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dataView, setDataView] = useState(null);

  const confirmDelete = async (id) => {
    console.log(id);

    const res = await deleteUserAPI(id);

    if (res.data) {
      api.success({
        message: "Delete User",
        description: "User deleted successfully.",
      });
      await loadUser();
    } else {
      api.error({
        message: "Delete User",
        description: JSON.stringify(res.message),
      });
    }
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      render: (_, record, index) => {
        return <>{index + 1 + (current - 1) * pageSize}</>;
      },
    },
    {
      title: "ID",
      dataIndex: "_id",
      render: (_, record) => {
        return (
          <a
            href="#!"
            onClick={() => {
              console.log(">>> check record: ", record);
              setDataView(record);
              setIsDrawerOpen(true);
            }}
          >
            {record._id}
          </a>
        );
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

          <Popconfirm
            title="Delete User"
            description="Are you sure to delete this user?"
            onConfirm={() => {
              confirmDelete(record._id);
            }}
            onCancel={() => {}}
            okText="Yes"
            cancelText="No"
            placement="left"
          >
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    if (pagination && pagination.current) {
      if (pagination.current !== +current) {
        setCurrent(+pagination.current); // "5" => 5
      }
    }

    if (pagination && pagination.pageSize) {
      if (pagination.pageSize !== +pageSize) {
        setPageSize(+pagination.pageSize);
      }
    }

    console.log(">>> checks", { pagination, filters, sorter, extra });
  };

  console.log(">>> run render 000");

  return (
    <>
      {contextHolder}
      <Table
        columns={columns}
        dataSource={dataUsers}
        rowKey={"_id"}
        pagination={{
          current: current,
          pageSize: pageSize,
          showSizeChanger: true,
          total: total,
          showTotal: (total, range) => {
            return (
              <div>
                {" "}
                {range[0]}-{range[1]} trên {total} rows
              </div>
            );
          },
        }}
        onChange={onChange}
      />
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />

      <ViewUserDrawer
        loadUser={loadUser}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        dataView={dataView}
      />
    </>
  );
};

export default UserTable;
