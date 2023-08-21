"use client";
import { Text, Heading, Flex, Button } from "@radix-ui/themes";
import { PencilSimple, SignOut } from "@phosphor-icons/react";
import Stats from "@/components/me/Stats";

export default function (props) {
	return (
		<>
			<Flex justify="between" align="center" className="py-8 border-b-2">
				<Flex direction="column" align="left" gap="1">
					<Heading>My Profile</Heading>
					<Text size="2">Personal details</Text>
				</Flex>
				<Flex gap="3" align="center">
					<Button>
						<PencilSimple weight="fill" />
						Edit
					</Button>
					<Button color="red">
						<SignOut weight="bold" />
						Log out
					</Button>
				</Flex>
			</Flex>
			<Stats />
		</>
	);
}
