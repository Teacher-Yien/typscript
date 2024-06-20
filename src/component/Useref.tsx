import { useRef } from "react";

const Useref = () => {
  const refElement = useRef<HTMLButtonElement>(null);

  // Check if the refElement is null before accessing its current property
  if (!refElement.current) {
    console.error("Ref element is null");
    return null; // or you can return an error message component
  }

  console.log(refElement.current);
  return <button ref={refElement} className="btn btn-danger">Submit</button>;
};

export default Useref;