import {fetchAllGames} from "../../actions/games";
import {connect} from "react-redux";
import GameList from "./Components/index"

const mapStateToProps = (state) => {
    return {
        games: state.games
    };
};

const mapDispatchToProps = (dispatch) =>({
    fetchGames: () => {
        dispatch(fetchAllGames());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameList);

