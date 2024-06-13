import { Container, Text, VStack, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container
      centerContent
      maxW="container.md"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      p={4}
    >
      <Box mb={6}>
        <Image src="/src/assets/stripe-logo.png" alt="Stripe Logo" />
      </Box>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Congratulations Lovable Labs Incorporated!
        </Text>
        <Text fontSize="lg">
          You've just received your first payment through Stripe.
        </Text>
        <Text fontSize="lg">
          Your first payout for this payment of <Text as="span" fontWeight="bold">$10.00</Text> (minus any fees) should land in your bank account on <Text as="span" fontWeight="bold">12/28/23</Text>.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;