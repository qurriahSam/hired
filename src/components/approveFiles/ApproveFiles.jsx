import React from "react";
import ApproveFileContainer from "./ApproveFileContainer";

const ApproveFiles = () => {
  //const [jobseekerFiles, setJobseekerFiles] = React.useState([]);
  return (
    <div className="mt-3 container">
      <ApproveFileContainer />
      <ApproveFileContainer />
      <ApproveFileContainer />
      <ApproveFileContainer />
      <ApproveFileContainer />
    </div>
  );
};

export default ApproveFiles;
