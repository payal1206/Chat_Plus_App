import React from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { Addcontact } from "../../../../redux-store/actions/contact";
import { addContactToFirestore } from "../../../../firebase/database";

function AddForm(props) {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    form.resetFields(); //reset form
    //add contact to firestore
    const res = await addContactToFirestore({
      ...values,
      user_id: props.user_id,
    });
    if (res.id) {
      //add contact to redux store
      props.addcontact({ ...values, user_id: props.user_id, id: res.id });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 16,
      }}
      form={form}
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
        label="Phone"
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
          span: 16,
          offset: 5,
        }}
      >
        <Button
          style={{ width: "100%" }}
          type="primary"
          htmlType="submit"
          onClick={props.closeForm}
        >
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
