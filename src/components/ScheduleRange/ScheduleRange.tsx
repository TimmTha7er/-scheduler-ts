import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  setStartOFRange,
  setEndOFRange,
  setLeftDatePickerVisible,
  setRightDatePickerVisible,
} from '../../redux/actions';
import DatePicker from '../DatePicker/DatePicker';
import DayList from './DayList';

const ScheduleRange: React.FC = ({
  startOfRange,
  endOfRange,
  setStartOFRange,
  setEndOFRange,
  isLeftDatePickerVisible,
  isRightDatePickerVisible,
  setRightDatePickerVisible,
  setLeftDatePickerVisible,
}: any) => {
  const datePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

    return () => document.body.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleOutsideClick = (e: any) => {
    console.log('e', e);
    
    if (!e.path.includes(datePickerRef.current)) {
      setLeftDatePickerVisible(false);
      setRightDatePickerVisible(false);
    }
  };

  const onStartDateClick = (): void => {
    setRightDatePickerVisible(false);
    setLeftDatePickerVisible(!isLeftDatePickerVisible);
  };

  const onEndDateClick = (): void => {
    setLeftDatePickerVisible(false);
    setRightDatePickerVisible(!isRightDatePickerVisible);
  };

  return (
    <div className='schedule-range'>
      <form className='schedule-range__date-range'>
        <div ref={datePickerRef} className='schedule-range__range-wrap'>
          <div className='schedule-range__label'>Расписание:</div>

          <div className='schedule-range__date-block'>
            <div className='schedule-range__date-wrap'>
              <div
                onClick={onStartDateClick}
                className='schedule-range__start-date'
              >
                {startOfRange.format('DD-MM-YYYY')}
              </div>
              {isLeftDatePickerVisible && (
                <DatePicker
                  owner={'schedule-range'}
                  date={startOfRange}
                  setDate={setStartOFRange}
                  setVisible={setLeftDatePickerVisible}
                ></DatePicker>
              )}
            </div>

            <span className='schedule-range__dash'>一</span>

            <div className='schedule-range__date-wrap'>
              <div
                onClick={onEndDateClick}
                className='schedule-range__end-date'
              >
                {endOfRange.format('DD-MM-YYYY')}
              </div>
              {isRightDatePickerVisible && (
                <DatePicker
                  owner={'schedule-range'}
                  date={endOfRange}
                  setDate={setEndOFRange}
                  setVisible={setRightDatePickerVisible}
                ></DatePicker>
              )}
            </div>
          </div>
        </div>
      </form>

      <DayList></DayList>
    </div>
  );
};

const mapStateToProps = ({
  range: {
    startOfRange,
    endOfRange,
    isLeftDatePickerVisible,
    isRightDatePickerVisible,
  },
}: any) => {
  return {
    startOfRange,
    endOfRange,
    isLeftDatePickerVisible,
    isRightDatePickerVisible,
  };
};

const mapDistatchToProps = {
  setStartOFRange,
  setEndOFRange,
  setLeftDatePickerVisible,
  setRightDatePickerVisible,
};

export default connect(mapStateToProps, mapDistatchToProps)(ScheduleRange);