import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Koishtekara from "./src/Koishtekara";
import Header from "./src/components/main/Header";
import Footer from "./src/components/main/Footer";

function App() {
	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView contentContainerStyle={styles.scrollViewContainer}>
				<View style={styles.headerContainer}>
					<Header />
				</View>

				<View style={styles.mainContainer}>
					<View style={styles.paper}>
						<Koishtekara />
					</View>
				</View>

				<View style={styles.footerContainer}>
					<Footer />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#f5f5f5", // Light gray background
	},
	scrollViewContainer: {
		flexGrow: 1,
		display: "flex",
		flexDirection: "column",
	},
	headerContainer: {
		backgroundColor: "#1976d2", // primary.main approx
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6, // boxShadow: 3 equivalent
		paddingVertical: 16,
		alignItems: "center",
		zIndex: 1000,
	},
	mainContainer: {
		flex: 1,
		paddingVertical: 32,
		paddingHorizontal: 16,
		maxWidth: 1200, // maxWidth="lg" equivalent
		alignSelf: "center",
		width: "100%",
	},
	paper: {
		backgroundColor: "white",
		padding: 32,
		borderRadius: 8,
		minHeight: "70%",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	},
	footerContainer: {
		backgroundColor: "#212121", // grey.900 approx
		paddingVertical: 24,
		alignItems: "center",
		marginTop: "auto",
	},
});

export default App;
