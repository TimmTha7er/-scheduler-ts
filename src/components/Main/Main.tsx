import { connect } from 'react-redux';
import Day from '../Day/Day';
import ScheduleRange from '../ScheduleRange/ScheduleRange';
import CreatePopup from '../CreatePopup/CreatePopup';
import PreviewPopup from '../PreviewPopup/PreviewPopup';
import DeletePopup from '../DeletePopup/DeletePopup';

const Main = ({
  isRangeVisible,
  isCreatePopupVisible,
  isPreviewPopupVisible,
  isDeletePopupVisible,
}: any) => {
  return (
    <main className='main'>
      {isRangeVisible ? <ScheduleRange /> : <Day />}

      {isCreatePopupVisible && <CreatePopup></CreatePopup>}
      {isPreviewPopupVisible && <PreviewPopup></PreviewPopup>}
      {isDeletePopupVisible && <DeletePopup></DeletePopup>}
    </main>
  );
};

const mapStateToProps = ({
  range: { isRangeVisible },
  popups: { isCreatePopupVisible, isPreviewPopupVisible, isDeletePopupVisible },
}: any) => {
  return {
    isRangeVisible,
    isCreatePopupVisible,
    isPreviewPopupVisible,
    isDeletePopupVisible,
  };
};

const mapDistatchToProps = {};

export default connect(mapStateToProps, mapDistatchToProps)(Main);
