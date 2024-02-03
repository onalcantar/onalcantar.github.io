import { AiFillHtml5, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import {
	DiCss3,
	DiVisualstudio,
	DiGo,
	DiPhp,
	DiJava,
	DiClojure,
	DiAws,
	DiAndroid,
	DiApple,
	DiEmber, DiPostgresql, DiMysql, DiMsqlServer, DiMongodb, DiLinux
} from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaFigma, FaTrello } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import AdobeXDIcon from "public/assets/svg/adobexd.svg";
import ZeplinIcon from "public/assets/svg/zeplin.svg";
import WebstormIcon from "public/assets/svg/webstorm.svg";
import JiraIcon from "public/assets/svg/jira.svg";
import HeadlessUiIcon from "public/assets/svg/headlessui.svg";
import StyledIcon from "public/assets/svg/styledcomponents.svg";

export const TECHNOLOGIES = [
	{
		category: "Mobile",
		items: [
			{ name: "React Native", icon: <RiReactjsFill size={32} /> },
			{ name: "Android studio", icon: <DiAndroid size={32} /> },
			{ name: "Xcode", icon: <DiApple size={32} /> }
		]
	},
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next", icon: <TbBrandNextjs size={32} /> },
			{ name: "Ember js", icon: <DiEmber size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
			{ name: "styled components", icon: <StyledIcon width={32} /> },
			{ name: "HeadlessUI", icon: <HeadlessUiIcon width={32} /> },
			{ name: "Zeplin", icon: <ZeplinIcon width={36} /> },
			{ name: "XD", icon: <AdobeXDIcon width={32} /> }
		]
	},
	{
		category: "Backend",
		items: [
			{ name: "Go", icon: <DiGo size={32} /> },
			{ name: "PHP", icon: <DiPhp size={32} /> },
			{ name: "Java", icon: <DiJava size={32} /> },
			{ name: "Clojure", icon: <DiClojure size={32} /> },
			{ name: "AWS", icon: <DiAws size={32} /> },
			{ name: "Postgres", icon: <DiPostgresql size={32} /> },
			{ name: "MySQL", icon: <DiMysql size={32} /> },
			{ name: "SQL Server", icon: <DiMsqlServer size={32} /> },
			{ name: "MongoDB", icon: <DiMongodb size={32} /> },
			{ name: "Linux", icon: <DiLinux size={32} /> },
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "WordPress CMS", icon: <FaWordpressSimple size={32} /> },
			{ name: "Jira", icon: <JiraIcon width={32} /> },
			{ name: "Trello", icon: <FaTrello size={32} /> },
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "Gitlab", icon: <AiFillGitlab size={32} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={32} /> },
			{ name: "WebStorm", icon: <WebstormIcon width={32} /> }
		]
	}
];
