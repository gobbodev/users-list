import { Console } from "console";
import React, { useEffect, useState } from "react";
import * as S from "./styles";

interface User {
  ID: string;
  JobTitle: string;
  EmailAddress: string;
  FirstNameLastName: string;
  Email: string;
  Phone: string;
  Company: string;
}

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [listNumber, setListNumber] = useState(0);
 
  let userCount = 0;
  const filteredUsers = userCount <= 10 ? users.slice(0, 10) : [];

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://give-me-users-forever.vercel.app/api/users/${listNumber}/next`
      );
      const data = await response.json();
      setUsers(data.users);
      console.log(typeof data)
      console.log(typeof data.users)

    };

    fetchUsers();
  }, [listNumber]);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const cardsDoc = document.getElementsByClassName("container");
      if (cardsDoc) {
        for (const cardDoc of Array.from(cardsDoc)) {
          (cardDoc as HTMLElement).onmousemove = (e) => {
            for (const card of Array.from(
              document.getElementsByClassName("user")
            )) {
              const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

              (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
              (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
            }
          };
        }
      }
    };
    addEventListener("mousemove", handleMouseMove);
    return () => {
      removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const decreaseListNum = () => {
    setListNumber(listNumber - 10);
  }
  const increaseListNum = () =>{
    setListNumber(listNumber + 10);
  }
  return (
    <S.Users>
      <div className="container">
        {filteredUsers.map((user) => {
          userCount += 1;
          return (
            <div className="user">
              <div className="user-content" key={user.ID}>
                <div className="top">
                  <h2>{user.FirstNameLastName}</h2>
                  <h6>{user.JobTitle}</h6>
                </div>
                <div className="center">
                  <p>
                    <span>Email:</span> {user.EmailAddress}
                  </p>
                  <p>
                    <span>Secondary Email:</span> {user.Email}
                  </p>
                  <p>
                    <span>Phone:</span> {user.Phone}
                  </p>
                  <p>
                    <span>Current Company:</span> {user.Company}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="box-buttons">
        <button disabled={listNumber === 0 ? true : false } onClick={() => {decreaseListNum()}}>Previous</button>
        <span>|</span>
        <button onClick={() => {increaseListNum()}}>Next</button>
      </div>
      <p>Users on List: {userCount}</p>
    </S.Users>
  );
}
