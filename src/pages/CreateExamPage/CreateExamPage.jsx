import React from 'react';
// import { useHistory } from 'react-router-dom';
import { createExam } from '../../api/index.js';
import { Form, Input, Button } from 'antd';

const CreateExamPage = () => {
  // const history = useHistory();

  const onFinish = async (values) => {
    try {
      const response = await createExam(values);
      // history.push('/exams');
    } catch (error) {
      // 显示错误信息
    }
  };

  return (
    <div>
      <h1>Create Exam</h1>
      <Form onFinish={onFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input the exam title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input the exam description!' }]}
        >
          <Input.TextArea />
        </Form.Item>
        {/* 在此处添加其他表单字段，如题库选择、考试时间、考试时长等 */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Exam
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateExamPage;
