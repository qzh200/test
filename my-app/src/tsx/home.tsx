import { Link } from 'react-router-dom';
import '../css/home.css';
function Home() {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>欢迎来到应用首页</h1>
                <p className="subtitle">请选择您想要使用的功能</p>
            </header>
            
            <nav className="menu-grid">
                <Link to="/tic-tac-toe" className="menu-card">
                    <h3>井字棋游戏</h3>
                    <p>经典的三连棋游戏</p>
                </Link>
                
                <Link to="/counter" className="menu-card">
                    <h3>计数器</h3>
                    <p>简单的数字计数器</p>
                </Link>
                
                <Link to="/search" className="menu-card">
                    <h3>搜索页面</h3>
                    <p>快速查找您需要的内容</p>
                </Link>
            </nav>
        </div>
    );
}
export default Home;