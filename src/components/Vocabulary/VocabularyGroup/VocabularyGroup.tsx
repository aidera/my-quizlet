import React, { useEffect, useState } from 'react';
import { Button, PageHeader, Space } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  DeleteFilled,
  EditFilled,
  FileAddFilled,
  PlayCircleFilled,
} from '@ant-design/icons';

import { vocabularyAPI } from '../../../api/vocabulary';
import { IVocabularyTerm } from '../../../models/vocabulary';

const VocabularyGroup = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [terms, setTerms] = useState<IVocabularyTerm[]>();
  const [groupName, setGroupName] = useState<string>();

  const columns: ColumnsType<IVocabularyTerm> = [
    {
      title: '',
      key: 'index',
      render: (_, __, index) => {
        return index + 1;
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Button type="text" shape="circle" icon={<EditFilled />} />
          <Button type="text" shape="circle" icon={<DeleteFilled />} />
        </Space>
      ),
    },
    {
      title: 'Main phrase',
      dataIndex: 'mainPhrase',
      key: 'mainPhrase',
    },
    {
      title: 'Translation',
      dataIndex: 'secondaryPhrase',
      key: 'secondaryPhrase',
    },
  ];

  useEffect(() => {
    if (id) {
      vocabularyAPI.getVocabularyTerms(id).then((response) => {
        setTerms(response);
      });

      setGroupName('Some random Group name');
    }
  }, [id]);

  return (
    <div>
      <PageHeader
        title={groupName}
        onBack={() => {
          navigate('./../');
        }}
        extra={[
          <Link key="1" to={`./training`}>
            <Button type="primary" icon={<PlayCircleFilled />}>
              Start Learning
            </Button>
          </Link>,
          <Button key="2" type="default" icon={<FileAddFilled />}>
            Add Term
          </Button>,
          <Button key="3" type="default" icon={<EditFilled />}>
            Edit Group
          </Button>,
          <Button key="4" type="text" danger>
            Remove Group
          </Button>,
        ]}
      />

      <Table
        columns={columns}
        dataSource={terms}
        rowKey={(record) => record.id}
        pagination={false}
        showHeader={false}
      />
    </div>
  );
};

export default VocabularyGroup;
