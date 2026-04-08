import React from "react";
import Koishtekara from "./Koishtekara";
import { Box, Stack, Container, Paper } from "@mui/material";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";

function App() {
	return (
		<Stack
			direction={"column"}
			sx={{
				minHeight: "100vh",
				backgroundColor: "#f5f5f5", // Light gray background
			}}
		>
			<Box sx={{ position: "sticky", top: 0, zIndex: 1000, bgcolor: "primary.main", color: "white", boxShadow: 3, paddingY: 2, textAlign: "center" }}>
				<Header />
			</Box>

			<Container maxWidth="lg" sx={{ flexGrow: 1, paddingY: 4 }}>
				<Paper elevation={3} sx={{ padding: 4, borderRadius: 2, backgroundColor: "white", minHeight: "70vh" }}>
					<Koishtekara />
				</Paper>
			</Container>

			<Box sx={{ bgcolor: "grey.900", color: "white", paddingY: 3, textAlign: "center", marginTop: "auto" }}>
				<Footer />
			</Box>
		</Stack>
	);
}

export default App;
