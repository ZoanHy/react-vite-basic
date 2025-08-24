import {
  Button,
  Input,
  Form,
  Checkbox,
  notification,
  Row,
  Col,
  Divider,
} from "antd";
import { registerUserAPI } from "../services/api.service";
import { Link, useNavigate } from "react-router";

const RegisterPage = () => {
  const [api, contextHolder] = notification.useNotification();
  let navigate = useNavigate();

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    // console.log("Success:", values);

    const res = await registerUserAPI(
      values.fullName,
      values.email,
      values.password,
      values.phone
    );

    if (res.data) {
      api.success({
        message: "Register user successfully",
        description: "Đăng ký user thành công",
      });
      navigate("/login");
    } else {
      api.error({
        message: "Register user failed",
        description: JSON.stringify(res.message),
      });
    }
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
      style={{ marginTop: "30px" }}
    >
      {contextHolder}

      <Row style={{ justifyContent: "center", textAlign: "center" }}>
        <Col xs={24} md={6}>
          <h2>Đăng ký tài khoản</h2>
        </Col>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Col xs={24} md={6}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              { required: true, message: "Please input your full name!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Col xs={24} md={6}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Col xs={24} md={6}>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Col xs={24} md={6}>
          <Form.Item
            label="Phone number"
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
              {
                required: true,
                pattern: new RegExp(/\d+/g),
                message: "Wrong format!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

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
      <Row style={{ justifyContent: "center" }}>
        <Col xs={24} md={6}>
          <Button type="primary" onClick={() => form.submit()}>
            Register
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row style={{ justifyContent: "center" }}>
        <Col xs={24} md={6}>
          <span>Đã có tài khoản? </span>
          <Link to="/login">Đăng nhập tại đây</Link>
        </Col>
      </Row>
    </Form>
  );
};

export default RegisterPage;
