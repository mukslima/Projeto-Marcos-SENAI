import './App.css';
import React from 'react';
import EventoMudar from './componentes/EventoMudar';
import EventoAlert from './componentes/EventoAlert';

function App(){
  return(
    <div>
      <EventoAlert/>
    </div>
  );
}

function AppMudar() {
  return (
    <div>
      <EventoMudar />
    </div>
  );
}

export default AppMudar;
