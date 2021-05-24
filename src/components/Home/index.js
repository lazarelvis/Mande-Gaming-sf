import './App.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <div className="play-button">
        <Link to="/game-list">
          <button type="button">play</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
