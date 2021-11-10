import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { Addcontact } from "../../../../redux-store/actions/contact";

function AddForm(props) {
  const onFinish = (values) => {
    // console.log("Success:", values);
    props.addcontact({ ...values, user_id: props.user_id, id: Date.now() });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="username"
        rules={[
          {
            required: true,
            message: "Please Enter  Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="Email"
        rules={[
          {
            required: true,
            message: "Please Enter Email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Contact Number"
        name="contact"
        rules={[
          {
            required: true,
            message: "Please Enter Contact Number !",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 10,
          span: 30,
        }}
      >
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}
const mapStateToProps = (state) => ({
  user_id: state.auth_slice.user.id,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addcontact: (data) => dispatch(Addcontact(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
