"use client";
import { Heading, Flex, Button } from "@radix-ui/themes";
import { Plus, MagnifyingGlass } from "@phosphor-icons/react";
import Records from "@/components/patients/Records";

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
			<Flex justify="between" align="center" className="py-8 border-b-2">
				<Heading>Patient Records</Heading>
				<Flex gap="6" align="center">
					<Button variant="ghost">
						<MagnifyingGlass size={24} />
					</Button>
					<Button>
						<Plus weight="bold" />
						New
					</Button>
				</Flex>
			</Flex>
			<Records data={data}/>
		</>
	);
}
