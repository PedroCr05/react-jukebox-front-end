const TrackList = (props) => {
  const songs = props.trackList.map((song) => (
    <a key={song._id} onClick={() => props.updateSelected(song)}>
      <li>{song.title}</li>
    </a>
  ));

  return (
    <>
      <h2>Songs:</h2>
      <ul>{songs}</ul>
    </>
  );
};

export default TrackList;
