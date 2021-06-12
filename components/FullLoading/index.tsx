import { useLoadingPageRouter } from "hooks/useLoadingPageRouter";
import { FullLoadingStyle } from "./styles";

const FullLoading = () => {
  const [pageIsLoading] = useLoadingPageRouter();
  return pageIsLoading ? (
    <FullLoadingStyle>Loading....</FullLoadingStyle>
  ) : null;
};

export default FullLoading;
