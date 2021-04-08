import { fetchGameById } from '../../actions/games';
import { connect } from 'react-redux';
import Game from './Components/Game';

const mapStateToProps = (state) => {
  return {
    gameById: state.gameById,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchGameById: (params) => {
    dispatch(fetchGameById(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
