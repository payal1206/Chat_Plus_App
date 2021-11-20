import React from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { Addcontact } from "../../../../redux-store/actions/contact";

function AddForm(props) {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    form.resetFields();    //reset form
    props.addcontact({ ...values, user_id: props.user_id, id: Date.now() });
  };
  const handleCancel = () => {
    form.resetFields();    //reset form
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
      form={form}
        name="dynamic_ruleEdit"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
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
        name="email"
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
        name="phone"
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
