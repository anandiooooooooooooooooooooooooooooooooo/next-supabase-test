import { Button } from "./ui/button";


const Footer = () => {
  return (
    <div className="flex justify-between items-center p-16 px-5 bg-[#DADADA]">
      <div className="gap-6">
      <span className="flex items-center">Jamim</span>
      <p className="text-xs">blablablablublublu <br/> blebleble blablabla <br/> kontol</p>
      </div>
      <div className="flex gap-12">
        <div className="flex flex-col">
          <p>Product</p>
          <Button variant={"link"}>Menu 1</Button>
          <Button variant={"link"}>Menu 1</Button>
          <Button variant={"link"}>Menu 1</Button>
        </div>
        <div className="flex flex-col">
          <p>Company</p>
        <Button variant={"link"}>Menu 2</Button>
        <Button variant={"link"}>Menu 2</Button>
        </div>
        <div>
          <p>Company</p>
        <Button variant={"link"}>Menu 3</Button>
        </div>
      </div>
      
      <div className="flex gap-4">
    <div className="w-full max-w-[60px] aspect-square bg-white border rounded-xl shadow-sm flex flex-col items-center justify-center text-center gap-2">
      <h3 className="text-base font-semibold">instagram</h3>
    </div>
    <div className="w-full max-w-[60px] aspect-square bg-white border rounded-xl shadow-sm flex flex-col items-center justify-center text-center gap-2">
      <h3 className="text-base font-semibold">facebook</h3>
    </div>
    <div className="w-full max-w-[60px] aspect-square bg-white border rounded-xl shadow-sm flex flex-col items-center justify-center text-center gap-2">
      <h3 className="text-base font-semibold">linkedin</h3>
    </div>
    </div>
    </div>
  );
};

export default Footer;