import { useState } from 'react'
import { DndProvider } from "react-dnd";

import { HTML5Backend } from "react-dnd-html5-backend";
import './App.css'

import { KanbanProvider } from './context/KanbanContext';
import Board from './components/Board';

function App() {
 

  return (
    <>
     <DndProvider backend={HTML5Backend}>
      <KanbanProvider>
        <div className='flex items-center h-screen justify-center bg-gradient-to-r from-blue-400 via-blue-50 to-blue-400'>
          <Board/>
          </div>
      </KanbanProvider>
     </DndProvider>
    
    </>
  )
}

export default App
