import React, { Fragment, useState, useRef, useEffect } from "react";
import { Tabs, PageHeader, Table, Input, Row, Col, Select } from 'antd';
import * as API from '../../services/api';

const { TabPane } = Tabs;
const { Option } = Select;

export function ContentApp() {
    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            division: `John Brown ${i}`,
            superior_division: `John Brown ${i}`,
            collaborators: 32,
            level: 3,
            subdivisions: 3,
            ambassadors: `New York No. 1 Lake Park ${i}`,
        });
    }
    const columns = [
            {
                title: 'División',
                dataIndex: 'division',
                key: 'division',
                sorter: (a, b) => a.division - b.division,
                filters: [
                    {
                        text: 'Joe',
                        value: 'Joe',
                    },
                    {
                        text: 'Category 1',
                        value: 'Category 1',
                    },
                    {
                        text: 'Category 2',
                        value: 'Category 2',
                    },
                ],
                filterSearch: true,
                onFilter: (value, record) => record.division.startsWith(value),
                width: '30%',
            },
            {
                title: 'División Superior',
                dataIndex: 'superior_division',
                key: 'superior_division',
                sorter: (a, b) => a.superior_division - b.superior_division,
                filters: [
                    {
                        text: 'Joe',
                        value: 'Joe',
                    },
                    {
                        text: 'Category 1',
                        value: 'Category 1',
                    },
                    {
                        text: 'Category 2',
                        value: 'Category 2',
                    },
                ],
                filterSearch: true,
                onFilter: (value, record) => record.superior_division.startsWith(value),
                width: '30%',
            },
            {
                title: 'Colaboradores',
                dataIndex: 'collaborators',
                key: 'collaborators',
                sorter: (a, b) => a.collaborators - b.collaborators,
            },
            {
                title: 'Nivel',
                dataIndex: 'level',
                key: 'level',
                sorter: (a, b) => a.level - b.level,
                filters: [
                    {
                        text: 'Joe',
                        value: 'Joe',
                    },
                    {
                        text: 'Category 1',
                        value: 'Category 1',
                    },
                    {
                        text: 'Category 2',
                        value: 'Category 2',
                    },
                ],
                filterSearch: true,
                onFilter: (value, record) => record.level.startsWith(value),
                width: '30%',
            },
            {
                title: 'Subdivisiones',
                dataIndex: 'subdivisions',
                key: 'subdivisions',
                sorter: (a, b) => a.subdivisions - b.subdivisions,
            },
            {
                title: 'Embajadores',
                dataIndex: 'ambassadors',
                key: 'ambassadors',
            },
        ];

    const [dataSource, setDataSource] = useState(data);
    const searchInputRef = useRef();

    const handleSearch = () => {
        const search = searchInputRef.current.input.value;
        if (search == '') {
            setDataSource(dataSource);
            
            return;
        }

        const filteredData = dataSource.filter(entry =>
            entry.division.includes(search)
        );

        setDataSource(filteredData);
    }

    return (
        <PageHeader
            className="site-page-header-responsive"
            title="Organización"
            footer={
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Divisiones" key="1">
                        <Row>
                            <Col span={8}></Col>
                            <Col span={8} offset={8}>
                                <Select defaultValue="division" style={{ width: 200 }}>
                                    <Option value="division">División</Option>
                                    <Option value="superior_division">División Superior</Option>
                                    <Option value="ambassadors">Embajador</Option>
                                </Select>
                                <Input style={{ width: 300 }} placeholder="Buscar..." ref={searchInputRef} onKeyUp={handleSearch} />
                            </Col>
                        </Row>
                        
                        <Table columns={columns} dataSource={dataSource}  showSizeChanger pagination={{ position: ['none', 'bottomRight'] }} />
                    </TabPane>
                    <TabPane tab="Colaboradores" key="2">
                        Colaboradores Tap
                    </TabPane>
                </Tabs>
            }
        >
        </PageHeader>
    );
}