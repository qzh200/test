import {Link} from 'react-router-dom';
import {Layout, Typography, Row, Col, Card} from 'antd';
import CustomHeader from './header';

const {Header, Content} = Layout;
const {Title, Text} = Typography;

function Home() {
    return (
        <>
            <CustomHeader>
                </CustomHeader>
            <Layout style={{minHeight: '100vh', padding: '24px'}}>
                <Header style={{background: 'transparent', textAlign: 'center'}}>
                    <Title level={2}>欢迎来到应用首页</Title>
                    <Text type="secondary">请选择您想要使用的功能</Text>
                </Header>

                <Content style={{padding: '24px'}}>
                    <Row gutter={[24, 24]} justify="center">
                        <Col xs={24} sm={12} md={8} lg={8}>
                            <Link to="/tic-tac-toe">
                                <Card hoverable title="井字棋游戏" style={{height: '100%'}}>
                                    <Text>经典的三连棋游戏</Text>
                                </Card>
                            </Link>
                        </Col>

                        <Col xs={24} sm={12} md={8} lg={8}>
                            <Link to="/counter">
                                <Card hoverable title="计数器" style={{height: '100%'}}>
                                    <Text>简单的数字计数器</Text>
                                </Card>
                            </Link>
                        </Col>

                        <Col xs={24} sm={12} md={8} lg={8}>
                            <Link to="/search">
                                <Card hoverable title="搜索页面" style={{height: '100%'}}>
                                    <Text>快速查找您需要的内容</Text>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </>
    );
}

export default Home;