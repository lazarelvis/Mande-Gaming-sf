import { fetchAllGames } from "../../actions/games";
import { fetchScoreByUsername } from "../../actions/score";

import { connect } from "react-redux";
import GameList from "./Components/index";
import gamesData from "../../data/games.json";
import usersData from "../../data/users.json";

const mapStateToProps = (state) => {
  return {
    games: gamesData,
    users: usersData,
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
