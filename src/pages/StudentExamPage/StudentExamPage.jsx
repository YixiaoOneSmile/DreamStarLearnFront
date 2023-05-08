import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getExam, submitExam } from '../../api/index.js';
import { Radio, Button, Form } from 'antd';

const StudentExamPage = () => {
  const { examId } = useParams();
  const [exam, setExam] = useState(null);

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const response = await getExam(examId);
        setExam(response.data);
      } catch (error) {
        // 显示错误信息
      }
    };

    fetchExam();
  }, [examId]);

  const onFinish = async (values) => {
    try {
      const response = await submitExam(values);
      // 处理考试提交后的逻辑，例如跳转到考试结果页面
      // 示例：history.push(`/exam-result/${response.data.resultId}`);
    } catch (error) {
        // 显示错误信息
      }
    };
  
    if (!exam) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>{exam.title}</h1>
        <Form onFinish={onFinish}>
          {exam.questions.map((question) => (
            <Form.Item
              label={question.question}
              name={question._id}
              key={question._id}
              rules={[{ required: true, message: 'Please select an answer!' }]}
            >
              <Radio.Group>
                {question.options.map((option, index) => (
                  <Radio value={index} key={index}>
                    {option}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>
          ))}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit Exam
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };
  
  export default StudentExamPage;
  