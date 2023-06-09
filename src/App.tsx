import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import { NewNote } from "./components/NewNote";

export type Note = {
  id: string;
} & NoteData;

export type Tag = {
  id: string;
  label: string;
};

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type RawNote = {
  id: string;
};
export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: Tag[];
};

function App(): JSX.Element {
  //useLocalStorage -> a custom hook
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote></NewNote>} />
        <Route path=":id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/"></Navigate>} />
      </Routes>
    </Container>
  );
}

export default App;
