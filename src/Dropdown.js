import { useState } from "react";

const Dropdown = () => {

    // State variables
    const [isActive, setActive] = useState(false); // Tracks if the dropdown is active
    const [list] = useState(['Yes', 'Probably not']); // Array of dropdown options
    const [value, setValue] = useState(''); // Tracks the selected value

    // Click event handler for dropdown options
    const onClickHandler = (e) => {
        setValue(e.target.textContent); // Set the selected value
        setActive(false); // Deactivate the dropdown
    }

    // Mouse hover event handler for activating the dropdown
    const onMouseHover = () => {
        setActive(true);
    }

    // Generate dropdown options as anchor tags
    const results = list.map((result, index) => {
        return <a href="#" onClick={onClickHandler} key={index}>{result}</a>;
    })

    return (
        <div className="dropdown">
            <h1>Should you use a dropdown?</h1>
            <h3>{value}</h3> {/* Display the selected value */}
            <button className="dropbtn" onMouseEnter={onMouseHover}>Select</button> {/* Activate dropdown on hover */}
            <div className="dropdown-content" style={{ display: `${isActive ? 'block' : 'none'}` }}>
                {/* Display dropdown options */}
                {results}
            </div>
        </div>
    );
}

export default Dropdown;
