import { BackwardToggle } from "@mr/frontend-deck-backward-toggle";
import { Display } from "@mr/frontend-deck-display";
import { ForwardToggle } from "@mr/frontend-deck-forward-toggle";
import { KnobPanel } from "@mr/frontend-deck-knob-panel";

import { DeckStyle } from "./styles";

/**
 * Rover control deck.
 *
 * @remarks
 * Allows to issue commands from toggles and knob to update the rover position and cardinal direction.
 * All staging commands are shown on the display.
 */
export const Deck = () => {
  return (
    <DeckStyle>
      <Display />
      <KnobPanel />
      <ForwardToggle />
      <BackwardToggle />
    </DeckStyle>
  );
};
