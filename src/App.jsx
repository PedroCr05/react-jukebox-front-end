import { useState, useEffect } from "react";
import * as jukeboxServices from "./services/jukeboxServices";
import JukeboxList from "./components/JukeboxList";
import JukeboxDetails from "./components/JukeboxDetails";

const App = () => {
  const [jukeboxList, setJukeboxList] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const getJukeBoxList = async () => {
      try {
        const songs = await jukeboxServices.index();
        if (songs.error) {
          throw new Error(songs.error);
        }
        setJukeboxList(songs);
      } catch (e) {
        console.log(e);
      }
    };
    getJukeBoxList();
  }, []);

  const updateSelected = (song) => {
    setSelected(song);
  };

  return (
    <>
      <h1>Welcome to the jukebox station!</h1>
      <JukeboxList jukeboxList={jukeboxList} updateSelected={updateSelected} />
      <JukeboxDetails selected={selected} />
    </>
  );
};

export default App;
