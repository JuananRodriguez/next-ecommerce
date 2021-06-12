import { TopBarMenu, TopBannerPromo } from "@components";

const Header = (): React.ReactElement => {
  return (
    <header>
      <TopBannerPromo />
      <TopBarMenu />
    </header>
  );
};

export default Header;
