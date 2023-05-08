import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Menu, Descriptions, Card, Row, Col } from 'antd';
import { VideoCameraOutlined, FilePdfOutlined } from '@ant-design/icons';
// import { getCourse } from '../../api/index.js'; // 原本的获取课程数据的方法

const { Content, Sider } = Layout;

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        // const response = await getCourse(courseId);
        // setCourse(response.data);
        
        // 使用测试数据，而非从后端获取数据
        setCourse({
          "_id": "6094f5beaa6f364d6eae9d9c",
          "title": "React Basics",
          "description": "This course covers the basics of React development.",
          "chapters": [
            {
              "_id": "6094f5beaa6f364d6eae9d9d",
              "title": "虚拟数据1",
              "description": "In this chapter, we'll introduce the basics of React and how to get started with it.",
              "type": "video",
              "url": "http://tongque.xyz/vedio/2.mp4"
            },
            {
              "_id": "6094f5beaa6f364d6eae9d9e",
              "title": "虚拟数据2",
              "description": "In this chapter, we'll learn about React components and how to create and use them.",
              "type": "pdf",
              "url": "http://tongque.xyz/Git.pdf"
            },
            {
              "_id": "6094f5beaa6f364d6eae9d9f",
              "title": "虚拟数据3",
              "description": "In this chapter, we'll learn about React hooks and how to use them to manage state in our components.",
              "type": "video",
              "url": "https://www.bilibili.com/54762736-9fed-4847-b5df-f9acdb9b8ab7"
            }
          ]
        });
      } catch (error) {
        // 显示错误信息
      }
    };
    fetchCourse();

  }, [courseId]);

  const handleChapterSelect = (chapter) => {
    setSelectedChapter(chapter);
  };

  if (!course) {
    return <div>Loading...</div>;
  }


  return (
    <Layout>
      <Content>
        <Row>
          <Col span={24}>
            <Card title={course.title} style={{ marginBottom: '20px' }}>
              <Descriptions column={1}>
                <Descriptions.Item label="Description">{course.description}</Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col span={18} offset={3}>
            {selectedChapter && (
              <>
                <h2>{selectedChapter.title}</h2>
                <p>{selectedChapter.description}</p>
                {selectedChapter.type === 'video' ? (
                  <video width="100%" height="auto" controls>
                    <source src={selectedChapter.url} type="video/mp4" />
                  </video>
                ) : selectedChapter.type === 'pdf' ? (
                  <embed
                    src={selectedChapter.url}
                    width="100%"
                    height="500"
                    type="application/pdf"
                    style={{ display: 'block', margin: '0 auto' }}
                  />
                ) : (
                  <p>Unsupported chapter type</p>
                )}
              </>
            )}
          </Col>
          <Col span={3}>
            <Sider width={200} theme="light">
              <Menu mode="vertical">
                {course.chapters.map((chapter) => (
                  <Menu.Item
                    key={chapter._id}
                    icon={chapter.type === 'video' ? <VideoCameraOutlined /> : <FilePdfOutlined />}
                    onClick={() => handleChapterSelect(chapter)}
                  >
                    {chapter.title}
                  </Menu.Item>
                ))}
              </Menu>
            </Sider>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default CourseDetailsPage;
