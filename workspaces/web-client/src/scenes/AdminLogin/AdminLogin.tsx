import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useRouter } from "next/router";

type LoginForm = {
  username: string;
  password: string;
};

const AdminLogin = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const { push } = useRouter();
  const { mutate, isError } = useMutation(
    async (data: LoginForm) => {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res.ok) {
        return res;
      }
      if (res.status === 401) {
        throw new Error("Invalid username or password");
      }
      throw new Error("Something went wrong");
    },
    {
      onSuccess: async (res) => {
        const data = await res.json();
        if (data.success) {
          document.cookie = `token=${data.token};max-age=86400;path=/`;
          push("/admin");
        }
      },
    }
  );
  const onSubmit = (data: LoginForm) => {
    mutate(data);
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "50vw" }}>
          <h1>Admin Login</h1>
          {isError && (
            <div className="alert alert-danger" role="alert">
              Invalid username or password
            </div>
          )}
          <form
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                className="form-control"
                id="username"
                type="text"
                {...register("username", { required: true })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                id="password"
                type="password"
                {...register("password", { required: true })}
              />
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              style={{ backgroundColor: "#0d6efd", width: "fit-content" }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
