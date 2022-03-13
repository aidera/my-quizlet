import React, { useState } from 'react';
import { Button, PageHeader } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

import { ITrainingTask } from '../../models/training';
import TrainingTask from './TrainingTask/TrainingTask';

const Training = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState<ITrainingTask[]>([
    {
      termId: '1',
      isProcessed: false,
      isSucceed: false,
      mainLanguage: 'EN',
      mainPhrase: 'hi',
      secondaryLanguage: 'RU',
      secondaryPhrase: 'привет',
    },
    {
      termId: '2',
      isProcessed: false,
      isSucceed: false,
      mainLanguage: 'EN',
      mainPhrase: 'I',
      secondaryLanguage: 'RU',
      secondaryPhrase: 'я',
    },
    {
      termId: '3',
      isProcessed: false,
      isSucceed: false,
      mainLanguage: 'EN',
      mainPhrase: 'you',
      secondaryLanguage: 'RU',
      secondaryPhrase: 'ты',
    },
    {
      termId: '4',
      isProcessed: false,
      isSucceed: false,
      mainLanguage: 'EN',
      mainPhrase: 'he',
      secondaryLanguage: 'RU',
      secondaryPhrase: 'он',
    },
    {
      termId: '5',
      isProcessed: false,
      isSucceed: false,
      mainLanguage: 'EN',
      mainPhrase: 'we',
      secondaryLanguage: 'RU',
      secondaryPhrase: 'мы',
    },
    {
      termId: '6',
      isProcessed: false,
      isSucceed: false,
      mainLanguage: 'EN',
      mainPhrase: 'they',
      secondaryLanguage: 'RU',
      secondaryPhrase: 'они',
    },
  ]);
  const [currentTask, setCurrentTask] = useState<ITrainingTask | null>(
    tasks[0]
  );

  const modifyTaskAnswer = (answer: string): string => {
    return answer.toLowerCase().trim();
  };

  const submitTask = (task: ITrainingTask, answer: string) => {
    const foundTaskIndex = tasks.findIndex((el) => el.termId === task.termId);
    const isSucceed =
      modifyTaskAnswer(task.mainPhrase) === modifyTaskAnswer(answer);

    if (foundTaskIndex >= 0) {
      const newTasks = [...tasks];
      const newTask = {
        ...newTasks[foundTaskIndex],
        isProcessed: true,
        isSucceed,
      };
      newTasks[foundTaskIndex] = {
        ...newTask,
      };

      setTasks(newTasks);

      let nextCurrentTask: ITrainingTask | undefined = newTask;
      if (isSucceed) {
        if (foundTaskIndex >= tasks.length) {
          nextCurrentTask = newTasks[foundTaskIndex + 1];
        } else {
          nextCurrentTask = newTasks.find((el) => !el.isProcessed);
          if (!nextCurrentTask) {
            nextCurrentTask = newTasks.find((el) => !el.isSucceed);
          }
        }
      }

      if (nextCurrentTask) {
        setCurrentTask(nextCurrentTask);
      }
    }
  };

  return (
    <div>
      <PageHeader
        title="Training"
        onBack={() => {
          navigate('./../');
        }}
      />

      {currentTask && (
        <TrainingTask task={currentTask} submitTask={submitTask} />
      )}
    </div>
  );
};

export default Training;
