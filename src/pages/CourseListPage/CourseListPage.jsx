import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCourses } from '../../api/index.js';
import { List, Card, Button, Typography } from 'antd';

const { Title } = Typography;

const CourseListPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCourses();
        setCourses(response.data.data);
      } catch (error) {
        // 显示错误信息
      }
    };
    fetchCourses();
  }, []);

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>启梦课程</Title>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={courses}
        renderItem={(course) => (
          <List.Item>
            <Card
              hoverable
              style={{ width: '100%' }}
              title={course.name}
              extra={
                <Link to={`/courses/${course._id}`}>
                  <Button type="primary">详情</Button>
                </Link>
              }
            >
              <p>{course.description}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CourseListPage;
