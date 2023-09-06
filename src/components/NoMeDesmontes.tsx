import { useEffect } from "react";

interface NoMeDesmontesProps {
  message: string;
}

export default function NoMeDesmontes({
  message
}: NoMeDesmontesProps) {
  useEffect(() => {
    console.log("Mi mensaje es:", message);
  }, []);

  return <h1>{message}</h1>;
};
