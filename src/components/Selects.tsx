import { useState, useEffect } from "react";

interface Option {
  value: string;
  text: string;
}

const initialOptions: Array<Option> = [
  {
    value: "1",
    text: "Kike"
  },
  {
    value: "2",
    text: "Miguel"
  },
  {
    value: "3",
    text: "Leiz3r"
  },
  {
    value: "4",
    text: "Macoix"
  },
];

export default function Selects() {
  const [options] = useState<Array<Option>>(initialOptions);
  const [selectedOption, setSelectedOptions] = useState<string|null>();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions(e.target.value);
  };

  useEffect(() => {
    console.log("Has elegido", initialOptions[Number(selectedOption) - 1]);
  }, [selectedOption]);

  return (
    <select onChange={handleChange}>
      <option value="0" selected={!selectedOption} disabled aria-readonly>Elegir una opción</option>

      {options.map((opt) => {
        return (
          <option
            key={opt.value}
            value={opt.value}
            selected={opt.value === selectedOption}
          >
            {opt.text}
          </option>
        )
      })}
    </select>
  )
}
