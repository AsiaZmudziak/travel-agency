import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import { getAllFilters, changeSearchPhrase, changeDurationValue } from '../../../redux/filtersRedux';


const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeDurationValue: (type, value) => dispatch(changeDurationValue({type, value})),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
