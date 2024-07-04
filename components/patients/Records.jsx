"use client";
import { Flex, Box, Avatar, Text, Button } from "@radix-ui/themes";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export default function ({ data }) {
	if (data.length < 1) {
		return (
			<Flex align="center" justify="center" className="my-8">
				<Text as="p" color="gray" weight="medium" className="opacity-50">No patient records.</Text>
			</Flex>
		);
	}

	return (
		<Flex direction="column" gap="3" className="my-8">
			{data.map((item, index) => (
				<Item key={index} index={index} data={item} />
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
			className={twMerge(
				"p-3 rounded-md",
				index % 2 && "bg-neutral-100/50",
			)}
		>
			<Avatar fallback="A" size="4" />
			<Flex gap="1" align="left" direction="column" className="mr-auto">
				<Text weight="medium">{data.firstName + " " + data.lastName}</Text>
				<Text size="1">UHID: {data.UHID}</Text>
			</Flex>
			<Link href={`/app/patients/` + data.UHID}>
				<Button variant="outline">Open</Button>
			</Link>
		</Flex>
	);
}
