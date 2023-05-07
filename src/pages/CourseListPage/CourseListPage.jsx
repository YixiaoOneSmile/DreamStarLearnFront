import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { getCourses } from '../../api/index.js';
import { List, Card, Button } from 'antd';

const CourseListPage = () => {
  const [courses, setCourses] = useState([]);  
  // const history = useHistory();
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
              // extra={
              //   <Button
              //     type="primary"
              //     onClick={() => history.push(`/courses/${course._id}`)}
              //   >
              //     View
              //   </Button>
              // }
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
