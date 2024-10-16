import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [add, setadd] = useState({ name: "", email: "" });
  const [user, setUser] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const navigate = useNavigate();

  const onchangeData = (e) => {
    setadd({ ...add, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`http://localhost:8000/users`)
      .then((result) => {
        return result.json();
      })
      .then((res) => {
        console.log(res);
        setUser(res);
      });
  };

  const deleteUser = (id) => {
    fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      setUser(user.filter((u) => u.id !== id));
    });
  };

  const updateUser = (u) => {
    setadd({ name: u.name, email: u.email });
    setIsEditing(true);
    setCurrentUserId(u.id);
  };

  const submitdata = (e) => {
    e.preventDefault();
    if (isEditing) {
      fetch(`http://localhost:8000/users/${currentUserId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(add),
      }).then((res) => {
        console.log(res);
        setIsEditing(false);
        setCurrentUserId(null);
        getData();
      });
    } else {
      fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(add),
      }).then((res) => {
        console.log(res);
        getData();
      });
    }
    setadd({ name: "", email: "" });
  };

  return (
    <>
      <br />
      <br />

      <form action="" onSubmit={submitdata}>
        <label htmlFor="" style={{ fontWeight: "bold" }}>
          {" "}
          Name :{" "}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={add.name}
          style={{
            padding: "8px 20px",
            borderRadius: "3px",
            border: "1px solid black",
            marginLeft: "5px",
          }}
          onChange={onchangeData}
        />
        <label htmlFor="" style={{ marginLeft: "20px", fontWeight: "bold" }}>
          Email :
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={add.email}
          style={{
            padding: "8px 20px",
            borderRadius: "3px",
            border: "1px solid black",
            marginLeft: "5px",
          }}
          onChange={onchangeData}
        />
        <input
          type="submit"
          value={isEditing ? "Update" : "Submit"}
          style={{
            backgroundColor: "darkblue",
            marginLeft: "20px",
            border: "none",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
            padding: "10px 20px",
          }}
        />
      </form>

      <table
        rules="all"
        style={{
          margin: "0 auto",
          marginTop: "40px",
          border: "2px solid black",
          width: "700px",
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "10px" }}>Name</th>
            <th style={{ padding: "10px" }}>Email</th>
            <th colSpan={2} style={{ padding: "10px" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {user.map((u) => {
            return (
              <tr>
                <td style={{ padding: "10px" }}> {u.name} </td>
                <td style={{ padding: "10px" }}> {u.email} </td>
                <td style={{ padding: "10px" }}>
                  <button
                    onClick={() => {
                      deleteUser(u.id);
                    }}
                    style={{
                      backgroundColor: "darkred",
                      border: "none",
                      borderRadius: "5px",
                      color: "white",
                      cursor: "pointer",
                      padding: "10px 20px",
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td style={{ padding: "10px" }}>
                  <button
                    onClick={() => {
                      updateUser(u);
                    }}
                    style={{
                      backgroundColor: "darkgreen",
                      border: "none",
                      borderRadius: "5px",
                      color: "white",
                      cursor: "pointer",
                      padding: "10px 20px",
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default User;
