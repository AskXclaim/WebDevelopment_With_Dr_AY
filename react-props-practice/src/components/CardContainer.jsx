import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function CardContainer() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact, index) => {
        return (
          <Card
            key={index}
            name={contact.name}
            imgUrl={contact.imgURL}
            alt="avatar_img"
            telephone={contact.phone}
            email={contact.email}
          />
        );
      })}
    </div>
  );
}
export default CardContainer;
