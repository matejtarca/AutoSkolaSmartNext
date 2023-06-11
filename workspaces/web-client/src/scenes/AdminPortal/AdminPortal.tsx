import React from "react";
import { Applications, Config } from "../../services/types";
import ConfigForm from "./components/ConfigForm";
import ApplicationsTable from "./components/ApplicationsTable";

export type AdminPortalProps = {
  applications: Applications;
  currentConfig: Config;
};
const AdminPortal = ({ applications, currentConfig }: AdminPortalProps) => {
  return (
    <div style={{ padding: "5px 5px" }}>
      <h1>Admin Portal</h1>
      <ConfigForm currentConfig={currentConfig} />
      <ApplicationsTable applications={applications} />
    </div>
  );
};

export default AdminPortal;
