"use client";
import { Heading, Flex, Button } from "@radix-ui/themes";
import { CheckCircle, ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";
import Form from "@/components/patients/new/Form";

export default function (props) {
	return (
		<>
			<Flex className="mt-6">
				<Link href="/app/patients">
					<Button variant="outline">
						<ArrowLeft />
						Back
					</Button>
				</Link>
			</Flex>
			<Flex justify="around" align="center" className="py-8 border-b-2">
				<Heading>Add new patient</Heading>
			</Flex>
			<Form />
		</>
	);
}
