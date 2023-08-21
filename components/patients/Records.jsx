"use client";
import { Flex, Box, Avatar, Text, Button } from "@radix-ui/themes";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export default function ({ data }) {
	return (
		<Flex direction="column" gap="3" className="my-8">
			{Array(5)
				.fill("")
				.map((_, index) => (
					<Item key={index} index={index} data={data} />
				))}
		</Flex>
	);
}

function Item({ index, data }) {
	return (
		<Flex
			align="center"
			justify="between"
			width="100%"
			gap="3"
			className={twMerge("p-3 rounded-md", index % 2 && "bg-neutral-100/50")}
		>
			<Avatar fallback="A" size="4" />
			<Flex gap="1" align="left" direction="column" className="mr-auto">
				<Text weight="medium">{data.Name}</Text>
				<Text size="1">UHID: {data.UHID}</Text>
			</Flex>
			<Link href="/patients/KH123456">
				<Button variant="outline">
					Open
				</Button>
			</Link>
		</Flex>
	);
}
