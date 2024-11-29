import React from 'react';

const ImageComponent = () => {
  const imageUrl = "https://drive.google.com/file/d/14bSLYfjaWgHL2NKsxHL5JycEmVK9PU-7/view?usp=drive_link"; // 替换成你的 Google Drive 图片文件 ID

  return (
    <div>
      <h2>My Projects</h2>
      <img src={imageUrl} alt="My Project" style={{ width: '100%', maxWidth: '600px' }} />
    </div>
  );
};

export default ImageComponent;
