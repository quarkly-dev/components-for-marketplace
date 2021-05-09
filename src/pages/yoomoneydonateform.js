import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"yoomoneydonateform"} />
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
					YoomoneyDonateForm
				</Text>
			</Box>
			<Box quarkly-title="Props" height="auto" min-height="20px" display="none">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Props YoomoneyDonateForm
				</Text>
				<Box quarkly-title="Space">
					<Components.Table showHeader width="100%" colsProp="3" rowsProp="14">
						<Override slot="Text THead Col-0">
							Название
						</Override>
						<Override slot="Text TBody Row-0 Col-0">
							Account
						</Override>
						<Override slot="Text TBody Row-1 Col-0">
							Targets
						</Override>
						<Override slot="Text TBody Row-1 Col-1">
							Назначение перевода
						</Override>
						<Override slot="Text TBody Row-2 Col-0">
							Text
						</Override>
						<Override slot="Text TBody Row-3 Col-0">
							Fixed Target
						</Override>
						<Override slot="Text TBody Row-4 Col-0">
							Sum
						</Override>
						<Override slot="Text TBody Row-5 Col-0">
							Full name
						</Override>
						<Override slot="Text TBody Row-6 Col-0">
							Email
						</Override>
						<Override slot="Text TBody Row-7 Col-0">
							Phone
						</Override>
						<Override slot="Text TBody Row-8 Col-0">
							Address
						</Override>
						<Override slot="Text TBody Row-9 Col-0">
							Comment
						</Override>
						<Override slot="Text TBody Row-10 Col-0">
							Comment hint
						</Override>
						<Override slot="Text TBody Row-11 Col-0">
							Success URL
						</Override>
						<Override slot="Text TBody Row-12 Col-0">
							Use bank card
						</Override>
						<Override slot="Text THead Col-1">
							Описание
						</Override>
						<Override slot="Text THead Col-2">
							Значение по дефолту
						</Override>
						<Override slot="Text TBody Row-13 Col-0">
							Use mobile payment
						</Override>
						<Override slot="Text TBody Row-0 Col-1">
							Идентификатор кошелька Yoomoney (обязательное поле)
						</Override>
						<Override slot="Text TBody Row-2 Col-1">
							Текст кнопки
						</Override>
						<Override slot="Text TBody Row-3 Col-1">
							Фиксированная цель перевода
						</Override>
						<Override slot="Text TBody Row-4 Col-1">
							Сумма перевода
						</Override>
						<Override slot="Text TBody Row-5 Col-1">
							Запрашивать имя в момент перевода
						</Override>
						<Override slot="Text TBody Row-6 Col-1">
							Запрашивать email в момент перевода
						</Override>
						<Override slot="Text TBody Row-7 Col-1">
							Запрашивать телефон в момент перевода
						</Override>
						<Override slot="Text TBody Row-8 Col-1">
							Запрашивать адрес в момент перевода
						</Override>
						<Override slot="Text TBody Row-9 Col-1">
							Запрашивать комментарий в момент перевода
						</Override>
						<Override slot="Text TBody Row-10 Col-1">
							Подсказка для комментария{" "}
						</Override>
						<Override slot="Text TBody Row-11 Col-1">
							Ссылка для редиректа
						</Override>
						<Override slot="Text TBody Row-12 Col-1">
							Возможность перевода череpез баноквскую карту
						</Override>
						<Override slot="Text TBody Row-13 Col-1">
							Возможность перевода чере cчет телефона Билайн, МТС, Tele2
						</Override>
						<Override slot="Text TBody Row-0 Col-2">
							-
						</Override>
						<Override slot="Text TBody Row-1 Col-2">
							Помочь проекту
						</Override>
						<Override slot="Text TBody Row-2 Col-2">
							Перевести
						</Override>
						<Override slot="Text TBody Row-3 Col-2">
							true
						</Override>
						<Override slot="Text TBody Row-4 Col-2">
							0
						</Override>
						<Override slot="Text TBody Row-5 Col-2">
							false
						</Override>
						<Override slot="Text TBody Row-6 Col-2">
							false
						</Override>
						<Override slot="Text TBody Row-7 Col-2">
							false
						</Override>
						<Override slot="Text TBody Row-8 Col-2">
							false
						</Override>
						<Override slot="Text TBody Row-9 Col-2">
							false
						</Override>
						<Override slot="Text TBody Row-10 Col-2">
							-
						</Override>
						<Override slot="Text TBody Row-11 Col-2">
							-
						</Override>
						<Override slot="Text TBody Row-12 Col-2">
							false
						</Override>
						<Override slot="Text TBody Row-13 Col-2">
							false
						</Override>
					</Components.Table>
				</Box>
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