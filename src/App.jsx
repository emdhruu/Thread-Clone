import { Button, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Container maxW="50%" mt={5}>
      <Header />
      <Outlet />
    </Container>
  );
}

export default App;
