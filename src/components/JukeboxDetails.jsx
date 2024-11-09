const JukeboxDetails = (props) => {
  if (!props.selected)
    return (
      <div>
        <h1>No songs selected!</h1>
      </div>
    );

  return (
    <div>
      <h3>{props.selected.artist}</h3>
      <ul>
        <li>{props.selected.title}</li>
        <li>{props.selected.coverArtUrl}</li>
        <li>{props.selected.songClipUrl}</li>
        {props.selected.songLyrics ? (
          <li>{props.selected.songLyrics}</li>
        ) : null}
        <li>
          {props.selected.isApartAnAlbum
            ? "Yes, it's apart of an Album."
            : "No, it's not apart of an Album."}
        </li>
        <li>{props.selected.yearOfRelease}</li>
      </ul>
    </div>
  );
};

export default JukeboxDetails;
