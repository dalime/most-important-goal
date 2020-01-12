import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import moment from 'moment';

import { IGoal } from './interfaces';
import NewGoalForm from './components/NewGoalForm';
import GoalsList from './components/GoalsList';

const defaultGoal: IGoal = {
  text: 'default',
  startTime: moment(),
  endTime: moment(),
};

const App: React.FC = () => {
  const [goals, setGoals] = useState<Array<IGoal>>([]);
  const [mostImportant, setMostImportant] = useState<IGoal>(defaultGoal);
  const [show, setShow] = useState<boolean>(false);

  const addGoal = (newGoal: IGoal): void => {
    let goalsCopy = goals.map((goal) => goal);
    goalsCopy.push(newGoal);
    setGoals(goalsCopy);
  }

  const findOut = (): void => {
    if (!goals.length) return;

    if (goals.length === 1) {
      setMostImportant(goals[0]);
      setShow(true);
      return;
    };

    let longestTime: number = 0;
    let longest: IGoal = goals[0];
    for (let i = 0; i < goals.length; i++) {
      let difference: moment.Duration = moment.duration(goals[i].endTime.diff(goals[i].startTime));
      if (difference.asMilliseconds() > longestTime) {
        longestTime = difference.asMilliseconds();
        longest = goals[i];
      }
    }
    setMostImportant(longest);
    setShow(true);
  };

  return (
    <Container style={{ marginTop: '5vh', textAlign: 'center' }}>
      <div className="hero">
        <h1 className="title">Let's Find Out What You Have to Do</h1>
        <p className="description">
          To get started, type the first goals / dreams that come to mind and press Add.
      </p>
        <p>When you are done, press Submit and find out which one you should tackle first.</p>
      </div>

      <div className="section">
        <NewGoalForm addGoal={addGoal} />
      </div>

      <div className="section">
        <GoalsList goals={goals} />
      </div>

      <div className="section">
        <Button variant="outline-primary" onClick={() => findOut()} disabled={goals.length ? false : true}>Find Out</Button>
      </div>
      
      {show && (
        <div className="section">
          <h2>What You Need to Do Now!</h2>
          <h3>{mostImportant.text}</h3>
        </div>
      )}

    </Container>
  );
}

export default App;
