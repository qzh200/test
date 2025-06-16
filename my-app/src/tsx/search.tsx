import '../css/search.css'
import {useState} from 'react';

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
        <div className="search-container">
            <div className="search-header">
                <h1 className="search-title">这是一个搜索框</h1>
                <div className="search-controls">
                    <div className="bing-toggle">
                        <label>
                            <input 
                                type="checkbox" 
                                checked={useBing}
                                onChange={(e) => setUseBing(e.target.checked)}
                            />
                            <span>使用Bing搜索</span>
                        </label>
                    </div>
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="输入搜索内容..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        <button 
                            onClick={useBing ? searchbing : handleSearch}
                            className="search-button"
                        >
                            搜索
                        </button>
                    </div>
                </div>
            </div>
            <div className="search-results">
                {searchResults.length > 0 ? (
                    <ul className="results-list">
                        {searchResults.map((result, index) => (
                            <li key={index} className="result-item">{result}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="no-results">没有找到匹配的结果</p>
                )}
            </div>
        </div>
    );
}

export default Search;