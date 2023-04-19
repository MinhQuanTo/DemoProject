import React from 'react';
import { useState, useCallback } from 'react';

export const SelectExample = () => {
    const [selectedOption, setSelectedOption] = useState('');
  
    function handleChange(event) {
      setSelectedOption(event.target.value);
    }
    return (
        <div>
          <label htmlFor="select">Choose a property type:</label>
          <select id="select" value={selectedOption} onChange={handleChange}>
            <option value="">--Please choose an option--</option>
            <option value="land">Land</option>
            <option value="lake">Lake</option>
            <option value="house">House</option>
          </select>
          <p>You selected: {selectedOption}</p>
        </div>
      );
}
     