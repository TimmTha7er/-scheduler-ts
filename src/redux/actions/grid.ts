import { CREATE_EVENT, DELETE_EVENT, SET_ROW_DATE } from '../action-types';

interface IEvent {
  title: string;
  descr: string;
}

interface ICreateEvent {
  type: typeof CREATE_EVENT;
  payload: IEvent;
}

interface IDeleteEvent {
  type: typeof DELETE_EVENT;
  payload: moment.Moment;
}

interface ISetRowDate {
  type: typeof SET_ROW_DATE;
  payload: moment.Moment;
}

export type GridActionsType = ICreateEvent | IDeleteEvent | ISetRowDate;

export const createEvent = (value: IEvent): GridActionsType => {
  return {
    type: CREATE_EVENT,
    payload: value,
  };
};

export const deleteEvent = (date: moment.Moment): GridActionsType => {
  return {
    type: DELETE_EVENT,
    payload: date,
  };
};

export const setRowDate = (date: moment.Moment): GridActionsType => {
  return {
    type: SET_ROW_DATE,
    payload: date,
  };
};
