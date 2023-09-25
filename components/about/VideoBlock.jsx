import { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoBlock = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="rDYdeq3JW_E"
        onClose={() => setOpen(false)}
      />

      <div className="fancy-feature-fiftyTwo mt-130 lg-mt-100">
        <div className="container">
          <div className="video-banner d-flex align-items-center justify-content-center">
          </div>
          {/* /.video-banner */}
        </div>
      </div>
    </>
  );
};

export default VideoBlock;
