import React from "react";
import Row from "../components/Row";
import requests from "../Requests";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Row rowID="1" fetchURL={requests.requestTrending} title="Trending" />
      <Row rowID="2" fetchURL={requests.requestPopular} title="Popular" />
      <Row rowID="3" fetchURL={requests.requestTopRated} title="Top Rated" />
      <Row rowID="4" fetchURL={requests.requestUpcoming} title="Upcoming" />
      <Row
        rowID="5"
        fetchURL={requests.requestNowPlaying}
        title="Now Playing"
      />
    </>
  );
};

export default Home;
