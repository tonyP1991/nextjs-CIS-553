import { Flex, Heading, Link, VStack } from "@chakra-ui/react";

export default function Footer() {
	return (
		<div className={'container mt-5 mb-4'}>
			<footer className={'p-2 border-top'}>
				<Flex
					as="footer"
					display={{ base: "none", smallTablet: "flex" }}
					bg="appBlue.800"
					color="white"
					pl={{ base: 16, md: "236px" }}
					pr={{ base: 16, md: 8 }}
					py={5}
					direction={{ base: "column", sm: "row" }}
					align={{ base: "center", sm: "flex-start" }}
				>
					<Flex mr={{ base: 0, sm: 32, md: 44 }} mb={8}>
						<Flex direction="column" mr={28}>
							<Heading as="h6" fontSize="md" mb={6} textTransform="uppercase">
								Pages
							</Heading>
							<VStack spacing={3} fontSize="sm" align="initial">
								<Link>Home</Link>
								<Link>Book</Link>
								<Link>Pricing</Link>
								<Link>About</Link>
								<Link>Contact</Link>
							</VStack>
						</Flex>
						<Flex direction="column">
							<Heading as="h6" fontSize="md" mb={6} textTransform="uppercase">
								Top Designer Brands
							</Heading>
							<Flex>
								<VStack spacing={3} fontSize="sm" align="initial" mr={16}>
									<Link>Eleanor Edwards</Link>
									<Link>Ted Robertson</Link>
									<Link>Annette Russell</Link>
									<Link>Jennie Mckinney</Link>
									<Link>Gloria Richards</Link>
								</VStack>
								<VStack spacing={3} fontSize="sm" align="initial">
									<Link>Philip Jones</Link>
									<Link>Product</Link>
									<Link>Colleen Russell</Link>
									<Link>Marvin Hawkins</Link>
									<Link>Bruce Simmons</Link>
								</VStack>
							</Flex>
						</Flex>
					</Flex>

				</Flex>
			</footer>
		</div>
	);
}
