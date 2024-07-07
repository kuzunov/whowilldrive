import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Header = () => {
	return (
		<Stack sx={{ alignItems: "center" }}>
			<Typography fontFamily={"serif"} fontSize={20}>
				Кой ще кара?
			</Typography>
			<Typography fontFamily={"cursive"} fontSize={12}>
				Не можете да решите кой да кара?
			</Typography>
		</Stack>
	);
};

export default Header;
