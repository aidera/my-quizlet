export interface ITrainingTask {
  termId: string;
  isProcessed: boolean;
  isSucceed: boolean;
  mainLanguage: string;
  secondaryLanguage: string;
  mainPhrase: string;
  secondaryPhrase: string;
}
