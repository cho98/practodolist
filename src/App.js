import React from "react";
import Router from "./shared/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import styled from "styled-components";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Router />
      </Container>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;

const Container = styled.div`
  width: 90%;
  height: 90%;
  position: absolute;
  overflow-x: hidden;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
`;
