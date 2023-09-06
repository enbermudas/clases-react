interface InputProps {
  label: string;
  value: string;
  identificador: string;
  type?: string;
  manejarCambio: (value: string) => void;
}

export default function Input({
  label,
  value,
  identificador,
  type = "text",
  manejarCambio
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    manejarCambio(e.target.value);
  };

  return (
    <div>
      <label htmlFor="username">{label}</label>

      <input
        type={type}
        name={identificador}
        id={identificador}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
