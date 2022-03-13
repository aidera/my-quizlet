import React, { useEffect, useState } from 'react';
import { Button, Space } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import { Link, useParams } from 'react-router-dom';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

import { vocabularyAPI } from '../../../api/vocabulary';
import { IVocabularyTerm } from '../../../models/vocabulary';

const VocabularyGroup = () => {
  const { id } = useParams();

  const [terms, setTerms] = useState<IVocabularyTerm[]>();

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
    }
  }, [id]);

  return (
    <div>
      <Table
        columns={columns}
        dataSource={terms}
        rowKey={(record) => record.id}
        pagination={false}
        showHeader={false}
      />

      <br />

      <Link to={`../`}>
        <Button type="link">Back</Button>
      </Link>
    </div>
  );
};

export default VocabularyGroup;
