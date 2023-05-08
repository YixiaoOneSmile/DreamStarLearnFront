import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getExams } from '../../api/index.js';
import { List, Card } from 'antd';

const mockExams = [
  {
    _id: '1',
    title: 'Exam 1',
    description: 'This is a description for Exam 1.',
  },
  {
    _id: '2',
    title: 'Exam 2',
    description: 'This is a description for Exam 2.',
  },
  {
    _id: '3',
    title: 'Exam 3',
    description: 'This is a description for Exam 3.',
  },
  {
    _id: '4',
    title: 'Exam 4',
    description: 'This is a description for Exam 4.',
  },
];

const ExamListPage = () => {
  const [exams, setExams] = useState([mockExams]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await getExams();
        setExams(response.data);
      } catch (error) {
        // 显示错误信息
      }
    };

    fetchExams();
  }, []);

  return (
    <div>
      <h1>Exams</h1>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={exams}
        renderItem={(exam) => (
          <List.Item>
            <Card
              title={exam.title}
              extra={
                <Link to={`/exams/${exam._id}`}>
                  View
                </Link>
              }
            >
              <p>{exam.description}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ExamListPage;
