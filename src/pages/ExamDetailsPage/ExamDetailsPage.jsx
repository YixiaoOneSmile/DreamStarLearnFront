import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getExam } from '../../api/index.js';
import { Descriptions, Collapse } from 'antd';

const { Panel } = Collapse;

const ExamDetailsPage = () => {
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

  if (!exam) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{exam.title}</h1>
      <Descriptions>
        <Descriptions.Item label="Description">{exam.description}</Descriptions.Item>
      </Descriptions>
      <h2>Questions</h2>
      <Collapse>
        {exam.questions.map((question) => (
          <Panel header={question.question} key={question._id}>
            <p>{question.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default ExamDetailsPage;

