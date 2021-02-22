import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import { getAllFilters, changeSearchPhrase, addTags, removeTags, changeDurationValue } from '../../../redux/filtersRedux';


const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // DONE - TODO - add more dispatchers for other filters
  addTags: tag => dispatch(addTags(tag)),
  removeTags: tag => dispatch(removeTags(tag)),
  changeDurationValue: (type, value) => dispatch(changeDurationValue({type, value})),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
