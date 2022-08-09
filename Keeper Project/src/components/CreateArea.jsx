import React from "react";

function CreateArea(props) {
  const [input, setInput] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          value={input.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={input.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.handleClick(input);
            event.preventDefault();
            setInput({
              title: "",
              content: ""
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
