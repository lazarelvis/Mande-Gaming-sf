import { fetchGameById } from '../../actions/games';
import { fetchScoreByUsername } from '../../actions/score';
import { createScore } from '../../actions/score';

import { connect } from 'react-redux';
import Game from './Components/Game';

const mapStateToProps = (state) => {
  return {
    gameById: state.gameById,
    scoreByUsername: state.scoreByUsername,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchGameById: (params) => {
    dispatch(fetchGameById(params));
  },
  fetchScoreByUsername: (params) => {
    dispatch(fetchScoreByUsername(params));
  },
  createScore: (data) => {
    dispatch(createScore(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
