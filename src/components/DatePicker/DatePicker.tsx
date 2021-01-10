import { useState } from 'react';
import Calendar from './Calendar';
import SelectedDate from './SelectedDate';
import { connect } from 'react-redux';

const daysList: Array<string> = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

const DatePicker = ({ date, setDate, setVisible, owner }: any) => {
  const [value, setValue] = useState<moment.Moment>(date);

  const prevMonth = () => {
    return value.clone().subtract(1, 'month');
  };

  const nextMonth = () => {
    return value.clone().add(1, 'month');
  };

  const onBtnPrevClick = () => {
    setValue(prevMonth());
  };

  const onBtnNextClick = () => {
    setValue(nextMonth());
  };

  const onDayClick = (day: any) => () => {
    setValue(day);
    setDate(day);
    setVisible(false);
  };

  const onChangeMonth = (month: any) => {
    setValue(month);
  };

  const onChangeYear = (year: any) => {
    setValue(year);
  };

  return (
    <div className={`datepicker ${owner}__datepicker`}>
      <div className='datepicker__header'>
        <button
          onClick={onBtnPrevClick}
          type='button'
          className='datepicker__month-navigation datepicker__month-navigation_previous icon icon-left-open-big'
        ></button>
        <button
          onClick={onBtnNextClick}
          type='button'
          className='datepicker__month-navigation datepicker__month-navigation_next icon icon-right-open-big'
        ></button>

        <SelectedDate
          value={value}
          onChangeMonth={onChangeMonth}
          onChangeYear={onChangeYear}
        ></SelectedDate>

        <div className='datepicker__day-names'>
          {daysList.map((item, idx) => {
            return (
              <div key={idx} className='datepicker__day-name'>
                {item}
              </div>
            );
          })}
        </div>
      </div>

      <Calendar value={value} onDayClick={onDayClick}></Calendar>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDistatchToProps = {};

export default connect(mapStateToProps, mapDistatchToProps)(DatePicker);