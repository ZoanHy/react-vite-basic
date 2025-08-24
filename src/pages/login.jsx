import { ArrowRightOutlined, RightOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Row,
  message,
  notification,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../services/api.service";
import { useState } from "react";

const LoginPage = () => {
  const [api, contextHolder] = notification.useNotification();
  const [messageApi, contextHolderMessage] = message.useMessage();

  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  let navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);

    // console.log("Success:", values);

    const res = await loginAPI(values.email, values.password);

    if (res.data) {
      messageApi.open({
        type: "success",
        content: "Login user successfully",
      });
      // setLoading(false);
      navigate("/");
    } else {
      api.error({
        message: "Error login",
        description: JSON.stringify(res.message),
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row style={{ justifyContent: "center" }}>
      {contextHolder}
      {contextHolderMessage}
      <Col xs={24} sm={20} md={12} lg={8}>
        <Card
          title="Đăng nhập"
          style={{
            marginTop: "30px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Form
            form={form}
            layout="vertical"
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            // style={{ marginTop: "30px" }}
          >
            <Row style={{ justifyContent: "center" }}>
              <Col span={24}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                    {
                      required: true,
                      type: "email",
                      message: "Email không đúng định dạng",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row style={{ justifyContent: "center" }}>
              <Col span={24}>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </Col>
            </Row>

            <Row style={{ justifyContent: "center" }}>
              <Col
                span={24}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Form.Item>
                  <Button
                    loading={loading}
                    type="primary"
                    onClick={() => {
                      form.submit();
                    }}
                  >
                    Login
                  </Button>
                </Form.Item>
                <Link to="/">
                  Go to home page <ArrowRightOutlined />
                </Link>
              </Col>
            </Row>

            <Divider />

            <Row style={{ justifyContent: "center", textAlign: "center" }}>
              <Col span={24}>
                <span>Chưa có tài khoản? </span>
                <Link to="/register">Đăng ký tại đây</Link>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginPage;
