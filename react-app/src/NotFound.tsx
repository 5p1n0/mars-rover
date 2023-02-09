import { Back } from "@mr/frontend-core-back";
import { Layout } from "@mr/frontend-core-layout";

/**
 * 404 error page.
 */
const NotFound = () => {
  return <Layout page={<Back />} />;
};

export default NotFound;
