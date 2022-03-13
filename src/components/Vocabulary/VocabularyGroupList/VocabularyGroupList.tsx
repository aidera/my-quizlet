import React, { useEffect, useState } from 'react';

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
    <div className={styles.list}>
      {groups?.map((group) => {
        return <VocabularyGroupCard group={group} key={group.id} />;
      })}
    </div>
  );
};

export default VocabularyGroupList;
