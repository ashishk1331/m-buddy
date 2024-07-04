import Header from "@/components/root/Header";
import { Flex } from "@radix-ui/themes";

export default function RootLayout({ children }) {
  return (
    <Flex align="center" justify="center" gap="3" className="h-full">
      <Header />
      <Flex direction="column" className="m-8 w-full h-full">
        {children}
      </Flex>
    </Flex>
  );
}
