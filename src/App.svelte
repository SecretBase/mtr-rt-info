<script lang="ts">
  import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";
  import { Container, Row, Col } from "sveltestrap";
  import LightRailInfo from "./components/LightRailInfo.svelte";
  import MtrInfo from "./components/MtrInfo.svelte";
  const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  <Container fluid>
    <Row class="justify-content-center">
      <Col md={6}>
        <LightRailInfo />
      </Col>
      <Col md={6}><MtrInfo /></Col>
    </Row>
  </Container>
</QueryClientProvider>
