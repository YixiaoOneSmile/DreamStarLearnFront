import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Menu, Descriptions, Card, Row, Col, Typography } from 'antd';
import { VideoCameraOutlined, FilePdfOutlined } from '@ant-design/icons';
import { getCourse } from '../../api/index.js';

const { Content, Sider } = Layout;
const { Title } = Typography;

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await getCourse(courseId);
        setCourse(response.data.data);
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
    <Layout style={{ padding: '24px' }}>
      <Content>
        <Row gutter={[16, 24]}>
          <Col span={24}>
            <Title level={2}>{course.name}</Title>
            <Card>
              <Descriptions column={1}>
                <Descriptions.Item label="Course Description">{course.description}</Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Chapters" bordered={false}>
              <Menu mode="vertical" style={{ borderRight: 0 }}>
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
            </Card>
          </Col>
          <Col span={18}>
            {selectedChapter && (
              <>
                <h2>{selectedChapter.title}</h2>
                <p>{selectedChapter.description}</p>
                {selectedChapter.videoURL && (
                  <div>
                    <video width="100%" height="auto" controls>
                      <source src={selectedChapter.videoURL} type="video/mp4" />
                    </video>
                  </div>
                )}
                {selectedChapter.pdfURL && (
                  <div>
                    <h3>PDF</h3>
                    <embed
                      src={selectedChapter.pdfURL}
                      width="100%"
                      height="500"
                      type="application/pdf"
                      style={{ display: 'block', margin: '0 auto' }}
                    />
                  </div>
                )}
              </>
            )}

          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default CourseDetailsPage;
