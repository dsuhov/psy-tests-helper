import React, { FC } from 'react';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, TooltipProps } from 'recharts';

const CustomTooltip: FC<TooltipProps & { chartData: any }> = ({ payload, label, active, chartData }) => {
  if (active) {
    const tooltipData = chartData.find((item: any) => item.date === label);
    return (
      <div className="custom-tooltip" style={{
        backgroundColor: "rgba(214, 251, 255, .8)",
        padding: "2px 10px",
        borderRadius: 8
      }}>
        <p className="label">{label}</p>
        {tooltipData.try.map((dataItem: any) => (
          <p className="intro" key={dataItem.hour + dataItem.min}>{dataItem.hour + ":" + dataItem.min} —
            <span style={{ color: "red" }}> {dataItem.result}</span>
          </p>
        ))}
      </div>
    );
  }

  return null;
}

export const TestsChart: FC<{
  data: Array<{
    date: string;
    result: number;
  }>
}> = ({ data }) => {
  const charData = data.map(({ date, result }) => {
    const dateInst = new Date(date);

    return {
      date: `${dateInst.getDate()}.${dateInst.getMonth()}.${dateInst.getFullYear()}`,
      hour: dateInst.getHours(),
      min: dateInst.getMinutes(),
      result: result
    }
  });

  const reducedChrtData = charData.reduce<any>((resArr, currObj) => {
    const inSameDay: any = resArr.findIndex((item: any) => item.date === currObj.date)

    if (inSameDay !== -1) {
      resArr[inSameDay].try.push({hour: currObj.hour, min: currObj.min, result: currObj.result})
    } else {
      return [...resArr, { date: currObj.date, try: [{ hour: currObj.hour, min: currObj.min, result: currObj.result }] }]
    }

    return resArr;
  }, []);
  

  return (
    <div style={{
      maxWidth: "100%",
      overflowX: "auto"
    }}>
      <LineChart width={reducedChrtData.length * 100} height={300} data={reducedChrtData} margin={{ top: 14, right: 50, bottom: 5, left: 0 }}>
        <Line type="linear" dataKey={(arg) => arg.try[0].result} stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis  />
        <Tooltip content={<CustomTooltip chartData={reducedChrtData} />} />
      </LineChart>
    </div>
    
  );
};