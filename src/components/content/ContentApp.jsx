import React, { Fragment, useState, useRef, useEffect } from "react";
import { Tabs, PageHeader, Table, Input, Row, Col, Select, Radio, Space, Button } from 'antd';
import { PlusOutlined, DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import * as API from '../../services/api';

const { TabPane } = Tabs;
const { Option } = Select;

export function ContentApp() {
    const columns = [
            {
                title: 'División',
                dataIndex: 'name',
                key: 'name',
                sorter: (a, b) => a.name - b.name,
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
                dataIndex: 'number_collaborators',
                key: 'number_collaborators',
                sorter: (a, b) => a.number_collaborators - b.number_collaborators,
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
                dataIndex: 'ambassador',
                key: 'ambassador',
            },
        ];

    const { selectedRowKeys } = useState();
    const rowSelection = {
      selectedRowKeys,
    };

    const [dataSource, setDataSource] = useState([]);
    const searchInputRef = useRef();
    const [searchColumn, setSearchColumn] = useState('name');

    useEffect( () => {
        API.getAllDivisions().then(setDataSource);
    }, [])

    const handleSearch = () => {
        const search = searchInputRef.current.input.value;
        
        if (search === '') {
            clearDataFiletered()
            return;
        }

        const filteredData = dataSource.filter(entry =>
            entry[searchColumn].includes(search)
        );

        setDataSource(filteredData);
    }

    const clearDataFiletered = () => {
        API.getAllDivisions().then(setDataSource);
    }

    return (
        <PageHeader
            className="site-page-header-responsive"
            title="Organización"
            extra={[
                <Button key="3" type="primary" icon={<PlusOutlined />} />,
                <Button key="2" icon={<DownloadOutlined />} />,
                <Button key="1" icon={<UploadOutlined />} />,
              ]}
            footer={
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Divisiones" key="1">
                        <Row style={{ marginBottom: 24, marginTop: 24 }}>
                            <Col span={8}>
                                <Radio.Group defaultValue="list">
                                    <Radio.Button value="list">Listado</Radio.Button>
                                    <Radio.Button value="tree">Arbol</Radio.Button>
                                </Radio.Group>
                            </Col>
                            <Col span={8} offset={8}>
                                <Space>
                                    <Select onChange={value => { setSearchColumn(value); }}  defaultValue="name" style={{ width: 200 }}>
                                        <Option value="name">División</Option>
                                        <Option value="superior_division">División Superior</Option>
                                        <Option value="ambassador">Embajador</Option>
                                    </Select>
                                    <Input style={{ width: 300 }} placeholder="Buscar..." allowClear ref={searchInputRef} onKeyUp={handleSearch} />
                                </Space>
                            </Col>
                        </Row>
                        
                        <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource}  showSizeChanger pagination={{ position: ['none', 'bottomRight'] }} />
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