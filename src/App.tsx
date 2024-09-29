import { MainFlow } from "./Components/MainFlow";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <MainFlow />
    </ChakraProvider>
  );
}

export default App;
