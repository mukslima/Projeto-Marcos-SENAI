import { useState } from "react";

function EventoAlert(){
    const handleClick = (nome) => {
        alert(`${nome}`);
    };

    return <button onClick={handleClick.bind(this, 'Pera ai, aqui nao! Não vai entrar aqui!')}>Clique aqui!</button>;
}

export default EventoAlert
