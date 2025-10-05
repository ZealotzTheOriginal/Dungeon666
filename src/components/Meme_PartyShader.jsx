// En tu componente MemeDisco.jsx
import { useEffect, useState } from 'react';
import Rainbow from '../assets/gif/imageGIF_party_shader_0.gif';
import RainbowTwo from '../assets/gif/imageGIF_party_shader.gif';
import DiscoBall from '../assets/gif/imageGIF_DiscoBall.gif';
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
      <div className={`MemeDisco ${show ? 'visible' : ''}`}>
        <img src={RainbowTwo} alt="" />
      </div>
      <div className={`MemeDiscoBall ${show ? 'visible' : ''}`}>
        <img src={DiscoBall} alt="" />
      </div>
    </>
  );
}