import { ArrowDown } from "react-feather";

import {
  ButtonStyle,
  DesciptionStyle,
  FancyTextStyle,
  RoverControlStyle,
  SectionStyle,
  TitleStyle,
} from "./styles";

/**
 * Home Page introduction.
 *
 * @remarks
 * Page introduction with a description of the game rules.
 */
export const Header = () => {
  return (
    <SectionStyle>
      <TitleStyle>Mars Rover</TitleStyle>
      <DesciptionStyle>
        <FancyTextStyle>
          Hi fellow spaceman!
        </FancyTextStyle>
        <br /><br />
        To accomplish your mission you must recover material samples from Mars<br />
        Search for them with the rover<br />
        Use the knob to change direction and the toggles to move{" "}
        <RoverControlStyle color="#20bbc2">
          forward
        </RoverControlStyle>{" "}
        or{" "}
        <RoverControlStyle color="#c22720">
          backward
        </RoverControlStyle>
        <br />
        Check and update your issued commands through the{" "}
        <RoverControlStyle color="#bd2ee7">
          console prompt
        </RoverControlStyle>
        <br />
        Then send them to the rover!
      </DesciptionStyle>
      <a href="#control-panel">
        <ButtonStyle aria-label="to_control_panel">
          <ArrowDown size={24} />
        </ButtonStyle>
      </a>
    </SectionStyle>
  );
};
