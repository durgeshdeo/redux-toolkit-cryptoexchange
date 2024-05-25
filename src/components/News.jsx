import React from "react";
import { Typography, Row, Col, Card } from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import moment from "moment";

const { Text, Title } = Typography;

const News = () => {
  const { data: cryptoNews } = useGetCryptoNewsQuery();

  console.log(cryptoNews);

  if (!cryptoNews?.payload) return "Loading...";

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews?.payload.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>
              </div>
              <p>
                {news.summary.length > 100
                  ? `${news.summary.substring(0, 100)}...`
                  : news.summary}
              </p>
              <div className="provider-container">
                <Text>{moment(news.updated_at).startOf("ss").fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
