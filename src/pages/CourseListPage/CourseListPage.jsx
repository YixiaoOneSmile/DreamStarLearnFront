import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 引入 Link 组件
import { getCourses } from '../../api/index.js';
import { List, Card, Button } from 'antd';

const CourseListPage = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCourses();
        setCourses(response.data);
      } catch (error) {
        // 显示错误信息
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={courses}
        renderItem={(course) => (
          <List.Item>
            <Card
              title={course.title}
              extra={
                // 使用 Link 组件替换 Button 组件
                <Link to={`/courses/${course._id}`}>
                  <Button type="primary">View</Button>
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
