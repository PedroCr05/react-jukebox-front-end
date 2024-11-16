import "./TrackForm.css";
import { useState } from "react";

const TrackForm = ({ addTrack, trackList }) => {
  const [formData, setFormData] = useState([]);

  const handleSubmit = ({ event }) => {
    event.preventDefault();
    addTrack(formData);
    setFormData([addTrack, ...trackList]);
    nav(`/`);
  };

  const handleChange = ({ target }) => {
    setFormData = [{ ...formData, [target.name]: target.value }];
  };

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title of the Track:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="artist">The name of the Artist:</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          required
        />

        <label htmlFor="coverArtUrl">The Cover Art of the Track:</label>
        <input
          type="text"
          id="coverArtUrl"
          name="coverArtUrl"
          value={formData.coverArtUrl}
          onChange={handleChange}
          required
        />

        <label htmlFor="songClipUrl">Post a link of the Track:</label>
        <input
          type="text"
          id="songClipUrl"
          name="songClipUrl"
          value={formData.songClipUrl}
          onChange={handleChange}
          required
        />

        <label htmlFor="songLyrics">A link for the Track's Lyrics:</label>
        <input
          type="text"
          id="songLyrics"
          name="songLyrics"
          value={formData.songLyrics}
          onChange={handleChange}
          required
        />

        <label htmlFor="yearOfRelease">The year of the Track's Release:</label>
        <input
          type="Number"
          id="yearOfRelease"
          name="yearOfRelease"
          value={formData.yearOfRelease}
          onChange={handleChange}
          required
        />
      </form>
    </article>
  );
};

export default TrackForm;
