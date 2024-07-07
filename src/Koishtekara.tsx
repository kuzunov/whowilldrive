import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import PlusIcon from "@mui/icons-material/Add";
import React, { useState } from "react";

const Koishtekara = () => {
	const [names, setNames] = useState<string[]>([]);
	const [current, setCurrent] = useState<string>();

	return (
		<Stack
			direction={"column"}
			sx={{
				flex: 1,
				alignItems: "flex-start",
				justifyContent: "space-between",
			}}
		>
			<Stack direction={"row"} gap={1}>
				<TextField
					value={current}
					variant={"filled"}
					onChange={(e) => setCurrent(e.target.value)}
				/>
				<IconButton
					aria-label="Добави льольо"
					size="large"
					// variant={"contained"}
					color={"primary"}
					onClick={() => {
						current && setNames((prev) => [...prev, current]);
						setCurrent("");
					}}
				>
					<PlusIcon />
				</IconButton>
			</Stack>
			{names.map((n) => {
				return <Box>{n}</Box>;
			})}
			<Button
				variant={"contained"}
				color={"success"}
				onClick={() => console.log(names)}
				sx={{ flex: 1, marginY: 5 }}
			>
				Реши!
			</Button>
		</Stack>
	);
};

export default Koishtekara;
