import { useEffect, useState } from "react";
import { updateUserAPI } from "../../services/api.service";
import { Input, Modal, notification } from "antd";

const UpdateUserModal = (props) => {
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const [api, contextHolder] = notification.useNotification();

  // const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

  const {
    isModalUpdateOpen,
    setIsModalUpdateOpen,
    dataUpdate,
    setDataUpdate,
    loadUser,
  } = props;

  useEffect(() => {
    console.log(">>> check dataUpdate props: ", dataUpdate);
    if (dataUpdate) {
      setId(dataUpdate._id);
      setFullName(dataUpdate.fullName);
      setPhone(dataUpdate.phone);
    }
  }, [dataUpdate]);

  const handleClick = async () => {
    const res = await updateUserAPI(id, fullName, phone);

    if (res.data) {
      api.success({
        message: "User updated successfully",
        description: "Cập nhật user thành công",
      });
      resetAndCloseModal();
      await loadUser();
    } else {
      api.error({
        message: "User update failed",
        description: JSON.stringify(res.message),
      });
    }

    console.log(">>> Check res: ", res.data);
  };

  const resetAndCloseModal = () => {
    setId("");
    setFullName("");
    setPhone("");
    setDataUpdate(null);
    setIsModalUpdateOpen(false);
  };

  // console.log(">>> Check dataUpdate: ", dataUpdate);

  return (
    <>
      {contextHolder}
      <Modal
        title="Update A User"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalUpdateOpen}
        onOk={handleClick}
        onCancel={() => resetAndCloseModal()}
        maskClosable={false}
        okText="Save"
      >
        <div style={{ display: "flex", gap: "30px", flexDirection: "column" }}>
          <div>
            <span>Id</span>
            <Input value={id} disabled />
          </div>
          <div>
            <span>FullName</span>
            <Input
              value={fullName}
              onChange={(event) => {
                //   console.log(">>> Check input: ", event.target.value);
                setFullName(event.target.value);
              }}
            />
          </div>
          <div>
            <span>Phone number</span>
            <Input
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateUserModal;
