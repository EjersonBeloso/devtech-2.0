// import React, { useState } from 'react';

// const EditableField = () => {
//   const [value, setValue] = useState('Initial Value');
//   const [editMode, setEditMode] = useState(false);

//   const handleInputChange = (event) => {
//     setValue(event.target.value);
//   };

//   const handleEditToggle = () => {
//     setEditMode(!editMode);
//   };

//   const handleSave = () => {
//     // Save the edited value, e.g., update the state or make an API call
//     // Here, we are simply updating the state with the edited value
//     setEditMode(false);
//   };

//   return (
//     <div>
//       {editMode ? (
//         <input type="text" value={value} onChange={handleInputChange} />
//       ) : (
//         <span>{value}</span>
//       )}
//       {editMode ? (
//         <button onClick={handleSave}>Save</button>
//       ) : (
//         <button onClick={handleEditToggle}>Edit</button>
//       )}
//     </div>
//   );
// };

// export default EditableField;

// import React, { useState } from 'react';

// const MyComponent = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handleInputChange} />
//       <p>Current value: {inputValue}</p>
//     </div>
//   );
// };

// export default MyComponent;

const url = "https://api.example.com/items/1";
const data = { name: "Updated Item", quantity: 5 };

axios
	.put(url, data)
	.then((response) => {
		console.log("PUT request successful", response);
	})
	.catch((error) => {
		console.error("Error in PUT request", error);
	});
