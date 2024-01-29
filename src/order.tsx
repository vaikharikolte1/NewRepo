//import { WithdataProps } from "./Withdata";
import React from "react";
import withdata, { WithdataProps } from "./withdata";

interface OrderProps {
  name: string;
  age: number;
}
const Order: React.FC<OrderProps & WithdataProps> = (props) => {
  const { name, age, data } = props;
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <ul>
        {data.map((item: any, index: any) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
const OrderWithdata = withdata(Order);
export default OrderWithdata;
