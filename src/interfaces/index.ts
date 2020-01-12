import moment from 'moment';

export interface IGoal {
  text: string;
  startTime: moment.Moment;
  endTime: moment.Moment;
};

export interface IGoalsListProps {
  goals: Array<IGoal>;
};

export interface INewGoalFormProps {
  addGoal(g: IGoal): void;
};