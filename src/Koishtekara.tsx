import { Button, Stack, Divider, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import UserEntry from "./components/UserEntry";
import CarPicker from "./components/main/CarPicker";
import UserAdder from "./components/main/UserAdder";
import { IUser } from "./models/User/IUser";

const Koishtekara = () => {
	const [users, setUsers] = useState<IUser[]>([]);

	const removeUser = (user: IUser) => {
		setUsers(users.filter((u) => u.id !== user.id));
	};
	const addUser = (user: IUser) => {
		setUsers((prev) => [...prev, user]);
	};

	return (
		<Stack direction={{ xs: "column", md: "row" }} spacing={4} divider={<Divider orientation="vertical" flexItem />}>
			<Stack
				direction={"column"}
				sx={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					gap: 3,
				}}
			>
				<Box>
					<Typography variant="h6" gutterBottom color="primary">Добави хора</Typography>
					<UserAdder addUser={addUser} />
				</Box>

				<Box flex={1}>
					<Typography variant="subtitle1" color="textSecondary" gutterBottom>
						Списък с пътници ({users.length})
					</Typography>
					<Stack direction={"row"} gap={1} flexWrap={"wrap"}>
						{users.map((u) => {
							return <UserEntry key={u.id} user={u} removeUser={removeUser} />;
						})}
						{users.length === 0 && (
							<Typography variant="body2" color="textSecondary" sx={{ fontStyle: "italic", mt: 1 }}>
								Няма добавени хора.
							</Typography>
						)}
					</Stack>
				</Box>

				<Button
					variant={"contained"}
					color={"success"}
					size="large"
					onClick={() => console.log(users)}
					sx={{ mt: "auto", alignSelf: "flex-start", py: 1.5, px: 4, borderRadius: 2 }}
				>
					Реши кой ще кара!
				</Button>
			</Stack>

			<Stack flex={1} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
				<Box>
					<Typography variant="h6" gutterBottom color="primary">Избор на автомобил</Typography>
					<CarPicker numberOfPeople={users.length} />
				</Box>
			</Stack>
		</Stack>
	);
};

export default Koishtekara;
