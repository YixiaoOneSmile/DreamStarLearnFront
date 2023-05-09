import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createCourse, createChapter } from '../../api/index.js';
import { Form, Input, Button, Card, Divider, Typography, Space, Row, Col,Select} from 'antd';

const { Title } = Typography;

const teachers = [
  { id: 'teacher1', name: 'Teacher One' },
  { id: 'teacher2', name: 'Teacher Two' },
];

const CreateCoursePage = () => {
  const [courseId, setCourseId] = useState(null);
  const [currentAction, setCurrentAction] = useState('create');
  const [courseForm] = Form.useForm();
  const [chapterForm] = Form.useForm();

  const onFinishCreateCourse = async (values) => {
    try {
      const response = await createCourse(values);
      console.log(response);
      setCourseId(response.data.data._id);
      courseForm.resetFields();
    } catch (error) {
      console.error(error);
    }
  };

  const onFinishCreateChapter = async (values) => {
    if (!courseId) {
      console.error('Please create a course first.');
      return;
    }

    try {
      await createChapter(courseId, values);
      chapterForm.resetFields();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Row style={{ height: '100vh', padding: '50px' }}>
      <Col span={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
        <Title level={2}>课程管理</Title>
        <Space direction="vertical" size="middle" style={{ marginTop: '50px' }}>
          <Button type={currentAction === 'create' ? "primary" : "default"} onClick={() => setCurrentAction('create')}>创建课程</Button>
          <Button type={currentAction === 'add' ? "primary" : "default"} onClick={() => setCurrentAction('add')}>添加章节</Button>
        </Space>

      </Col>
      <Col span={18}>
        {currentAction === 'create' && (
          <Card style={{ width: '500px', marginTop: '20px' }}>
            <Form form={courseForm} onFinish={onFinishCreateCourse}>
              {<Form form={courseForm} onFinish={onFinishCreateCourse}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: 'Please input the course name!' }]}
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

                <Form.Item
                  label="Teacher"
                  name="teacher"
                  rules={[{ required: true, message: 'Please select the teacher!' }]}
                >
                  <Select>
                    {teachers.map((teacher) => (
                      <Select.Option key={teacher.id} value={teacher.id}>
                        {teacher.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Create Course
                  </Button>
                </Form.Item>
              </Form>
              }
            </Form>
          </Card>
        )}
        {currentAction === 'add' && courseId && (
          <Card style={{ width: '500px', marginTop: '20px' }}>
            <Form form={chapterForm} onFinish={onFinishCreateChapter}>
              {/* 创建章节表单内容 */}
            </Form>
          </Card>
        )}
      </Col>
    </Row>
  );
};

export default CreateCoursePage;
