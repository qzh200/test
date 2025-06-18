import React, {useState} from 'react';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {Link} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];
interface CustomHeaderProps {
    children?: React.ReactNode;
}

const items: MenuItem[] = [
    {
        key: 'Menu',
        label: (
            <Link to="/">
                首页
            </Link>
        ),
    },
    {
        key: 'TicTacToe',
        label: (
            <Link to="/tic-tac-toe">
                井字棋
            </Link>
        ),
    },
        {
        key: 'counter',
        label: (
            <Link to="/counter">
                计数器
            </Link>
        ),
    },
        {
        key: 'search',
        label: (
            <Link to="/search">
                搜索
            </Link>
        ),
    },
];
const CustomHeader: React.FC<CustomHeaderProps> = () => {

    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e: { key: React.SetStateAction<string>; }) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>;
};
export default CustomHeader;