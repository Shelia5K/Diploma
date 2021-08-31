import { useCallback } from 'react'
//useCallback - чтобы реакт не входил в цикличную рекурсию 
//обертка для более простого взаимодействия 
export const useMessage = () => {
    return useCallback(text  => {
        if(window.M && text) {
            window.M.toast( { html: text })
        }
    }, []) 
}