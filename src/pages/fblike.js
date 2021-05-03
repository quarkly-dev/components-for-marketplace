import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"fblike"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box padding="0px 30px 50px 30px" quarkly-title="Wrapper">
			<Box margin="50px 0px 100px 0px" quarkly-title="Header">
				<Text text-align="center" font="--headline1">
					FB Like
				</Text>
			</Box>
			{" "}
			<Components.QuarklycommunityKitFbLike appId="1028299497562669" href="https://developers.facebook.com/docs/plugins/" />
			<Box display="none">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Props{" "}
				</Text>
				<Components.Table colsProp="3" rowsProp="11" width="100%" showHeader={false}>
					<Override slot="Text TBody Row-0 Col-0">
						Название
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Описание
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						Значение по дефолту
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Referal
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Color scheme
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Share
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						URL
					</Override>
					<Override slot="Text TBody Row-5 Col-0">
						Layout
					</Override>
					<Override slot="Text TBody Row-6 Col-0">
						Size
					</Override>
					<Override slot="Text TBody Row-7 Col-0">
						Action
					</Override>
					<Override slot="Text TBody Row-8 Col-0">
						Kid directed site
					</Override>
					<Override slot="Text TBody Row-9 Col-0">
						Facebook App ID
					</Override>
					<Override slot="Text TBody Row-10 Col-0">
						Language
					</Override>
					<Override slot="Text TBody Row-10 Col-1">
						Язык [Русский, English]
					</Override>
					<Override slot="Text TBody Row-10 Col-2">
						English
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Ярлык для отслеживания переходов (не более 50 символов)
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Цветовая схема [light, dark]
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Указывает, размещать ли{" "}
						<Link href="https://beta.quarkly.io/preview#/https://developers.facebook.com/docs/plugins/share-button/">
							кнопку "Поделиться"
						</Link>
						{" "}рядом с кнопкой "Нравится"
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						URL веб-страницы, которой люди будут ставить отметки "Нравится".
					</Override>
					<Override slot="Text TBody Row-5 Col-1">
						Макет [standart, button_count, button, box_count]{"   "}
					</Override>
					<Override slot="Text TBody Row-6 Col-1">
						Размер кнопки
					</Override>
					<Override slot="Text TBody Row-7 Col-1">
						Тип действия [like, recommend]
					</Override>
					<Override slot="Text TBody Row-8 Col-1">
						Контент для детей
					</Override>
					<Override slot="Text TBody Row-9 Col-1">
						ID приложения FaceBook
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						none
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						light
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						false
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						none
					</Override>
					<Override slot="Text TBody Row-5 Col-2">
						standart
					</Override>
					<Override slot="Text TBody Row-6 Col-2">
						small
					</Override>
					<Override slot="Text TBody Row-7 Col-2">
						like
					</Override>
					<Override slot="Text TBody Row-8 Col-2">
						false
					</Override>
					<Override slot="Text TBody Row-9 Col-2">
						none
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