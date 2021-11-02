import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/story1.jpg", name: "emma12" },
    { id: 2, image: "/images/story2.jpg", name: "john654" },
    { id: 3, image: "/images/story3.jpg", name: "rahul89" },
    { id: 4, image: "/images/story4.jpg", name: "fawad2" },
    { id: 5, image: "/images/story5.jpg", name: "aman78" },
    { id: 6, image: "/images/story6.jpg", name: "sparsh97" },
    { id: 7, image: "/images/story7.jpg", name: "kolhi09" },
    { id: 8, image: "/images/story6.jpg", name: "khan4" },
    { id: 9, image: "/images/story4.jpg", name: "ayush76" },
  ]);
  return (
    <div className="stories">
      {state.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="stories__name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
