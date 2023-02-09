import { ControlPanel } from "@mr/frontend-core-control-panel";
import { Header } from "@mr/frontend-core-header";
import { Layout } from "@mr/frontend-core-layout";

/**
 * Homepage.
 */
const App = () => {
  return <Layout header={<Header />} page={<ControlPanel />} />;
};

export default App;
