import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import "./Video.css";
import { FaSync, FaYoutube } from "react-icons/fa";
import { Helmet } from "react-helmet";

const API_KEY = "AIzaSyBYFlfDvL_3R4kZztL8X-lbQdM5R7laz0M";
const CHANNEL_ID = "UCrZv_3v5CzcDK0ZeTfidulQ";
const MAX_RESULTS = 13;

const Video = () => {
  const [playlistId, setPlaylistId] = useState("");
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [mainVideo, setMainVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const videoContainerRef = useRef(null); // Ref for scrolling

  // Step 1: Fetch the channel uploads playlistId
  const fetchPlaylistId = async () => {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      const uploadsId =
        data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads || "";
      setPlaylistId(uploadsId);
    } catch (err) {
      console.error("Failed to fetch playlistId:", err);
    }
  };

  // Step 2: Fetch videos from that playlist
  const fetchVideos = async () => {
    if (!playlistId) return;
    setLoading(true);
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${MAX_RESULTS}&playlistId=${playlistId}${
      nextPageToken ? `&pageToken=${nextPageToken}` : ""
    }&key=${API_KEY}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.error) {
        console.error(data.error);
        setLoading(false);
        return;
      }
      const videoItems = data.items.map((item) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
      }));
      setVideos((prev) => [...prev, ...videoItems]);
      setNextPageToken(data.nextPageToken || null);

      // Set the first video as mainVideo if not set
      if (!mainVideo && videoItems.length > 0) {
        setMainVideo(videoItems[0]);
      }
    } catch (err) {
      console.error("Failed to fetch videos:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPlaylistId();
  }, []);

  useEffect(() => {
    if (playlistId) fetchVideos();
  }, [playlistId]);

  // Exclude mainVideo from thumbnails
  const otherVideos = videos.filter((v) => v.id !== mainVideo?.id);

  // Handle thumbnail click
  const handleThumbnailClick = (video) => {
    setMainVideo(video); // set selected video as main
    if (videoContainerRef.current) {
      window.scrollTo({
        top: videoContainerRef.current.offsetTop - 80, // adjust 80px for banner/nav
        behavior: "smooth",
      });
    }
  };

  return (
    <>
          <Helmet>
      <title>Watch Our Latest Videos and Subscribe | JVT Immigration</title>
    </Helmet>
    <div className="video-page">
      {/* Banner */}
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/bg-page-title.jpg')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">Videos</h1>
          <p className="abouts-breadcrumb">
            <a href="/">Home</a> - Videos
          </p>
        </div>
      </div>

      {/* Videos Section */}
      <div className="videos-container" ref={videoContainerRef}>
        {/* Main Big Video */}
 {mainVideo && (
  <div className="video-full">
    <iframe
      key={mainVideo.id} // Key ensures iframe reloads when video changes
      src={`https://www.youtube.com/embed/${mainVideo.id}`} // removed autoplay
      title={mainVideo.title}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
)}
        {/* Thumbnails Grid */}
        <div className="video-grid">
          {otherVideos.map((video) => (
            <div className="video-card" key={video.id}>
              <div
                className="thumbnail-wrapper"
                onClick={() => handleThumbnailClick(video)}
              >
                <img src={video.thumbnail} alt={video.title} />
                <div className="play-icon">▶</div>
              </div>
              <p style={{ fontWeight: "600" }}>{video.title}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="video-buttons">
          {nextPageToken ? (
            <button
              onClick={fetchVideos}
              disabled={loading}
              className="load-more-btn"
            >
              <FaSync style={{ marginRight: "8px" }} />
              {loading ? "Loading..." : "Load More"}
            </button>
          ) : (
            <p>No more videos</p>
          )}

          <a
            href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="subscribe-btn"
          >
            <FaYoutube style={{ marginRight: "8px", color: "#fff" }} />
            Subscribe
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Video;
