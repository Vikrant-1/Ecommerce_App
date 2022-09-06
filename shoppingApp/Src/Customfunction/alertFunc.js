import { useContext } from 'react';
import { AlertContext } from '../Navigation_S/AlertProvider';

function useAlert() {
    const alert = useContext(AlertContext);
    return alert;
}

export default useAlert;