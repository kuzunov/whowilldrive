import React from "react";
import Koishtekara from "./Koishtekara";
import { Box, Divider, Stack } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<Stack
			direction={"column"}
			flex={1}
			height={"100vh"}
			sx={{ backgroundColor: "lightblue" }}
			alignContent={"space-between"}
			paddingX={20}
		>
			<Box sx={{ flex: 0.2 }}>
				<Header />
			</Box>
			<Divider sx={{ marginY: 10 }} />
			<Box sx={{ flex: 1 }}>
				<Koishtekara />
			</Box>
			<Divider sx={{ marginY: 2 }} />
			<Box sx={{ justifySelf: "flex-end", bottom: 0, flex: 0.1 }}>
				<Footer />
			</Box>
		</Stack>
	);
}

export default App;
