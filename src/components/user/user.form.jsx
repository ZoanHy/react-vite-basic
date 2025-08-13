import { Button, Input, notification, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {
  const [api, contextHolder] = notification.useNotification();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //   console.log(">>> check form: ", fullName, email, password, phoneNumber);

  const handleClick = async () => {
    const res = await createUserAPI(fullName, email, password, phoneNumber);

    if (res.data) {
      api.success({
        message: "User created successfully",
        description: "Tạo user thành công",
      });
      setIsModalOpen(false);
    } else {
      api.error({
        message: "User creation failed",
        description: JSON.stringify(res.message),
      });
    }

    console.log(">>> Check res: ", res.data);
  };

  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Tabler Users</h3>
        {contextHolder}
        <Button type="primary" onClick={showModal}>
          Create user
        </Button>
      </div>

      <Modal
        title="Create User"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleClick}
        onCancel={handleCancel}
        maskClosable={false}
        okText="Create"
      >
        <div style={{ display: "flex", gap: "30px", flexDirection: "column" }}>
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
            <span>Email</span>
            <Input
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <span>Password</span>
            <Input.Password
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div>
            <span>Phone number</span>
            <Input
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserForm;
