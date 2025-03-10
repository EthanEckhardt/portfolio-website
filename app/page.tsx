import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full flex h-10 items-baseline">
        <h1>Ethan Eckhardt</h1>
      </div>
      <Button>Hello</Button>
    </div>
  );
}
