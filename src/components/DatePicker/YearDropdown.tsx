import { useState } from 'react';
import { buildYearsList } from './buildYearsList';

type CalendarProps = {
  date: moment.Moment;
  onChangeYear: (year: moment.Moment) => () => void;
  onSelectedYearClick: () => void;
};

const YearDwopdown = ({
  date,
  onChangeYear,
  onSelectedYearClick,
}: CalendarProps) => {
  const [yearsList, setYearsList] = useState<{
    years: moment.Moment[];
    middle: moment.Moment;
  }>({
    years: buildYearsList(date),
    middle: date,
  });
  const [activeYear, setActiveYear] = useState<moment.Moment>(date);

  const onBtnUpClick = () => {
    setYearsList((prevState) => {
      const newMiddle: moment.Moment = prevState.middle.clone().add(1, 'year');
      const newYearsList: moment.Moment[] = buildYearsList(newMiddle);

      return { years: newYearsList, middle: newMiddle };
    });
  };

  const onBtnDownClick = (): void => {
    setYearsList((prevState) => {
      const newMiddle: moment.Moment = prevState.middle
        .clone()
        .subtract(1, 'year');
      const newYearsList: moment.Moment[] = buildYearsList(newMiddle);

      return { years: newYearsList, middle: newMiddle };
    });
  };

  const onYearClick = (year: moment.Moment) => (): void => {
    setActiveYear(year);
    setYearsList({ years: buildYearsList(year), middle: year });
    onChangeYear(year);
    onSelectedYearClick();
  };

  return (
    <div className='datepicker__year-dropdown'>
      <div onClick={onBtnUpClick} className='datepicker__year-option'>
        <span className='datepicker__navigation datepicker__navigation_years-upcoming icon icon-up-open-big'></span>
      </div>
      {yearsList.years.map((item, idx) => {
        const className: string = item.isSame(activeYear, 'year')
          ? 'datepicker__year-option datepicker__year-option_selected'
          : 'datepicker__year-option';

        return (
          <div onClick={onYearClick(item)} key={idx} className={className}>
            {item.format('YYYY')}
          </div>
        );
      })}
      <div onClick={onBtnDownClick} className='datepicker__year-option'>
        <span className='datepicker__navigation datepicker__navigation_years-previous icon icon-down-open-big'></span>
      </div>
    </div>
  );
};

export default YearDwopdown;
