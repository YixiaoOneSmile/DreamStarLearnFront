import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getExams } from '../../api/index.js';
import { List, Card, Button } from 'antd';

const ExamListPage = () => {
  const [exams, setExams] = useState([]);
  // const history = useHistory();

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
                <Button
                  type="primary"
                  // onClick={() => history.push(`/exams/${exam._id}`)}
                >
                  View
                </Button>
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
