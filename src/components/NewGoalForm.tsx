import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import moment from 'moment';

import { INewGoalFormProps, IGoal } from '../interfaces';

export default function NewGoalForm(props: INewGoalFormProps) {
  const { addGoal } = props;
  const [newGoal, setNewGoal] = useState<string>('');
  const [startTime, setStartTime] = useState<moment.Moment>(moment());

  const changeNewGoal = (e: any) => {
    if (newGoal.length === 0) {
      setStartTime(moment());
    }

    setNewGoal(e.target.value);
  };

  const plusGoal = (e: any): void => {
    e.preventDefault();
    const goalToAdd: IGoal = {
      text: newGoal,
      startTime,
      endTime: moment(),
    };
    setNewGoal('');
    addGoal(goalToAdd);
  };

  return (
    <Form onSubmit={(e: any) => plusGoal(e)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>New Goal</Form.Label>
        <Form.Control type="text" placeholder="Type SMART goal" value={newGoal} onChange={(e: any) => changeNewGoal(e)} />
        <Form.Text className="text-muted">
          Write down something you want to achieve this year.
        </Form.Text>
      </Form.Group>

      <Button variant="outline-secondary" type="submit">
        Add
      </Button>
    </Form>
  )
}
