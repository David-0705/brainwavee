import FetchPointsData from "../components/Points/FetchPointsData";

import DefaultPage from "../components/DefaultPage";
import { pointsnav } from "../constants";
import CardComponent from "../components/Card/CardComponent";
import { Gradient } from "../components/design/Services";
import { BackgroundCircles } from "../components/design/Hero";

const Points = () => {
  return (
    <>
    <DefaultPage nav={pointsnav}>
      <FetchPointsData />
    </DefaultPage>
    </>
  );
};

export default Points;
