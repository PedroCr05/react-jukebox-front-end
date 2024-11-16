import { Link } from "react-router-dom";
import TrackList from "./TrackList";

const Home = ({ trackList, updateSelected }) => {
  return (
    <>
      <button>
        <Link to="/add-track">Add New Track</Link>
      </button>
      <TrackList trackList={trackList} updateSelected={updateSelected} />
    </>
  );
};

export default Home;
