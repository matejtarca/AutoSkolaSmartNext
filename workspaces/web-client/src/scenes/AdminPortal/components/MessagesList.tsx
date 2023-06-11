import React from "react";
import { Messages } from "../../../services/types";

type MessagesListProps = {
  messages: Messages;
};
const MessagesList = ({ messages }: MessagesListProps) => {
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
      <h2 style={{ marginTop: 20 }}>Správy</h2>
      <table>
        <thead>
          <tr>
            <th>Poslané dňa</th>
            <th>Meno a priezvisko</th>
            <th>Email</th>
            <th>Správa</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td>{message.createdAt}</td>
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>{message.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MessagesList;
