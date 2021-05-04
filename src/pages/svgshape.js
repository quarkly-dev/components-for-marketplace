import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"svgshape"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box padding="0px 30px 100px 30px" quarkly-title="Wrapper">
			<Box margin="50px 0px 100px 0px" quarkly-title="Header">
				<Text text-align="center" font="--headline1">
					Svg Shape
				</Text>
			</Box>
			<Box display="flex" margin="500px 10 500px 100px">
				<Components.QuarklycommunityKitSvgShape
					height="200px"
					margin="0px auto 0px auto"
					strokeWidth="8"
					type="Circle"
					stroke="#7df7e0"
					fill="#194968"
					strokeLinecap="butt"
					strokeDasharray="0"
					width="300px"
				/>
				<Components.QuarklycommunityKitSvgShape
					height="200px"
					strokeWidth="8"
					fill="#0094ff"
					stroke="#393838"
					strokeLinecap="round"
					strokeDasharray="31"
					type="Square"
					width="300px"
					margin="0px 4px 0px 0px"
				/>
				<Components.QuarklycommunityKitSvgShape
					height="200px"
					margin="0px auto 0px auto"
					strokeWidth="8"
					type="Ellipse"
					fill="#f76363"
					stroke="#c4c8c8"
					strokeLinecap="butt"
					strokeDasharray="0"
					width="300px"
				/>
			</Box>
			<Box quarkly-title="Props" height="auto" min-height="20px" display="none">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Props{" "}
				</Text>
				<Components.Table width="100%" showHeader colsProp="3" rowsProp="8">
					<Override slot="Text THead Col-0">
						Название
					</Override>
					<Override slot="Text THead Col-1">
						Описание
					</Override>
					<Override slot="Text THead Col-2">
						Значение по дефолту
					</Override>
					<Override slot="Text TBody Row-0 Col-0">
						Type
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Stroke
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Srtoke width
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Stroke opacity
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Stroke linecap
					</Override>
					<Override slot="Text TBody Row-5 Col-0">
						Stroke dasharray
					</Override>
					<Override slot="Text TBody Row-6 Col-0">
						Fill
					</Override>
					<Override slot="Text TBody Row-7 Col-0">
						Fill opacity
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Тип формы
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Цвет рамки
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Толщина рамки (px)
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Прозрачность рамки
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Форма рамки  [round, square]
					</Override>
					<Override slot="Text TBody Row-5 Col-1">
						Заполненность рамки
					</Override>
					<Override slot="Text TBody Row-6 Col-1">
						Цвет фигуры
					</Override>
					<Override slot="Text TBody Row-7 Col-1">
						Прозрачность фигуры
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						rectangle
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						1
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						1
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						butt
					</Override>
					<Override slot="Text TBody Row-5 Col-2">
						none
					</Override>
					<Override slot="Text TBody Row-7 Col-2">
						1
					</Override>
					<Override slot="Text TBody Row-6 Col-2">
						-
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						-
					</Override>
				</Components.Table>
			</Box>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});