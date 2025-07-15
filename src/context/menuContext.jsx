import data from "../assets/data";
import { createContext, useState } from "react";

const MenuContext = createContext()

const MenuContextProvider = ({ children }) => {
    const [menu, _setMenu] = useState(data.menu);

    const [modalOn, setModalOn] = useState(false);
    const [modalMenu, setModalMenu] = useState(null);

    const [options, setOptions] = useState({ '온도': 0, '진하기': 0, '사이즈': 0 })
    const [quantity, setQuantity] = useState(1)

    const valueObject = { menu, modalOn, setModalOn, modalMenu, setModalMenu, options, setOptions, quantity, setQuantity }

    return (
        <MenuContext.Provider value={valueObject}>
            {children}
        </MenuContext.Provider>
    )
}

export { MenuContext, MenuContextProvider }