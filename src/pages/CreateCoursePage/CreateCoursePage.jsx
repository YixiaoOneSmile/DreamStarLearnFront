import React from 'react';
import { Link } from 'react-router-dom';
import { createCourse } from '../../api/index.js';
import { Form, Input, Button } from 'antd';

const CreateCoursePage = () => {

  const onFinish = async (values) => {
    try {
      const response = await createCourse(values);
      // 跳转到课程列表页
      console.log(response)
    } catch (error) {
      // 显示错误信息
    }
  };

  return (
    <div>
      <h1>Create Course</h1>
      <Form onFinish={onFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input the course title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input the course description!' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Course
          </Button>
          <Link to="/courses">Back to Course List</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateCoursePage;
