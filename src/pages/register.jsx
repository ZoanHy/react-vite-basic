import { Button, Input, Form, Checkbox } from "antd";

const RegisterPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <div
        style={{
          margin: "50px",
        }}
      >
        <Form.Item
          label="Full Name"
          name="fullName"
          // rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          // rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          // rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Phone number"
          name="phone"
          // rules={[{ required: true, message: "Please input your phone number!" }]}
        >
          <Input />
        </Form.Item>

        {/* <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Register
        </button> */}
        <div>
          <Button type="primary" onClick={() => form.submit()}>
            Register
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default RegisterPage;
