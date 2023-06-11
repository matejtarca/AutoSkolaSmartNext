import React from "react";
import { Applications, Config, Messages } from "../../services/types";
import ConfigForm from "./components/ConfigForm";
import ApplicationsTable from "./components/ApplicationsTable";
import MessagesList from "./components/MessagesList";

export type AdminPortalProps = {
  applications: Applications;
  currentConfig: Config;
  messages: Messages;
};
const AdminPortal = ({
  applications,
  currentConfig,
  messages,
}: AdminPortalProps) => {
  return (
    <div style={{ padding: "5px 5px" }}>
      <h1>Admin Portal</h1>
      <ConfigForm currentConfig={currentConfig} />
      <ApplicationsTable applications={applications} />
      <MessagesList messages={messages} />
      <div style={{ marginTop: 200 }}></div>
    </div>
  );
};

export default AdminPortal;
