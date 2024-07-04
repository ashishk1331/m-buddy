"use client";
import { Heading, Flex, Button, Avatar, Text } from "@radix-ui/themes";
import { PencilSimple, ArrowLeft, Circle } from "@phosphor-icons/react";
import Link from "next/link";
import Stats from "@/components/patients/id/Stats";
import { patientStore } from "@/stores/patient.store.js";

export default function ({ params }) {
	let patients = patientStore((state) => state.patients);
	let { id } = params;

	let data = findPatient(patients, id);

	return (
		data && (
			<>
				<Flex className="mt-6">
					<Link href="/app/patients">
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
					<Avatar fallback={data.firstName.charAt(0).toUpperCase()} size="5" />
					<Flex direction="column" align="left" gap="1">
						<Heading>
							{data.firstName + " " + data.lastName}
						</Heading>
						<Flex gap="3" align="center">
							<Text size="2">
								{data.age} {data.gender.charAt(0).toUpperCase()}
							</Text>
							<Circle
								weight="fill"
								size={6}
								className="fill-indigo-600"
							/>
							<Text size="2">{data.UHID}</Text>
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
		)
	);
}

function findPatient(patients, id) {
	let data = null;
	for (let item of patients) {
		if (item.UHID === id) {
			data = item;
			break;
		}
	}
	return data;
}
