import {
  IVocabularyGroup,
  IVocabularyTerm,
} from './../models/vocabulary';
import axios from 'axios';

import vocabularyGroups from '../data/vocabularyGroups.json';
import vocabularyTerms from '../data/vocabularyTerms.json';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost/',
});

export const vocabularyAPI = {
  getVocabularyGroups(): Promise<IVocabularyGroup[]> {
    return Promise.resolve(vocabularyGroups);
  },
  getVocabularyTerms(groupId: string): Promise<IVocabularyTerm[]> {
    return Promise.resolve(vocabularyTerms);
  },
};
