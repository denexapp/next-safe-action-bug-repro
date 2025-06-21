import { statelessFormAction } from "./stateless-form-action";

export default function Home() {
  return (
    <form action={statelessFormAction}/>
  );
}
