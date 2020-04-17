import { useRef } from 'react'
import useEventListener from './useEventListener';

const useOutClick = (handler) => {

    const el = useRef(null);

    const handleOut = (e) => {
        if(el && el.current && el.current.contains(e.target)) {
            return false
        }
        handler();
    };

    useEventListener('mousedown', handleOut, document);

    return el;

}

export default useOutClick
