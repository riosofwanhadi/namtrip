import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
	BackgroundImage,
	Box,
	Center,
	Image,
	SimpleGrid,
	Space,
	Spoiler,
	Stack,
	Text,
	Title,
	UnstyledButton,
	useMantineTheme,
} from "@mantine/core";
import useAppRoute from "../../../routes";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { useRef } from "react";
import { FormattedMessage } from "react-intl";
import { carousel, ourAdvantages, ourPartners, ourProduct } from "./arrays";

function Homepage() {
	const theme = useMantineTheme();
	const autoplay = useRef(Autoplay({ delay: 2000 }));
	const { go } = useAppRoute();
	return (
		<Stack gap={0}>
			<Carousel
				w="100%"
				height="500"
				withIndicators
				loop
				plugins={[autoplay.current]}
				onMouseEnter={autoplay.current.stop}
				onMouseLeave={autoplay.current.reset}
			>
				{carousel.map((c) => (
					<Carousel.Slide>
						<Center style={{ background: "#73c088", height: "100%" }}>
							<Text fz={100} ta="center" fw={700} c={theme.white}>
								{c}
							</Text>
						</Center>
					</Carousel.Slide>
				))}
			</Carousel>
			<div
				id="products"
				style={{
					paddingTop: 50,
					paddingBottom: 50,
					paddingLeft: 100,
					paddingRight: 100,
					background: "#f0f0f0",
				}}
			>
				<Title order={3}>
					<FormattedMessage id="product" />
				</Title>
				<Text>
					<FormattedMessage id="productChoices" />
				</Text>
				<Space h={20} />
				<SimpleGrid cols={3}>
					{ourProduct.map((op) => (
						<UnstyledButton onClick={() => go(op.path)}>
							<Box mx="auto">
								<BackgroundImage
									src="https://imonyemelukwe.com/wp-content/uploads/2018/12/btx-background-placeholder-03.jpg"
									radius="md"
								>
									<Center p="md" h={100}>
										<Text ta="center" fz="20" fw={500} c={theme.white}>
											<FormattedMessage id={op.id} />
										</Text>
									</Center>
								</BackgroundImage>
							</Box>
						</UnstyledButton>
					))}
				</SimpleGrid>
			</div>
			<div
				id="advantages"
				style={{
					paddingTop: 50,
					paddingBottom: 50,
					paddingLeft: 100,
					paddingRight: 100,
				}}
			>
				<Title order={3}>
					<FormattedMessage id="shouldNamtrip" />
				</Title>
				<Space h={20} />
				<Carousel
					slideSize={300}
					height={300}
					align="start"
					slideGap="xl"
					draggable={true}
					dragFree={true}
					loop
				>
					{ourAdvantages.map((oa) => (
						<Carousel.Slide>
							<Center style={{ background: "#73c088", height: "100%" }}>
								<Stack gap={0} align="center" w={300}>
									<Text ta="center" fw={700} fz={50} c={theme.white}>
										{oa.number}
									</Text>
									<Text fw={700} ta="center" fz="20" c={theme.white}>
										<FormattedMessage id={oa.advantages} />
									</Text>
									<Text ta="center" w={250} c={theme.white}>
										<FormattedMessage id={oa.description} />
									</Text>
								</Stack>
							</Center>
						</Carousel.Slide>
					))}
				</Carousel>
			</div>
			<div
				style={{
					paddingTop: 50,
					paddingBottom: 50,
					paddingLeft: 100,
					paddingRight: 100,
					background: "#f0f0f0",
				}}
			>
				<Stack align="center" w="100%" gap={0}>
					<Title order={1}>
						<FormattedMessage id="ourPartners" />
					</Title>
					<Space h={50} />
					<SimpleGrid cols={10} spacing="50" verticalSpacing="50">
						{ourPartners.map((op) => (
							<Image h={50} w={100} src={op} />
						))}
					</SimpleGrid>
				</Stack>
			</div>
		</Stack>
	);
}

export default Homepage;
