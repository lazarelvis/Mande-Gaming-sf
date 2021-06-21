import './App.css';
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';

function Home() {
  return (
    <>
      <Bounce top>
        <div className="play-button">
          <Link to="/game-list">
            <button type="button">play</button>
          </Link>
        </div>
      </Bounce>
    </>
  );
}

export default Home;
