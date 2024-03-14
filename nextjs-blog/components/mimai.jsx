import React, { createContext } from "react";
import Model_Nba from "./modalNBA";
import Inf_team from "./Inf_team";
export const sliding_Picture_params = createContext();
const Mimai = () => {
  return (
    <>
      <Model_Nba
        imageLeft={"/images/bron3.jpg"}
        imageCenter={"/images/white.jpg"}
        imageRight={"/images/dwade.jpg"}
        leftSecond={"/images/hug.jpg"}
        rightSecond={"/images/blueBulter.jpg"}
        leftThird={"/images/miami-heat-big.jpg"}
        rightThird={"/images/jimmy.jpg"}
        bgColor={"#52050b"}
        teamName={"miami heat"}
        theId={"miami"}
      ></Model_Nba>

      <Inf_team
        bgColor={"#52050b"}
        IMAGEtop={"/images/nba_g_lebron15_576.jpg"}
        IMAGE={"/images/lbj2.jpg"}
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

export default Mimai;
