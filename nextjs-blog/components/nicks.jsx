import React, { createContext, useContext } from "react";
import Model_Nba from "./modalNBA";
import Inf_team from "./Inf_team";
export const sliding_Picture_params = createContext();
import { Container, Row, Col } from "react-bootstrap";
const Nicks = () => {
  return (
    <>
      <Model_Nba
        imageLeft={"/images/31895f6bec7431f667d60e98e63ece67.jpg"}
        imageCenter={"/images/New-York-Knicks-emblem.jpg"}
        imageRight={"/images/MTkzOTEyNTU5MzI0MTEyMzIz.webp"}
        leftSecond={"/images/1720956071.0.webp"}
        rightSecond={"/images/0x0.webp"}
        leftThird={"/images/zgkqm3oml1rq6fjv664d.jpg"}
        rightThird={"/images/screenshot-2023-11-01-111209.png"}
        bgColor={"#0a1163"}
        teamName={"new york knicks"}
        theId={"nikcs"}
      ></Model_Nba>

      <Inf_team
        bgColor={"#0a1163"}
        IMAGEtop={"/images/jeremy-lin-science-of-streaks-merrifield_hng5xq.jpg"}
        IMAGE={"/images/jr-smith.webp"}
      >
        <p style={{ padding: "1rem" }}>
          As a matter of further perspective, the Heat have been outscored by an
          average of 4.2 points in the fourth quarter this season, second worst
          in the league. By comparison the Heat have outscored the opposition by
          1.9 points per game in first quarters, by 2.4 points per game in
          second quarters, with a negligible minus 0.2 in third periods. And
          then came Saturday’s 102-97 loss to the Bulls that snapped the
          seven-game winning streak, when the Heat led 22-1 at the outset, but
          perhaps even more discouraging, led 85-75 with 8:04 to play. And then?
          Then the fourth-quarter realities of this season happened. “I feel
          like we got into a sort of daze, a sort of fog, and we lost the game,”
          said center Bam Adebayo, who went from 24 points and eight rebounds
          through the first three quarters to no points and two rebounds in the
          fourth, attempting only one shot despite playing all 12 minutes in the
          period. The Bulls outscored the Heat 34-21 in the fourth. “In the
          end,” forward Caleb Martin said, “we got to be able to get better at
          holding a lead and finishing up the game.” To Spoelstra, it was a game
          lost on the defensive end, with the Bulls not only shooting 12 of 21
          from the field in the fourth, but 7 of 12 from beyond the arc over
          those 12 minutes. To Spoelstra, better closing defense would have
          allowed the Heat to delve more into remedying their late offensive
          struggles.
        </p>
      </Inf_team>
    </>
  );
};

export default Nicks;
