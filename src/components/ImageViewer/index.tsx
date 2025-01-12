import React from "react";



const ImageViewer = ({ className = "", id}) => {
  return (
    <svg className={className}>
      <use xlinkHref={`/assets/icons.svg#${id}`} />
    </svg>
  );
};

export default ImageViewer;


