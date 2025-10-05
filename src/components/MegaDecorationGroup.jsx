import React, { useState, useEffect } from 'react';
import { HomeDecorationMega } from './Decoration_Images';
import RedirectComponent from './Pages_Redirect';


// Componente a mostrar cuando la "clave" coincide (puedes moverlo aquí o mantenerlo global)
const KeyComponent = () => (
  <>
    <RedirectComponent to="/Redirecting" delayInMs={500} />
  </>
);

// Este es el nuevo contenedor que gestiona el estado de su grupo.
export function MegaDecorationGroup({ count = 4, styleClass, children }) {
  const [megaIndexes, setMegaIndexes] = useState({});
  const [isKeyMatched, setIsKeyMatched] = useState(false);

  // 1. Callback de cambio de índice
  const handleMegaIndexChange = (id, newIndex) => {
    setMegaIndexes(prevIndexes => ({
      ...prevIndexes,
      [id]: newIndex
    }));
  };

  // 2. Lógica de la Clave
  useEffect(() => {
    const indices = Object.values(megaIndexes);
    if (indices.length !== count) {
        setIsKeyMatched(false);
        return;
    }

    const firstIndex = indices[0];
    const allMatch = indices.every(index => index === firstIndex);

    setIsKeyMatched(allMatch);
  }, [megaIndexes, count]);

  // 3. Renderiza los componentes HomeDecorationMega
  const megaComponents = Array.from({ length: count }).map((_, i) => (
    <HomeDecorationMega 
      key={`mega-${i}`}
      id={`mega-group-${i}`} // Identificador único DENTRO de este grupo
      onIndexChange={handleMegaIndexChange}
    />
  ));
  
  return (
    <div className={styleClass}>
        {isKeyMatched && <KeyComponent />}
        {megaComponents}
        {children}
    </div>
  );
}