import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as trackServices from "./services/trackServices.js";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import TrackDetails from "./components/TrackDetails";
import TrackForm from "./components/TrackForm.jsx";

const App = () => {
  const [trackList, setTrackList] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const getTrackList = async () => {
      try {
        const songs = await trackServices.index();
        if (songs.error) {
          throw new Error(songs.error);
        }
        setTrackList(songs);
      } catch (e) {
        console.log(e);
      }
    };
    getTrackList();
  }, []);

  const updateSelected = (song) => {
    setSelected(song);
  };

  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackServices.create(formData);
      setTrackList([newTrack, ...trackList]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveTrack = async (id) => {
    try {
      const removeTrack = await trackServices.deleteTrack(id);
      if (removeTrack.error) {
        throw new Error(removeTrack.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateTrack = async (formData, id) => {
    try {
      const updateTrack = await trackServices.update(formData, id);
      if (updateTrack.error) {
        throw new Error(updateTrack.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <h1>Welcome to the jukebox station!</h1>
      <Routes>
        <Route
          path="/"
          element={
            <Home trackList={trackList} updateSelected={updateSelected} />
          }
        />
        <Route
          path="/add-track"
          element={
            <TrackForm
              handleAddTrack={handleAddTrack}
              handleUpdateTrack={handleUpdateTrack}
              track={trackList}
              selected={selected}
            />
          }
        />
      </Routes>

      {/* <TrackDetails selected={selected} /> */}
    </>
  );
};

export default App;
