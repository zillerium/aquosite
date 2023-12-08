import Head from 'next/head';
import { Container, Row, Col, Image } from 'react-bootstrap';
import FeatureList from '../components/FeatureList'; // Import the FeatureList component

export default function Home() {
  return (
    <div className="custom-background"> {/* Apply the custom-background class here */}
      <Head>
        <title>The Future of DEFI Composition</title>
        <meta name="description" content="Your DEFI Composition description goes here" />
      </Head>

      <Container className="mt-5 text-center">
        <Row>
          <Col>
            <h1>The Future of DeFi Composition</h1>
            <Image src="/deficomposition.png" alt="DEFI Composition Image" fluid />
          </Col>
        </Row>
      </Container>
	   <FeatureList />
    </div>
  );
}

