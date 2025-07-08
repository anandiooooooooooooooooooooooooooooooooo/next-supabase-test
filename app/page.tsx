import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, Heart, Eye, MessageCircle, Search } from "lucide-react";

// Mock data for the cards to make them look more realistic
const sampleCards = [
  {
    id: 1,
    title: "Abstract Gradient Landing Page",
    designer: "Viola",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026704d",
    image: "/placeholder-1.png",
    likes: "1.2k",
    views: "15k",
  },
  {
    id: 2,
    title: "Mobile Banking App Concept",
    designer: "Hendry",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026705d",
    image: "/placeholder-2.png",
    likes: "980",
    views: "12.5k",
  },
  {
    id: 3,
    title: "E-commerce Dashboard UI",
    designer: "Jason",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026706d",
    image: "/placeholder-3.png",
    likes: "2.1k",
    views: "22k",
  },
  {
    id: 4,
    title: "Minimalist Logo Collection",
    designer: "Sarah",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026707d",
    image: "/placeholder-4.png",
    likes: "850",
    views: "9.8k",
  },
  {
    id: 5,
    title: "3D Character Illustrations",
    designer: "Mike",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026708d",
    image: "/placeholder-5.png",
    likes: "3.5k",
    views: "45k",
  },
  {
    id: 6,
    title: "SaaS Website Redesign",
    designer: "Elena",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026709d",
    image: "/placeholder-6.png",
    likes: "1.8k",
    views: "18.2k",
  },
];


export default function Page() {
  return (
    <main className="min-h-screen w-full bg-gray-50 px-6 py-8 font-sans text-gray-800">
      {/* Navbar */}
      <header className="flex items-center justify-between text-sm font-medium max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <div className="font-bold text-xl text-pink-500">dribbble</div>
          <nav className="hidden md:flex gap-8 text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Inspiration</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Find Work</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Learn Design</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Go Pro</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Hire Designers</a>
          </nav>
        </div>
        <div className="flex gap-4 items-center">
          <Input
            placeholder="Search..."
            className="rounded-full px-4 py-2 h-10 w-40 md:w-56 bg-white border-gray-200 focus:ring-pink-500 focus:border-pink-500"
          />
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">Log in</Button>
          <Button className="rounded-full px-5 py-2 h-10 bg-pink-500 hover:bg-pink-600 text-white shadow-md hover:shadow-lg transition-shadow">
            Sign up
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mt-24 max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Discover the world’s top designers & creatives.
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Dribbble is the leading destination to find & showcase creative work and home to the world's best design professionals.
        </p>

        <div className="mt-12 flex items-center justify-center max-w-2xl mx-auto relative">
          <Search className="absolute left-4 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search for designers, logos, landing pages..."
            className="rounded-full pl-12 pr-6 py-7 text-lg border-gray-300 focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-sm">
          <span className="text-gray-500 font-medium mr-2">Trending searches:</span>
          {["dashboard", "landing page", "e-commerce", "logo", "card", "icons"].map((tag) => (
            <Badge
              key={tag}
              className="cursor-pointer border-gray-300 px-4 py-1.5 text-gray-600 hover:bg-gray-200 hover:border-gray-400 transition-all"
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </section>

      {/* Filters and Category Tabs */}
      <div className="mt-20 border-b border-gray-200 max-w-7xl mx-auto flex items-center justify-between">
        <Tabs defaultValue="popular" className="">
          <TabsList className="bg-transparent p-0">
            <TabsTrigger value="popular" className="pb-4 px-1 text-base">Popular</TabsTrigger>
            <TabsTrigger value="new" className="pb-4 px-1 text-base">New & Noteworthy</TabsTrigger>
            <TabsTrigger value="following" className="pb-4 px-1 text-base">Following</TabsTrigger>
          </TabsList>
        </Tabs>

        <Button variant="outline" className="flex items-center gap-2 border-gray-300 hover:bg-gray-100">
          Filters <ChevronDown className="w-4 h-4 text-gray-500" />
        </Button>
      </div>


      {/* Sample Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 max-w-7xl mx-auto">
        {sampleCards.map((card) => (
          <div key={card.id} className="group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
              <img src={`https://placehold.co/400x300/e0e0e0/333?text=Project`} alt={card.title} className="w-full aspect-[4/3] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <p className="text-white font-bold text-lg truncate">{card.title}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 px-1">
              <div className="flex items-center gap-2">
                <Avatar className="w-7 h-7">
                  <AvatarImage src={card.avatar} alt={card.designer} />
                  <AvatarFallback>{card.designer.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm">{card.designer}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4 hover:text-pink-500" />
                  <span className="text-xs font-medium">{card.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span className="text-xs font-medium">{card.views}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-16">
        <Button size="lg" className="rounded-full px-8 py-6 bg-pink-500 hover:bg-pink-600 text-white font-bold shadow-lg hover:shadow-xl transition-all">
          Load more work
        </Button>
      </div>

    </main>
  );
}