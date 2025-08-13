import { Button, Input } from "antd";
import { useState } from "react";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  //   console.log(">>> check form: ", fullName, email, password, phoneNumber);

  const handleClick = () => {
    // alert("Click me");
    console.log(">>> Check form data when click: ", {
      fullName,
      email,
      password,
      phoneNumber,
    });
  };

  return (
    <div className="user-form" style={{ margin: "20px 50px" }}>
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
        <div>
          <Button type="primary" onClick={handleClick}>
            Create user
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
