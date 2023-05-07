import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourse} from '../../api/index.js';
import { Descriptions, Collapse } from 'antd';

const { Panel } = Collapse;

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await getCourse(courseId);
        setCourse(response.data);
      } catch (error) {
        // 显示错误信息
      }
    };

    fetchCourse();
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <Descriptions>
        <Descriptions.Item label="Description">{course.description}</Descriptions.Item>
      </Descriptions>
      <h2>Chapters</h2>
      <Collapse>
        {course.chapters.map((chapter) => (
          <Panel header={chapter.title} key={chapter._id}>
            <p>{chapter.description}</p>
            {/* Render video or PDF based on the type */}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default CourseDetailsPage;
