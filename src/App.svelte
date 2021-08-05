<script lang="ts">
  import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";
  import { Container, Row, Col } from "sveltestrap";
  import LightRailInfo from "./ LightRailInfo.svelte";
  export let name: string;

  const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  <Container>
    <Row class="justify-content-center">
      <Col md={8} xs={12}>
        <LightRailInfo />
      </Col>
    </Row>
  </Container>
</QueryClientProvider>
