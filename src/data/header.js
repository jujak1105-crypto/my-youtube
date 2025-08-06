import { CiHome } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiMusicNote1 } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiMonitor } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";

import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const headerMenus = [
	{
		title: "홈",
		icon: <CiHome />,
		src: "/"
	},
	{
		title: "추천 영상",
		icon: <CiHeart />,
		src: "/today"
	},
	{
		title: "추천 음악",
		icon: <CiMusicNote1 />,
		src: "/music"
	},
	{
		title: "추천 영화",
		icon: <CiMonitor />,
		src: "/movie"
	},
	{
		title: "추천 도서",
		icon: <CiBoxList />,
		src: "/book"
	},
	{
		title: "추천 애니",
		icon: <CiFaceSmile />,
		src: "/anime"
	},
	{
		title: "유튜브 사이트",
		icon: <CiYoutube />,
		src: "/youtube"
	}
];

export const searchKeyword = [
	{
		title: "MyYoutube",
		src: "/search/youtube"
	},
	{
		title: "HTML",
		src: "/search/html"
	},
	{
		title: "CSS",
		src: "/search/css"
	},
	{
		title: "JavaScript",
		src: "/search/javascript"
	},
	{
		title: "React.js",
		src: "/search/react.js"
	},
	{
		title: "JAVA",
		src: "/search/java"
	},
	{
		title: "ORACLE",
		src: "/search/oracle"
	},
	{
		title: "SPRING",
		src: "/search/spring"
	}
];

export const snsLink = [
	{
		icon: <FaGithub />,
		src: "https://github.com"
	},
	{
		icon: <FaYoutube />,
		src: "https://youtube.com"
	},
	{
		icon: <FaGoogle />,
		src: "https://google.com"
	},
	{
		icon: <FaInstagram />,
		src: "https://instagram.com"
	}
];