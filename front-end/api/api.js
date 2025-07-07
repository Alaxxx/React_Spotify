//fetch ou Axios
import axios from "axios";

const URL = "https://treinamentosapisimples.vercel.app/api";

const responseArtists = await axios.get(`${URL}/artists`);
const artistArray = responseArtists.data;
//para cada artist trocar o nome da propriedade _id por id
artistArray.forEach((artist) => {
  artist.id = artist._id;
  delete artist._id;
});

const responseSongs = await axios.get(`${URL}/songs`);
const songsArray = responseSongs.data;
//para cada song trocar o nome da propriedade _id por id
songsArray.forEach((song) => {
  song.id = song._id;
  delete song._id;
});

export { artistArray };
export { songsArray };
