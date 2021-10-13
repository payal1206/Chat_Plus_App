import React from "react";

import { Button, Col, Form, Row, Input, Typography } from "antd";

const { Title, Text } = Typography;

function Form1() {
  return (
    <>
      <Title style={{}}>CHAT+APP LOGIN</Title>
      <Form
        style={{
          align: "middle",
          justify: "center",
          padding: "150px",
          color: "black",
        }}
      >
        <Form.Item
          style={{
            fontSize: "20px",
          }}
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input a valid email!",
              type: "email",
            },
          ]}
        >
          <Input
            style={{ width: "200px", color: "black", height: "15px" }}
            placeholder="example@.com"
          />
        </Form.Item>
        <br />
        <Form.Item
          style={{
            fontSize: "20px",
          }}
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter password",
            },
          ]}
        >
          <Input.Password
            style={{ width: "350px", color: "black" }}
            placeholder="*****"
          />
        </Form.Item>
        <br />
        <Form.Item>
          <Button
            type="secondary"
            htmlType="submit"
            block
            style={{
              borderRadius: "70px",
              width: "120px",
              color: "blue",
              fontSize: "20px",
            }}
          >
            {" "}
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Form1;
