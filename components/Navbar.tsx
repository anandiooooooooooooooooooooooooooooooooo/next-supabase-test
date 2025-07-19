import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 px-5 bg-green-300">
      <span className="flex items-center">Jamim</span>
      <div>
        <Button variant={"link"}>Menu 1</Button>
        <Button variant={"link"}>Menu 2</Button>
        <Button variant={"link"}>Menu 3</Button>
      </div>
      <div>
        <Button>
          <b>Login</b>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
