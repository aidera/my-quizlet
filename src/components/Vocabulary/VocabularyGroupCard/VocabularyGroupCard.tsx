import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

import { IVocabularyGroup } from '../../../models/vocabulary';

type PropsType = {
  group: IVocabularyGroup,
};

const VocabularyGroupCard = (props: PropsType) => {
  const { group } = props;

  return (
    <Link to={group.id}>
      <Card title={group.name}>
        <p>
          <span>{group.termsCount}</span> terms
        </p>
      </Card>
    </Link>
  );
};

export default VocabularyGroupCard;
