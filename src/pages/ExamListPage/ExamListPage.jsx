import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getExams } from '../../api/index.js';
import { List, Card } from 'antd';

const ExamListPage = () => {
  const [exams, setExams] = useState([]);

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
