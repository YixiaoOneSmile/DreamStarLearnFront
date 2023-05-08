import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getExamResult } from '../../api/index.js';
import { Result, Button } from 'antd';

const StudentExamResultPage = () => {
  const { resultId } = useParams();
  const [examResult, setExamResult] = useState(null);

  useEffect(() => {
    const fetchExamResult = async () => {
      try {
        const response = await getExamResult(resultId);
        setExamResult(response.data);
      } catch (error) {
        // 显示错误信息
      }
    };

    fetchExamResult();
  }, [resultId]);

  if (!examResult) {
    return <div>Loading...</div>;
  }

  const { score, totalQuestions } = examResult;

  return (
    <div>
      <Result
        status="success"
        title="Exam Completed"
        subTitle={`You scored ${score} out of ${totalQuestions}.`}
        extra={[
          <Button type="primary" key="goBack">
            Go Back
          </Button>,
        ]}
      />
    </div>
  );
};

export default StudentExamResultPage;
