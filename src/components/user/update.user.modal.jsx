import { useState } from "react";
import { createUserAPI } from "../../services/api.service";
import { Input, Modal } from "antd";

const UpdateUserModal = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClick = async () => {
    const res = await createUserAPI(fullName, email, password, phone);

    if (res.data) {
      api.success({
        message: "User created successfully",
        description: "Tạo user thành công",
      });
      resetAndCloseModal();
      //   await loadUser();
    } else {
      api.error({
        message: "User creation failed",
        description: JSON.stringify(res.message),
      });
    }

    console.log(">>> Check res: ", res.data);
  };

  const resetAndCloseModal = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Update A User"
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalOpen}
      onOk={handleClick}
      onCancel={() => resetAndCloseModal()}
      maskClosable={false}
      okText="Save"
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
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
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
  );
};

export default UpdateUserModal;
