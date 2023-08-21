"use client";
import { Flex, Box, Text, Button, Heading, Avatar } from "@radix-ui/themes";
import { HeartStraight, House, Users } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export default function (props) {
	let icon_props = {
		weight: "regular",
		size: 24,
	};

	return (
		<Flex
			width="min-content"
			gap="6"
			direction="column"
			align="left"
			className="p-6 pr-10 w-fit h-full bg-white border-r-2"
		>
			<Box>
				<HeartStraight
					weight="fill"
					size={24}
					className="fill-indigo-600"
				/>
			</Box>

			<ItemGroup className="text-zinc-800">
				<Link href="/">
					<Item icon={<House {...icon_props} />}>Dashboard</Item>
				</Link>
				<Link href="/patients">
					<Item icon={<Users {...icon_props} />}>Patients</Item>
				</Link>
			</ItemGroup>

			<ItemGroup className="mt-auto">
				<Link href="/me">
					<Item icon={<Avatar size="2" fallback="r" />}>
						R. Singh
					</Item>
				</Link>
			</ItemGroup>
		</Flex>
	);
}

function ItemGroup({ children, className }) {
	return (
		<Flex
			gap="1"
			align="left"
			direction="column"
			className={twMerge(className)}
		>
			{children}
		</Flex>
	);
}

function Item({ icon, children }) {
	return (
		<Flex
			gap="3"
			align="center"
			className="hover:text-indigo-600 hover:bg-neutral-100 transition-colors p-1 cursor-pointer rounded-md"
		>
			{icon}
			<Text weight="medium" size="4">
				{children}
			</Text>
		</Flex>
	);
}
