import React, { useEffect, useState } from 'react';
import { FolderAddFilled } from '@ant-design/icons';
import { Button, PageHeader } from 'antd';

import { vocabularyAPI } from '../../../api/vocabulary';
import { IVocabularyGroup } from '../../../models/vocabulary';
import VocabularyGroupCard from '../VocabularyGroupCard/VocabularyGroupCard';
import styles from './VocabularyGroupList.module.scss';

const VocabularyGroupList = () => {
  const [groups, setGroups] = useState<IVocabularyGroup[]>();

  useEffect(() => {
    vocabularyAPI.getVocabularyGroups().then((response) => {
      setGroups(response);
    });
  }, []);

  return (
    <div>
      <PageHeader
        title="Groups"
        extra={[
          <Button key="1" type="default" icon={<FolderAddFilled />}>
            Add Group
          </Button>,
        ]}
      />

      <div className={styles.list}>
        {groups?.map((group) => {
          return <VocabularyGroupCard group={group} key={group.id} />;
        })}
      </div>
    </div>
  );
};

export default VocabularyGroupList;
