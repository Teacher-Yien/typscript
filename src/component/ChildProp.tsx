// ChildProp.js
import Props from "./Props";
export default function ChildProp() {
  return (
    <>
      <h1>Hi</h1>
      <Props Element="div">
        <div>
				<h1>Hello</h1>
        <button className="btn btn-danger">click</button>
				</div>
      </Props>
    </>
  );
}