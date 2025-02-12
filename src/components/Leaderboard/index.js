import React, { useEffect } from 'react';
import Row from './row';
import HeadRow from './headrow';
import { fetchAllScore } from '../../actions/score';
import { connect } from 'react-redux';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Bounce';

import './css/style.css';
import score from '../../services/score';
let counter = 1;

const LeaderBoard = ({ score, fetchScores }) => {
  useEffect(() => {
    fetchScores();
  }, []);

  const scoruri = [];
  const Show = () =>
    score
      ? score.map((item, i) =>
          item.score
            ? item.score.map((item2, i) =>
                scoruri.push({
                  utilizator: item.username,
                  score11: item2.score,
                  joc: item2.name,
                })
              )
            : null
        )
      : null;

  function compare(a, b) {
    if (a.score11 < b.score11) {
      return 1;
    }
    if (a.score11 > b.score11) {
      return -1;
    }
    return 0;
  }

  const Afisare = () =>
    scoruri.sort(compare).slice(0, 10)
      ? scoruri
          .sort(compare)
          .slice(0, 10)
          .map((item, i) => (
            <Row
              key={i}
              number={i + 1}
              nume={item.utilizator}
              joc={item.joc}
              scor={item.score11}
            />
          ))
      : null;

  return (
    <>
      <div style={{ display: 'none' }}>{Show()}</div>
      <table id="table">
        <HeadRow />
        <tbody>{Afisare()}</tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchScores: () => {
    dispatch(fetchAllScore());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);
