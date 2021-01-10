import { connect } from 'react-redux';
import { toggleRangeVisible, setALLPopupsUnvisible } from '../../redux/actions';

const RangeBtn = ({
  isRangeVisible,
  toggleRangeVisible,
  setALLPopupsUnvisible,
}: any) => {
  const onRangeBtnClick = () => {
    toggleRangeVisible();
    setALLPopupsUnvisible();
  };

  const rangeBtnName = isRangeVisible ? 'День' : 'Расписание';

  return (
    <button onClick={onRangeBtnClick} className='header__range-btn'>
      {rangeBtnName}
    </button>
  );
};

const mapStateToProps = ({ range: { isRangeVisible } }: any) => {
  return { isRangeVisible };
};

const mapDistatchToProps = {
  toggleRangeVisible,
  setALLPopupsUnvisible,
};

export default connect(mapStateToProps, mapDistatchToProps)(RangeBtn);
