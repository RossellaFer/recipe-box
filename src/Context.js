import { createContext, useState } from 'react';

//create a context, with createContext api
export const ModalContext = createContext();

const ModalProvider = (props) => {
        // this state will be shared with all components 
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false)

    return (
        <ModalContext.Provider value={[showModal, setShowModal, showEditModal, setShowEditModal]}>
            {props.children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;