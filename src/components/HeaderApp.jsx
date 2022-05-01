import React from "react";
import { Layout, Menu } from 'antd';
import './headerApp.css';

const { Header } = Layout;

export function HeaderApp() {
    const navItems = [
        { name: 'Dashboard'},
        { name: 'Organización'},
        { name: 'Modelos'},
        { name: 'Seguimiento'},
    ];

    return (
        <Header className="headerApp" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
                className="menuApp"
                mode="horizontal"
                defaultSelectedKeys={['0']}
            >
                {navItems.map((item) => (
                    <Menu.Item className="menuItemApp" key={item.name}>
                        {item.name}
                    </Menu.Item>
                ))}
                
            </Menu>
        </Header>
    );
}