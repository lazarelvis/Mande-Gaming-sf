import { fetchAllGames } from '../../actions/games';
import { fetchScoreByUsername } from '../../actions/score';

import { connect } from 'react-redux';
import GameList from './Components/index';

const mapStateToProps = (state) => {
  return {
    games: state.games,
    users: state.users,
    scoreByUsername: state.scoreByUsername,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchGames: () => {
    dispatch(fetchAllGames());
  },
  fetchScoreByUsername: (params) => {
    dispatch(fetchScoreByUsername(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
