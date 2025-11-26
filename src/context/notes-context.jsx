import {  createContext,useContext,useReducer } from "react";
import { noteReducer } from "../Reducer/noteReducer";


const NotesContext = createContext();

const NotesProvider = ({children}) => {

     const initialState = {
    title: '',
    text: '',
    notes: [],
    archive: []
    
  }

  const [{title,text,notes,archive},notesDispatch] = useReducer(noteReducer,initialState)


    return (
        <NotesContext.Provider value={{title,text,notes,archive,notesDispatch}}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes}