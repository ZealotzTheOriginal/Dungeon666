// En tu componente MemeDisco.jsx
import { useEffect, useState } from 'react';
import Rainbow from '../assets/rainbow.gif';
import '../App.css'; // Asegúrate de importar tu archivo CSS

export default function MemeDisco() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`MemeDisco ${show ? 'visible' : ''}`}>
        <img src={Rainbow} alt="" />
      </div>
    </>
  );
}