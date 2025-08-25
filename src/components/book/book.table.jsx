import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space, Table, Tag } from "antd";

const BookTable = (props) => {
  const {
    dataBooks,
    current,
    pageSize,
    total,
    setCurrent,
    setPageSize,
    setTotal,
  } = props;

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      render: (_, record, index) => <>{index + 1 + (current - 1) * pageSize}</>,
    },
    {
      title: "ID",
      dataIndex: "_id",
      render: (_, record, index) => <a href="#!">{record._id}</a>,
    },
    {
      title: "Tiêu đề",
      dataIndex: "mainText",
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
      render: (_, record) => (
        <>
          {record.price.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </>
      ),
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            style={{ cursor: "pointer", color: "orange", marginRight: 8 }}
          />
          <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
        </div>
      ),
    },
  ];

  const onChangeTalbe = (pagination, filters, sorter, extra) => {
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
  };
  return (
    <div style={{ padding: "20px" }}>
      <Table
        columns={columns}
        dataSource={dataBooks}
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
        onChange={onChangeTalbe}
      />
    </div>
  );
};

export default BookTable;
