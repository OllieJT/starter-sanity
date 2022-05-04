import React from "react";
import ReactPlayer from "react-player";

const EmbedPlayer = ({ value }) => {
	if (!value.url) {
		return null;
	}

	return <ReactPlayer url={value.url} controls={value.hasControls || true} playing={value.isAutoplay || false} loop={value.isLoop || false} muted={value.isMuted || true} />;
};

export default EmbedPlayer;
