"use client";
import { Text, Heading, Flex, Button } from "@radix-ui/themes";
import Link from "next/link";
import Form from "@/components/me/edit/Form";
import { userStore } from "@/stores/user.store.js";
import { shallow } from "zustand/shallow";

export default function (props) {
	const [updateFirstName, updateLastName] = userStore(
		(state) => [state.updateFirstName, state.updateLastName],
		shallow,
	);
	return (
		<>
			<Flex justify="between" align="center" className="py-8 border-b-2">
				<Flex direction="column" align="left" gap="1">
					<Heading>Edit your profile</Heading>
					<Text size="2">Personal details</Text>
				</Flex>
			</Flex>
			<Form />
		</>
	);
}
