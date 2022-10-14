import BarChart from "./BarChart";
import React, { useState } from "react";
import AreaChart from "./AreaChart";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { useSelector } from "react-redux";

function ChartsContainer() {
  const [barChart, setBartChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);

  return (
    <Wrapper>
      <h4>Montly Applications</h4>
      <button type="button" onClick={() => setBartChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>

      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
}

export default ChartsContainer;
