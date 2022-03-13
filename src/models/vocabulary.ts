export interface IVocabularyGroup {
  id: string;
  name: string;
  termsCount: number;
}

export interface IVocabularyTerm {
  id: string;
  groupId: string;
  mainPhrase: string;
  secondaryPhrase: string;
  mainLanguage: string;
  secondaryLanguage: string;
}
