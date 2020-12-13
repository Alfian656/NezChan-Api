const axios = require("axios")
const { author, version } = require("package.json")

async function character(query) {
	if (!query) throw Error("Please enter character anime name");
	const data = await axios.get("https://api.jikan.moe/v3/search/character?q=" + query)
	return data.data.results;
}

async function animesearch(query) {
	if (!query) throw Error("Please enter anime name");
	const data = await axios.get("https://api.jikan.moe/v3/search/anime?q=" + query)
	return data.data.results;
}

async function pokedex(query) {
  if (!query) throw Error("Please enter pokemon name");
  const data = await axios.get("https://some-random-api.ml/pokedex?pokemon=" + query)
  return data.data;
}

async function lyrics(query) {
  if (!query) throw Error("Please enter song title name");
  const data = await axios.get("https://some-random-api.ml/lyrics?title=" + query)
  return data.data;
}

async function hentai() {
  const data = await axios.get("https://nekos.life/api/v2/img/hentai")
  return data.data.url;
}

async function locate(query) {
  if(!query) throw Error("Please enter ip")
  const data = await axios.get("http://api.ipstack.com/" + query + "?access_key=c83b70a2a78558988dcffa4ae8afb8dd")
  return data.data;
}

async function clyde(query) {
  if(!query) throw Error("Please Enter Text")
  const data = await axios.get("https://nekobot.xyz/api/imagegen?type=clyde&text=" + query)
  return data.data.message;
}

async function kannagen(query) {
  if(!query) throw Error("Please Enter Text")
  const data = await axios.get("https://nekobot.xyz/api/imagegen?type=kannagen&text=" + query)
  return data.data.message;
}

async function boobs() {
  const data = await axios.get("https://nekobot.xyz/api/image?type=boobs")
  return data.data.message;
}

async function youtubesearch(query) {
  if(!query) throw Error("Please enter video name")
  const ytsr = require("youtube-sr")
  const songs = await ytsr.search(query).then(x => x[0])
  return songs;
}

async function neko() {
  const data = await axios.get("https://nekobot.xyz/api/image?type=neko")
  return data.data.message;
}

async function manga(query) {
  if(!query) throw Error("Please Enter Anime Name")
  const data = await axios.get("https://api.jikan.moe/v3/search/manga?q=" + query)
  return data.data.results;
}

async function emoji() {
  const data = await axios.get("https://emoji.gg/api")
  return data.data;
}

async function emojipacks() {
  const data = await axios.get("https://emoji.gg/api/packs")
  return data.data;
}

module.exports = { animesearch, character, pokedex, lyrics, hentai, locate, clyde, kannagen, boobs, youtubesearch, neko, manga, emoji, emojipacks, author, version }
