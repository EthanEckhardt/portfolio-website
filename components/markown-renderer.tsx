import { Note } from "@/app/notes/page";
import { X } from "lucide-react";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

interface MarkdownRendererProps {
  note: Note;
  onClose: () => void;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  note,
  onClose,
}) => {
  return (
    <div className="max-w-300 min-w-100 px-8 py-4 flex-grow flex-shrink">
      <div className="w-full flex justify-between">
        <h3>{note.title}</h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X />
        </Button>
      </div>
      <ScrollArea className="h-screen">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {note.content}
        </ReactMarkdown>
      </ScrollArea>
    </div>
  );
};
