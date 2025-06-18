import {useState} from 'react';
import { Layout, Typography, Button, Space, Card } from 'antd';
const { Title, Text } = Typography;
const { Content } = Layout;
import CustomHeader from './header';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            alert('不能再减了');
        }
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <CustomHeader />
            <Content style={{ padding: '24px' }}>
                <Card title="计数器" style={{ maxWidth: '500px', margin: '0 auto' }}>
                    <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
                        <Title level={3}>点击次数：{count}</Title>
                        <Space size="middle">
                            <Button type="primary" size="large" onClick={increment}>+1</Button>
                            <Button type="default" size="large" onClick={decrement} disabled={count <= 0}>-1</Button>
                            <Button type="dashed" size="large" onClick={reset}>重置</Button>
                        </Space>
                    </Space>
                </Card>
            </Content>
        </Layout>
    );
}

export default Counter;