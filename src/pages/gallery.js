import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Icon, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowRight } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"gallery"} />
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
					Gallery
				</Text>
			</Box>
			<Components.QuarklycommunityKitGallery
				autoFillInProp
				offScrollProp
				hideLoaderFullImage={false}
				aspectRatioProp="auto"
				columnsCountProp="6"
				hideLoaderPreviewImage={false}
				loaderFormatProp="click"
				galleryItemNumbProp="6"
			>
				<Override
					slot="Item"
					stretchFull
					showFullImage={false}
					border-color="#690b0b"
					border-width="2px"
					border-style="red"
					columsNumb="1"
				/>
				<Override slot="Item 0" showFullImage={false} fullSrc="https://images.unsplash.com/photo-1618248047249-9bb3341fd6b6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" previewSrc="https://images.unsplash.com/photo-1618248047249-9bb3341fd6b6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
				<Override
					slot="Item 3"
					showFullImage={false}
					fullSrc="https://images.unsplash.com/photo-1619042823674-4f4ad8484b08?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
					previewSrc="https://images.unsplash.com/photo-1619042823674-4f4ad8484b08?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
					columsNumb="2"
					rowsNumb="2"
				/>
				<Override
					slot="Item 1"
					showFullImage
					previewSrc="https://images.unsplash.com/photo-1611095564350-2cbe940a8d99?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
					fullSrc="https://images.unsplash.com/photo-1611095564350-2cbe940a8d99?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
					columsNumb="2"
					rowsNumb="2"
				/>
				<Override slot="Item 2" showFullImage={false} previewSrc="https://images.unsplash.com/photo-1523215108660-3fdf7932d7a5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" fullSrcSet="https://images.unsplash.com/photo-1523215108660-3fdf7932d7a5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 " />
				<Override
					slot="Item 4"
					fullSrc="https://images.unsplash.com/photo-1619041038964-2410837df011?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
					previewSrc="https://images.unsplash.com/photo-1619041038964-2410837df011?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
					columsNumb="1"
					rowsNumb="1"
				/>
				<Override slot="Item 5" fullSrc="https://images.unsplash.com/photo-1569389397653-c04fe624e663?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" previewSrc="https://images.unsplash.com/photo-1569389397653-c04fe624e663?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
				<Override slot="Item 6" previewSrc="https://images.unsplash.com/photo-1619038265796-8c6ce47d257c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			</Components.QuarklycommunityKitGallery>
			<Box display="none">
				<Box margin="50px 0px 0px 0px" quarkly-title="Architecture">
					<Text font="600 24px sans-serif" quarkly-title="Title">
						Structure{" "}
					</Text>
					<Box
						margin="0px 0px 50px 0px"
						display="flex"
						quarkly-title="Content"
						align-items="center"
						justify-content="center"
						text-align="center"
						border-width="2px"
						border-style="solid"
						border-color="#d3d3d3"
					>
						<Box display="flex" align-items="center" quarkly-title="Item" width="100%">
							<Text
								width="100%"
								font="18px sans-serif"
								margin="0 0 0 0"
								padding="15px 0px 15px 0px"
								height="auto"
								min-height="20px"
							>
								Gallery
							</Text>
							<Icon category="md" icon={MdKeyboardArrowRight} size="40px" color="#747272" />
						</Box>
						<Box width="100%" font="20px --fontFamily-sans" quarkly-title="Item">
							<Box display="flex" align-items="center" min-height="52px">
								<Text
									width="100%"
									font="18px sans-serif"
									margin="0 0 0 0"
									padding="15px 0px 15px 0px"
									height="auto"
									min-height="20px"
								>
									GalleryLoader
								</Text>
								<Icon category="md" icon={MdKeyboardArrowRight} size="40px" color="#747272" />
							</Box>
							<Box display="flex" align-items="center" min-height="52px">
								<Text
									width="100%"
									font="18px sans-serif"
									margin="0 0 0 0"
									padding="15px 0px 15px 0px"
									height="auto"
									min-height="20px"
								>
									GalleryScrollBlock
								</Text>
								<Icon category="md" icon={MdKeyboardArrowRight} size="40px" color="#747272" />
							</Box>
							<Box display="flex" align-items="center" min-height="52px">
								<Text
									width="100%"
									font="18px sans-serif"
									margin="0 0 0 0"
									padding="15px 0px 15px 0px"
									height="auto"
									min-height="20px"
								>
									GalleryLightBox
								</Text>
								<Icon category="md" icon={MdKeyboardArrowRight} size="40px" color="#747272" />
							</Box>
							<Box display="flex" align-items="center" min-height="52px">
								<Text
									width="100%"
									font="18px sans-serif"
									margin="0 0 0 0"
									padding="15px 0px 15px 0px"
									height="auto"
									min-height="20px"
								>
									GalleryItem
								</Text>
								<Icon category="md" icon={MdKeyboardArrowRight} size="40px" color="#747272" />
							</Box>
						</Box>
					</Box>
				</Box>
				<Box quarkly-title="Props" height="auto" min-height="20px">
					<Text font="600 24px sans-serif" quarkly-title="Title">
						Props Gallery
					</Text>
					<Components.Table width="100%" colsProp="3" rowsProp="11" showHeader>
						<Override slot="Text THead Col-0">
							????????????????
						</Override>
						<Override slot="Text THead Col-1">
							????????????????
						</Override>
						<Override slot="Text THead Col-2">
							???????????????? ???? ??????????????
						</Override>
						<Override slot="Text TBody Row-0 Col-0">
							???????????????????? ??????????????????????{"??"}
						</Override>
						<Override slot="Text TBody Row-0 Col-1">
							???????????????????? ?????????????????????? ??????????????
						</Override>
						<Override slot="Text TBody Row-0 Col-2">
							8
						</Override>
						<Override slot="Text TBody Row-1 Col-0">
							?????????????????? ????????????????
						</Override>
						<Override slot="Text TBody Row-1 Col-1">
							???????????????????? ???????????????? ??????????????
						</Override>
						<Override slot="Text TBody Row-1 Col-2">
							4
						</Override>
						<Override slot="Text TBody Row-2 Col-0">
							???????????? ????????????????
						</Override>
						<Override slot="Text TBody Row-2 Col-1">
							???????????? ???????????????? ?????????? ??????????????????????????. ???????????????? ?? ?????????? ???????????????????? (px, %, pt ?? ??.??.) ???????? ?????????????? ???????????? ??????????, ???? ???????????????? ?? px
						</Override>
						<Override slot="Text TBody Row-2 Col-2">
							10
						</Override>
						<Override slot="Text TBody Row-3 Col-0">
							?????????????????????????? ?????????????????? ?????????????????? ??????????
						</Override>
						<Override slot="Text TBody Row-3 Col-1">
							?? ????????????, ???????? ?? ?????????????? ???????????????????? ?????????????????? ??????????, ?????????????????? ?????? ????????????????????????, ?????????????? ???????????????????? ?? ?????? ??????????.{"??"}
						</Override>
						<Override slot="Text TBody Row-3 Col-2">
							true
						</Override>
						<Override slot="Text TBody Row-4 Col-0">
							?????????????????? ??????????
						</Override>
						<Override slot="Text TBody Row-4 Col-1">
							?????? ???????????????? ???????????? ????????????????, ?????????????????????? ???????????? ???????? ??????????????????{"??"}
						</Override>
						<Override slot="Text TBody Row-4 Col-2">
							true
						</Override>
						<Override slot="Text TBody Row-5 Col-0">
							?????????????????? ???????????? ?????? ???????????? ????????????????
						</Override>
						<Override slot="Text TBody Row-5 Col-1">
							?????? ???????????????? ???????????? ????????????????, ???????? ?????? ?????? ???? ????????????????????????, ???????????????????????? ????????????. ?????? ???????????? ???????????????? ????????????????????, ???????????? ????????????????.
						</Override>
						<Override slot="Text TBody Row-5 Col-2">
							true
						</Override>
						<Override slot="Text TBody Row-7 Col-0">
							?????????????????????? ????????????
						</Override>
						<Override slot="Text TBody Row-6 Col-0">
							???????????????? ???????????????? ??????????????????????
						</Override>
						<Override slot="Text TBody Row-6 Col-1">
							<Strong>
								?? ????????????????????????:{"??"}
								<br />
							</Strong>
							- ?????? ???????????? "?????? ??????????" ?? "?????? ????????????"?? - ?????????????????????? ?? ???????????????????????? ?????????? ?????? ?????????????????? ??????????????????????;
							<br />
							- ?????? ???????????? "???? ??????????" - ?????????????????????? ?? ???????????????????????? ??????-???? ??????????????????????, ???????????????????????? ?? ?????????????? ????????????. ?????????? ???????????????????? ???????????? "?????????????????? ??????". ???? ??????????, ???????????????????????? ?????????????? ???? ??????????????????????.
							<br />
							<Strong>
								???? ??????????:{"??"}
							</Strong>
							<br />
							- ???????? ?????????????? "?????? ?????????? " - ?????????????????????? ?? ???????????????????????? ?????????? ?????? ?????????????????? ??????????????????????;
							<br />
							- ???????? ?????????????? " ?????? ???????????? " -?? ?????????????????????? ?? ???????????????????????? ??????-???? ??????????????????????, ???????????????????????? ?? ?????????????? ????????????. ??????????, ?????? ???????????? ???????????????????????? ???????????????? ?????????? ???? ???????????????????? ??????????????????????.
							<br />
							- ???????? ?????????????? " ???? ?????????? " -???? ?????????????????????? ?? ???????????????????????? ??????-???? ??????????????????????, ???????????????????????? ?? ?????????????? ????????????. ?????????? ???????????????????? ???????????? "?????????????????? ??????". ???? ??????????, ???????????????????????? ?????????????? ???? ??????????????????????.
							<br />
							<br />
							??????-???? ???????????????????????? ?????????????????????? ?????????? ???? ?????????????? ???????????? ?????????????? ?? ???????????????? ???????????? ?? ??????????????????????????.{"??"}
						</Override>
						<Override slot="Text TBody Row-6 Col-2">
							?????? ??????????
						</Override>
						<Override slot="Text TBody Row-7 Col-1">
							<Strong>
								auto{"??"}
							</Strong>
							- ?????????????????? ?????????????????????? ???? ????????????????.
							<br />
							16:9, 4:3, 3:2, 1:1, 2:3, 3:4,?? 9:16
							<br />
							<br />
							?????????????????????? ???????????? ???????????????????????????? ???? ???????????? ??????????????????????.{"??"}
						</Override>
						<Override slot="Text TBody Row-7 Col-2">
							auto
						</Override>
						<Override slot="Text TBody Row-8 Col-0">
							???????????????????????? ???????????? ??????????????????????
						</Override>
						<Override slot="Text TBody Row-8 Col-1">
							???????????????????????? ???????????? ?????????? ?? ????????????????????????. 1fr - ???????????????? ?????? ?????????????????? ????????????????????????, ?? ???????????? ???????????????????? ????????????????
						</Override>
						<Override slot="Text TBody Row-8 Col-2">
							1fr
						</Override>
						<Override slot="Text TBody Row-9 Col-0">
							?????????????????????? ???????????? ??????????????????????
						</Override>
						<Override slot="Text TBody Row-9 Col-1">
							?????????????????????? ???????????? ?????????? ?? ????????????????????????.{"??"}
						</Override>
						<Override slot="Text TBody Row-9 Col-2">
							80
						</Override>
						<Override slot="Text TBody Row-10 Col-0">
							?????????????????? ???????????? ?????? ????????????
						</Override>
						<Override slot="Text TBody Row-10 Col-1">
							???????? ???????????? ?????????????????????? ???? ????????????????????????, ???????????????????????? ????????????.?? ?????? ???????????? ???????????????? ????????????????????, ???????????? ????????????????.
						</Override>
						<Override slot="Text TBody Row-10 Col-2">
							false
						</Override>
					</Components.Table>
				</Box>
				<Box quarkly-title="Props" height="auto" min-height="20px">
					<Text font="600 24px sans-serif" quarkly-title="Title">
						Props GalleryItem
					</Text>
					<Components.Table showHeader width="100%" colsProp="3" rowsProp="6">
						<Override slot="Text THead Col-0">
							????????????????
						</Override>
						<Override slot="Text THead Col-1">
							????????????????
						</Override>
						<Override slot="Text THead Col-2">
							???????????????? ???? ??????????????
						</Override>
						<Override slot="Text TBody Row-0 Col-0">
							?????????????????? image full
						</Override>
						<Override slot="Text TBody Row-1 Col-0">
							?????????????????? image preview
						</Override>
						<Override slot="Text TBody Row-2 Col-0">
							???????????? ?? ????????????????
						</Override>
						<Override slot="Text TBody Row-3 Col-0">
							???????????? ?? ????????????????
						</Override>
						<Override slot="Text TBody Row-4 Col-0">
							?????????????????? ???? ?????? ???????????? ?? ????????????
						</Override>
						<Override slot="Text TBody Row-5 Col-0">
							???????????????? ??????????????????????
						</Override>
						<Override slot="Text TBody Row-0 Col-1">
							?????? ?????????????????????? ???????????? ??????????????????????, ?????? ???????????? ????????????????
						</Override>
						<Override slot="Text TBody Row-1 Col-1">
							?????? ?????????????????????? ???????????? ??????????????????????, ?????? ???????????? ????????????????
						</Override>
						<Override slot="Text TBody Row-2 Col-1">
							???????????? ???????????????? ?? ??????-???? ????????????????
						</Override>
						<Override slot="Text TBody Row-3 Col-1">
							???????????? ???????????????? ?? ??????-???? ????????????????. ?? ????????????, ???????? ?????????????? ???????????????? ?????? ???????????? ??????????????, ???????????? ???? ??????????????????????????. ?????? ?????????????????? ??????????.{"??"}
						</Override>
						<Override slot="Text TBody Row-4 Col-1">
							?????????????????????? ?????????????????????????? ???? ?????? ???????????? ?? ???????????? ??????????, ???????? ?????????????????? ???????????????? ???? ?????????????????? ?? ?????????????????????? ??????????
						</Override>
						<Override slot="Text TBody Row-5 Col-1">
							?????????? ?????????????? ??????????????, ???????????????????????? ???????????? ???????????????? lightbox
						</Override>
						<Override slot="Text TBody Row-0 Col-2">
							-
						</Override>
						<Override slot="Text TBody Row-1 Col-2">
							4
						</Override>
						<Override slot="Text TBody Row-2 Col-2">
							1
						</Override>
						<Override slot="Text TBody Row-3 Col-2">
							1
						</Override>
						<Override slot="Text TBody Row-4 Col-2">
							true
						</Override>
						<Override slot="Text TBody Row-5 Col-2">
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