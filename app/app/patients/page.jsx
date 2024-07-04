"use client";
import { Heading, Flex, Button } from "@radix-ui/themes";
import { Plus, MagnifyingGlass } from "@phosphor-icons/react";
import Records from "@/components/patients/Records";
import Link from "next/link";
import { patientStore } from "@/stores/patient.store.js";

export default function (props) {
	let patients = patientStore((state) => state.patients);

	return (
		<>
			<Flex justify="between" align="center" className="py-8 border-b-2">
				<Heading>Patient Records</Heading>
				<Flex gap="6" align="center">
					<Button variant="ghost">
						<MagnifyingGlass size={24} />
					</Button>
					<Link href="/app/patients/new">
						<Button>
							<Plus weight="bold" />
							New
						</Button>
					</Link>
				</Flex>
			</Flex>
			<Records data={patients} />
		</>
	);
}
