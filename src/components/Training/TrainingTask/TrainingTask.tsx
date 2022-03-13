import React from 'react';
import { Button, Card, Form, Input } from 'antd';

import styles from './TrainingTask.module.scss';
import { ITrainingTask } from '../../../models/training';

type PropsType = {
  task: ITrainingTask,
  submitTask: (task: ITrainingTask, answer: string) => void,
};

const TrainingTask = (props: PropsType) => {
  const { task, submitTask } = props;

  const submit = (form: { [key: string]: any }) => {
    submitTask(task, form.mainPhrase);
  };

  return (
    <Card className={styles.card}>
      <Form name="basic" onFinish={submit} autoComplete="off">
        <p>{task.secondaryPhrase}</p>
        <Form.Item
          name="mainPhrase"
          rules={[{ required: true, message: 'Please input your answer!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Continue
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default TrainingTask;
