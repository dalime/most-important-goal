import React from 'react';
import { ListGroup } from 'react-bootstrap';

import { IGoalsListProps, IGoal } from '../interfaces';

export default function GoalsList(props: IGoalsListProps) {
  const { goals } = props;

  return (
    <ListGroup style={{ maxHeight: '25vh', overflowY: 'scroll' }}>
      {goals.reverse().map((goal: IGoal, index: number) => {
        return <ListGroup.Item key={index}>{goal.text}</ListGroup.Item>;
      })}
    </ListGroup>
  )
}
