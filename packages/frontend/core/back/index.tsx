import {
  BackButtonStyle,
  DescriptionStyle,
  ErrorStyle,
  MainSectionStyle,
  SpacerStyle,
  SubSectionStyle,
} from "./styles";

/**
 * 404 page layout.
 */
export const Back = () => {
  return (
    <MainSectionStyle>
      <SubSectionStyle>
        <ErrorStyle>404</ErrorStyle>

        <SpacerStyle />

        <DescriptionStyle>Page Not Found</DescriptionStyle>
      </SubSectionStyle>

      <a href="/">
        <BackButtonStyle aria-label="to_homepage">
          Back to homepage
        </BackButtonStyle>
      </a>
    </MainSectionStyle>
  );
};
