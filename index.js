const axios = require("axios")
const { author, version } = require("./package.json")

/**
* Search anime character
* @param {string} query Anime character name
* @returns {Promise<Object[]>} `Promise<Object[]>`
*/
async function character(query) {
	if (!query) throw Error("Please enter character anime name");
	const data = await axios.get("https://api.jikan.moe/v3/search/character?q=" + query)
	return data.data.results;
}

/**
* Search anime
* @param {string} query Anime name
* @returns {Promise<Object[]>} `Promise<Object[]>`
*/
async function animesearch(query) {
	if (!query) throw Error("Please enter anime name");
	const data = await axios.get("https://api.jikan.moe/v3/search/anime?q=" + query)
	return data.data.results;
}

/**
* Search pokemon info from pokedex
* @param {string} query Pokemon name
* @returns {Promise<Object>} `Promise<Object>`
*/
async function pokedex(query) {
  if (!query) throw Error("Please enter pokemon name");
  const data = await axios.get("https://some-random-api.ml/pokedex?pokemon=" + query)
  return data.data;
}

/**
* Search song lyrics
* @param {string} query Song name
* @returns {Promise<Object>} `Promise<Object>`
*/
async function lyrics(query) {
  if (!query) throw Error("Please enter song title name");
  const data = await axios.get("https://some-random-api.ml/lyrics?title=" + query)
  return data.data;
}

/**
* Get random hentai image URL
* @returns {Promise<string>} `Promise<string>`
*/
async function hentai() {
  const data = await axios.get("https://nekos.life/api/v2/img/hentai")
  return data.data.url;
}

/**
* Locate IP address
* @param {string} query IP address
* @returns {Promise<Object>} `Promise<Object>`
*/
async function locate(query) {
  if(!query) throw Error("Please enter ip")
  const data = await axios.get("http://api.ipstack.com/" + query + "?access_key=c83b70a2a78558988dcffa4ae8afb8dd")
  return data.data;
}

/**
* Generate clyde message image
* @param {string} query Text used for clyde message image
* @returns {Promise<string>} `Promise<string>`
*/
async function clyde(query) {
  if(!query) throw Error("Please Enter Text")
  const data = await axios.get("https://nekobot.xyz/api/imagegen?type=clyde&text=" + query)
  return data.data.message;
}

/**
* Generate kanna text on paper image
* @param {string} query Text used for kanna text on paper image
* @returns {Promise<string>} `Promise<string>`
*/
async function kannagen(query) {
  if(!query) throw Error("Please Enter Text")
  const data = await axios.get("https://nekobot.xyz/api/imagegen?type=kannagen&text=" + query)
  return data.data.message;
}

/**
* Get random boobs image URL
* @returns {Promise<string>} `Promise<string>`
*/
async function boobs() {
  const data = await axios.get("https://nekobot.xyz/api/image?type=boobs")
  return data.data.message;
}

/**
* Search youtube video
* @param {string} query
* @returns {Promise<Object[]>} `Promise<Object[]>`
*/
async function youtubesearch(query) {
  if(!query) throw Error("Please enter video name")
  const ytsr = require("youtube-sr")
  const songs = await ytsr.search(query).then(x => x[0])
  return songs;
}

/**
* Get random neko image URL
* @returns {Promise<string>} `Promise<string>`
*/
async function neko() {
  const data = await axios.get("https://nekobot.xyz/api/image?type=neko")
  return data.data.message;
}

/**
* Search manga
* @param {string} query Manga name
* @returns {Promise<Object[]>} `Promise<Object[]>`
*/
async function manga(query) {
  if(!query) throw Error("Please Enter Anime Name")
  const data = await axios.get("https://api.jikan.moe/v3/search/manga?q=" + query)
  return data.data.results;
}

/**
* Get emojis from emoji.gg API
* @returns {Promise<Object[]>} `Promise<Object[]>`
*/
async function emoji() {
  const data = await axios.get("https://emoji.gg/api")
  return data.data;
}

/**
* Get emoji packs from emoji.gg API
* @returns {Promise<Object[]>} `Promise<Object[]>`
*/
async function emojipacks() {
  const data = await axios.get("https://emoji.gg/api/packs")
  return data.data;
}

/**
* Get Github Users
* @returns {Promise<Object[]>} `Promise<Object[]>`
*/
async function github(query) {
  const data = await axios.get("http://api.github.com/users" + query)
  return data.data;
}

module.exports = { animesearch, character, pokedex, lyrics, hentai, locate, clyde, kannagen, boobs, youtubesearch, neko, manga, emoji, emojipacks, author, version, github }
