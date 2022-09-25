import { useStore } from "../hooks/useStore";
import { useEffect, useState } from "react";
import { useKeyboard } from "../hooks/useKeyboard";
import { dirtImg, grassImg, glassImg, logImg, woodImg } from "../images/images";

const images = {
    dirt: dirtImg,
    grass: grassImg,
    glass: glassImg,
    wood: woodImg,
    log: logImg
};

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false);
    const [activeTexture, setTexture] = useStore(state => [state.texture, state.setTexture]);
    
    const {
        dirt,
        grass,
        glass,
        wood,
        log
    } = useKeyboard();

    
    useEffect(() => {
        const textures = {
            dirt,
            grass,
            glass,
            wood,
            log
        };
        const pressedTexture = Object.entries(textures).find(([k, v]) => v);
        if (pressedTexture) {
            console.log("pressed", pressedTexture);
            setTexture(pressedTexture[0]);
        }
    }, [setTexture, dirt, grass, glass, wood, log]);

    useEffect(() => {
        const visibilityTimout = setTimeout(() => {
            setVisible(false);
        }, 2000);
        setVisible(true);
        return () => clearTimeout(visibilityTimout);
    }, [activeTexture]);

    return visible && (
        <div className="absolute centered texture-selector">
            {Object.entries(images).map(([k, src]) => {
                return (
                    <img className={`${k === activeTexture ? "active" : ""}`} key={k} src={src} alt={k} />
                );
            })}
        </div>
    );
};