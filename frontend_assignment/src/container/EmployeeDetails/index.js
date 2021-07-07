import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import Tabels from "../../components/Tabels";
import NoDataFound from "../../components/NoDataFound";
import HeadSection from "../../components/HeadSection";

const EmployeeDetails = () => {
  const [employeeData, setEmployeeData] = useState(null);
  const EmployeeDataUrl = "http://localhost:4001";

  const getEmployeeData = (opts) => {
    fetch(EmployeeDataUrl, opts)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setEmployeeData(result.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    const abortCtrl = new AbortController();
    const opts = { signal: abortCtrl.signal };
    getEmployeeData(opts);
    return () => {
      return abortCtrl.abort();
    };
  }, []);

  return (
    <div className="child_container">
      <HeadSection title="Child Details" />
      <div className="child_details">
        <Button path="/chart" title="Next" />
        <Tabels employeeData={employeeData} />
      </div>
    </div>
  );
};

export default EmployeeDetails;
