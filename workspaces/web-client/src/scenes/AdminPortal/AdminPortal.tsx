import React from "react";
import { Applications, Config } from "../../services/types";
import ConfigForm from "./components/ConfigForm";

export type AdminPortalProps = {
  applications: Applications;
  currentConfig: Config;
};
const AdminPortal = ({ applications, currentConfig }: AdminPortalProps) => {
  return (
    <div style={{ padding: "5px 5px" }}>
      <style jsx>{`
        table {
          border-collapse: collapse;
          width: 100%;
          margin-top: 20px;
        }
        table,
        th,
        td {
          border: 1px solid black;
        }
        th,
        td {
          padding: 3px;
        }
      `}</style>
      <h1>Admin Portal</h1>
      <ConfigForm currentConfig={currentConfig} />
      <table>
        <thead>
          <tr>
            <th>Meno a priezvisko</th>
            <th>Dátum narodenia</th>
            <th>Adresa</th>
            <th>PSČ</th>
            <th>Mesto</th>
            <th>Email</th>
            <th>Telefón</th>
            <th>Poznámka</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.email}>
              <td>{application.name}</td>
              <td>{application.birthdate}</td>
              <td>{application.address}</td>
              <td>{application.psc}</td>
              <td>{application.city}</td>
              <td>{application.email}</td>
              <td>{application.phone}</td>
              <td>{application.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPortal;
