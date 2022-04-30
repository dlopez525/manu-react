import React from "react";
import { Layout } from 'antd';
import { HeaderApp } from "./components/HeaderApp";

const { Content, Footer } = Layout;

export function App() {
    return (
        <Layout>
            <HeaderApp />
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    Content
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}></Footer>
        </Layout>
    );
}