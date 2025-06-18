import {useState, type SetStateAction} from 'react';
import {Layout, Card, Input, Button, Checkbox, List, Typography, Space} from 'antd';

const {Title} = Typography;
const {Content} = Layout;
import CustomHeader from './header';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<string[]>([]);

    const handleSearch = () => {
        const mockResults = ['结果1', '结果2', '结果3'].filter(item =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(mockResults);
    };
    const [useBing, setUseBing] = useState(false);

    const searchbing = () => {
        window.location.href = "https://cn.bing.com/search?q=" + searchTerm;
    }
    return (
        <Layout style={{minHeight: '100vh'}}>
            <CustomHeader/>
            <Content style={{padding: '24px'}}>
                <Card headerStyle={{ textAlign: 'center' }} style={{ maxWidth: 800, margin: '0 auto' }}>
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <Space direction="vertical" size="large" style={{ width: '100%' }}>
                        <Title level={3}>这是一个搜索框</Title>
                        <Space direction="vertical" size="middle">
                            <Checkbox
                                checked={useBing}
                                onChange={(e: {
                                    target: { checked: boolean | ((prevState: boolean) => boolean); };
                                }) => setUseBing(e.target.checked)}
                            >
                                使用Bing搜索
                            </Checkbox>

                            <Space.Compact style={{width: '100%'}}>
                                <Input
                                    placeholder="输入搜索内容..."
                                    value={searchTerm}
                                    onChange={(e: { target: { value: SetStateAction<string>; }; }) => setSearchTerm(e.target.value)}
                                    onPressEnter={useBing ? searchbing : handleSearch}
                                />
                                <Button
                                    type="primary"
                                    onClick={useBing ? searchbing : handleSearch}
                                >
                                    搜索
                                </Button>
                            </Space.Compact>
                        </Space>

                        <div className="search-results">
                            {searchResults.length > 0 ? (
                                <List
                                    dataSource={searchResults}
                                    bordered
                                    renderItem={(item, index) => (
                                        <List.Item key={index}>
                                            <Typography.Text>{item}</Typography.Text>
                                        </List.Item>
                                    )}
                                />
                            ) : (
                                <div style={{ textAlign: 'center', padding: '24px' }}>
                                    没有找到匹配的结果
                                </div>
                            )}
                        </div>
                    </Space>
                  </div>
                </Card>
            </Content>
        </Layout>
    );
}

export default Search;