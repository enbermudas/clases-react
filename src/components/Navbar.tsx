interface NavbarProps {
  id?: number;
  username: string;
}

const classesForSpan = "btn btn-danger"

export default function Navbar(props: NavbarProps) {
  return (
    <div>
      <span id={String(props.id)} className={classesForSpan}>Hola, { props.id ? props.username : "invitado" }</span>
      <button>{ props.id ? "Desconectarse" : "Conectarse" }</button>
    </div>
  )
};
