"use client";
import { Heading, Flex, Button, Avatar, Text } from "@radix-ui/themes";
import { PencilSimple, ArrowLeft, Circle } from "@phosphor-icons/react";
import Link from "next/link";
import Stats from "@/components/patients/id/Stats";

export default function (props) {

	let data = {
		UHID: "KH28687",
		Name: "Ram Murti Devi",
		"Bill Number": "137018",
		Age: 68,
		Gender: "Female",
		Contact: 9616772510,
	};
	
	return (
		<>
			<Flex className="mt-6">
				<Link href="/patients">
					<Button variant="outline">
						<ArrowLeft />
						Back
					</Button>
				</Link>
			</Flex>
			<Flex
				justify="between"
				align="center"
				gap="3"
				className="py-8 border-b-2"
			>
				<Avatar fallback="r" size="5" />
				<Flex direction="column" align="left" gap="1">
					<Heading>{data["Name"]}</Heading>
					<Flex gap="3" align="center">
						<Text size="2">68 F</Text>
						<Circle weight="fill" size={6} className="fill-indigo-600" />
						<Text size="2">{data.Contact}</Text>
					</Flex>
				</Flex>
				<Flex gap="6" align="center" className="ml-auto">
					<Button>
						<PencilSimple weight="fill" />
						Edit
					</Button>
				</Flex>
			</Flex>
			<Stats data={data} />
		</>
	);
}
