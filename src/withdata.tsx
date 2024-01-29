import React, { ComponentType, useState, useEffect } from "react";
export interface WithdataProps {
  data: any[];
}
const Withdata = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const Withdata: React.FC<P & WithdataProps> = (props) => {
    const [data, setdata] = useState<any[]>([]);
    useEffect(() => {
      setTimeout(() => {
        const fetchedData = ["Data1", "Data 2", "Data 3"];
        setdata(fetchedData);
      }, 2000);
    }, []);
    return <WrappedComponent {...props} data={data} />;
  };
  return Withdata;
};
export default Withdata;
