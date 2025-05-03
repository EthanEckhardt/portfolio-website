"use client";

import { MarkdownRenderer } from "@/components/markown-renderer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { ChevronLeft, PanelRightClose } from "lucide-react";
import React, { useEffect, useState } from "react";

export interface Note {
  _id: string;
  title: string;
  content: string;
}

export default function NotesViewer() {
  const [religionNotes, setReligionNotes] = useState<Note[]>([]);
  const [philosophyNotes, setPhilosophyNotes] = useState<Note[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openNotes, setOpenNotes] = useState<Note[]>([]);

  useEffect(() => {
    axios
      .get("/api/notes", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Response:", response.data);
        setReligionNotes(response.data.world_religion);
        setPhilosophyNotes(response.data.philosophy_of_food);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
        alert("An error occurred. Please try again later.");
      });
  }, []);

  const addNote = (note: Note) => {
    if (openNotes.some((n) => n._id === note._id)) {
      return;
    } else if (openNotes.length >= 3) {
      setOpenNotes((prevNotes) => [note, ...prevNotes.slice(1)]);
      return;
    }
    setOpenNotes((prevNotes) => [...prevNotes, note]);
  };

  const closeNote = (note: Note) => {
    setOpenNotes((prevNotes) => prevNotes.filter((n) => n._id !== note._id));
  };

  // TODO: separate into tabs
  return (
    <div className="w-dvw h-dvh overflow-x-scroll overflow-y-hidden">
      <div
        data-state={sidebarOpen ? "open" : "closed"}
        className={
          "absolute w-110 z-50 h-screen bg-secondary flex flex-row-reverse transition-transform duration-300 data-[state=closed]:-translate-x-96"
        }
      >
        <div className="flex flex-col items-center h-full p-2">
          <Button
            size="icon"
            variant="ghost"
            className="w-10 h-10"
            onClick={() => setSidebarOpen((prev) => !prev)}
          >
            <PanelRightClose />
          </Button>
        </div>
        <Separator className="w-10 bg-background" orientation="vertical" />
        <div className="h-screen w-full p-2 flex flex-col">
          <h2>Notes</h2>
          <Separator
            className="w-full bg-background"
            orientation="horizontal"
          />
          <Accordion type="multiple">
            <AccordionItem value="phil-food">
              <AccordionTrigger>Philosophy of Food</AccordionTrigger>
              <AccordionContent className="flex flex-col">
                {philosophyNotes.length > 0 &&
                  philosophyNotes.map((note) => (
                    <Button
                      key={note._id}
                      variant="ghost"
                      className="justify-start"
                      onClick={() => addNote(note)}
                    >
                      {note.title}
                    </Button>
                  ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="world-religion">
              <AccordionTrigger>World Religion</AccordionTrigger>
              <AccordionContent className="flex flex-col">
                {religionNotes.length > 0 &&
                  religionNotes.map((note) => (
                    <Button
                      key={note._id}
                      variant="ghost"
                      className="justify-start"
                      onClick={() => addNote(note)}
                    >
                      {note.title}
                    </Button>
                  ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="pl-10 w-fit flex flex-row">
        <div
          className="absolute flex w-fit pl-8 gap-4 pt-4 opacity-0 transition-opacity duration-500"
          data-state={
            sidebarOpen || openNotes.length > 0 ? "hidden" : "visible"
          }
          style={{
            opacity: sidebarOpen || openNotes.length > 0 ? 0 : 1,
          }}
        >
          <ChevronLeft />
          <div>Open the Sidebar to select a note!</div>
        </div>
        <div className="flex flex-row w-full">
          {openNotes.length > 0 &&
            openNotes.map((note) => (
              <React.Fragment key={note._id}>
                <MarkdownRenderer note={note} onClose={() => closeNote(note)} />
                <Separator orientation="vertical" />
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}
