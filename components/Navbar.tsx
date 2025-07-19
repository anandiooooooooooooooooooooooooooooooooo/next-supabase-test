import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="bg-[#FAF8F4] flex justify-between items-center p-2 px-44 py-4">
      <span className="flex items-center">Jamim</span>
      <div>
        <Button variant={"link"}>Menu 1</Button>
        <Button variant={"link"}>Menu 2</Button>
        <Button variant={"link"}>Menu 3</Button>
      </div>
      <div className="bg-black text-white px-3 rounded-2xl">
        <Button>
          <b>Login</b>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
