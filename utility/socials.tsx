import React from "react";
import { slugify } from "./slugify";
import {
	RiTwitterFill,
	RiInstagramFill,
	RiTwitchFill,
	RiYoutubeFill,
	RiFacebookBoxFill,
	RiRedditFill,
	RiDiscordFill,
} from "react-icons/ri";

export enum SocialPlatform {
	TWITTER = "Twitter",
	INSTAGRAM = "Instagram",
	TWITCH = "Twitch",
	YOUTUBE = "YouTube",
	FACEBOOK = "Facebook",
	REDDIT = "Reddit",
	DISCORD = "Discord",
	TIKTOK = "TikTok",
}

export const allPlatforms = Object.values(SocialPlatform);

export const resolveSocialIcon = (platform) => {
	switch (platform) {
		case slugify(SocialPlatform.TWITTER):
			return RiTwitterFill;
		case slugify(SocialPlatform.INSTAGRAM):
			return RiInstagramFill;
		case slugify(SocialPlatform.TWITCH):
			return RiTwitchFill;
		case slugify(SocialPlatform.YOUTUBE):
			return RiYoutubeFill;
		case slugify(SocialPlatform.FACEBOOK):
			return RiFacebookBoxFill;
		case slugify(SocialPlatform.REDDIT):
			return RiRedditFill;
		case slugify(SocialPlatform.DISCORD):
			return RiDiscordFill;
		case slugify(SocialPlatform.TIKTOK):
		default:
			return (
				<p style={{ height: "1.2em", lineHeight: "1.2em", fontSize: "1em" }}>
					{platform[0]}
				</p>
			);
	}
};
