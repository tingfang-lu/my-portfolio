import React from 'react';

const VideoComponent = () => {
  const videoUrl = "https://youtu.be/Qx38CmLRwO8"; // 替换成你的 YouTube 视频 ID

  return (
    <div>
      <h2>My Blog</h2>
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </div>
  );
};

export default VideoComponent;
