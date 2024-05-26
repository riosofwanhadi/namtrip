import {
	ActionIcon,
	AppShell,
	Button,
	Group,
	Image,
	SegmentedControl,
	Stack,
	Text,
	Title,
	UnstyledButton,
	useMantineTheme,
} from "@mantine/core";
import { Outlet } from "react-router-dom";
import { logo } from "../assets";
import useAppRoute from "../routes";
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandWhatsapp,
	IconCopyright,
} from "@tabler/icons-react";
import { useState } from "react";
import { LOCALES } from "../I18N";
import { eng, id } from "../assets";
import { useSelectLanguageAction } from "../hooks/changeLanguage/hook";
import { FormattedMessage } from "react-intl";
import { NavHashLink } from "react-router-hash-link";

function MainLayout() {
	const [language, setLanguage] = useState("en-us");
	const { go } = useAppRoute();
	const { setTranslate } = useSelectLanguageAction();
	const theme = useMantineTheme();

	return (
		<AppShell header={{ height: 85 }}>
			<AppShell.Header px={10} py={15}>
				<Group justify="space-between">
					<Group justify="left" gap={30}>
						<UnstyledButton mr={20}>
							<Group gap={10}>
								<Image src={logo} h={50} />
								<Stack gap={0}>
									<Text fw={700} mb={-10} c="#73c088" fz={20}>
										NAMTRIP
									</Text>
									<Text c="#73c088">Tour & Travel</Text>
								</Stack>
							</Group>
						</UnstyledButton>
						<NavHashLink
							to="/#products"
							scroll={(el: any) =>
								el.scrollIntoView({ behavior: "smooth", block: "center" })
							}
						>
							<Text c="#73c088" style={{ fontStyle: "normal" }}>
								<FormattedMessage id="headProduct" />
							</Text>
						</NavHashLink>
						<NavHashLink
							to="/#advantages"
							activeStyle={{ color: "black" }}
							scroll={(el: any) =>
								el.scrollIntoView({ behavior: "smooth", block: "center" })
							}
						>
							<Text c="#73c088">
								<FormattedMessage id="headAdvantage" />
							</Text>
						</NavHashLink>
					</Group>
					<Group justify="right">
						<Button color="#73c088" w={100} onClick={() => go("/login")}>
							<FormattedMessage id="login" />
						</Button>
						<Button
							variant="outline"
							w={100}
							color="#73c088"
							onClick={() => go("/register")}
						>
							<FormattedMessage id="register" />
						</Button>
						<SegmentedControl
							h={40}
							value={language}
							onChange={(value: string) => {
								setLanguage(value);
								setTranslate({ key: value as string, value: value as LOCALES });
							}}
							data={[
								{
									value: LOCALES.INDONESIA,
									label: (
										<Image
											radius="md"
											src={id}
											width={30}
											height={20}
											fit="contain"
										/>
									),
								},
								{
									value: LOCALES.ENGLISH,
									label: (
										<Image
											radius="md"
											src={eng}
											width={30}
											height={20}
											fit="contain"
										/>
									),
								},
							]}
						/>
					</Group>
				</Group>
			</AppShell.Header>
			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
			<div style={{ width: "100%" }}>
				<Group align="center" justify="center">
					<Image src={logo} w={100} />
					<Stack gap={0} align="center" justify="center">
						<Text mb={-40} fz={70} fw={700} c="#73c088">
							NAMTRIP
						</Text>
						<Text fz={53} fw={500} c="#73c088">
							Tour & Travel
						</Text>
					</Stack>
				</Group>
			</div>
			<div
				style={{
					width: "100%",
					paddingTop: 50,
					paddingBottom: 50,
					backgroundColor: "#73c088",
				}}
			>
				<Stack align="center" justify="center">
					<Title order={3} c={theme.white}>
						<FormattedMessage id="socMed" />
					</Title>
					<Group>
						<ActionIcon
							radius="xl"
							variant="subtle"
							color={theme.white}
							onClick={() =>
								window.open(
									"https://www.instagram.com/namtriptravel/",
									"_blank"
								)
							}
						>
							<IconBrandFacebook />
						</ActionIcon>
						<ActionIcon
							radius="xl"
							variant="subtle"
							color={theme.white}
							onClick={() =>
								window.open(
									"https://www.instagram.com/namtriptravel/",
									"_blank"
								)
							}
						>
							<IconBrandInstagram />
						</ActionIcon>
						<ActionIcon
							radius="xl"
							variant="subtle"
							color={theme.white}
							onClick={() =>
								window.open(
									"https://www.instagram.com/namtriptravel/",
									"_blank"
								)
							}
						>
							<IconBrandWhatsapp />
						</ActionIcon>
					</Group>
					<Group gap={0} justify="center">
						<Text c={theme.white}>Copyright</Text>
						<IconCopyright
							size={12}
							color={theme.white}
							style={{ marginTop: 5, marginLeft: 5, marginRight: 5 }}
						/>
						<Text c={theme.white}>NAMTRIP</Text>
					</Group>
				</Stack>
			</div>
		</AppShell>
	);
}

export default MainLayout;
