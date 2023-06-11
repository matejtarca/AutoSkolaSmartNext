import React from "react";
import { Applications } from "../../../services/types";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

type ApplicationsTableProps = {
  applications: Applications;
};
const ApplicationsTable = ({ applications }: ApplicationsTableProps) => {
  const { mutateAsync: deleteApplication } = useMutation((id: number) => {
    return fetch("/api/delete-application", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
  });
  const { reload } = useRouter();

  const handleDelete = (id: number, name: string) => {
    confirmAlert({
      title: "Potvrdenie zmazania",
      message: "Naozaj chcete zmazať prihlášku od " + name + "?",
      buttons: [
        {
          label: "Áno",
          onClick: async () => {
            await deleteApplication(id);
            reload();
          },
        },
        {
          label: "Nie",
        },
      ],
    });
  };
  return (
    <>
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
      <h2 style={{ marginTop: 20 }}>Prihlášky</h2>
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
              <td>
                <button
                  onClick={() => handleDelete(application.id, application.name)}
                  style={{
                    color: "red",
                    backgroundColor: "white",
                    border: "none",
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ApplicationsTable;
