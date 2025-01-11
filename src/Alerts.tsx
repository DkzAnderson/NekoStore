import { toast } from 'react-toastify';

export const Alert = (type:string,txt:string) => {
    switch (type) {
        case 'error':
                toast.error(
                    txt, 
                    {
                        position: 'top-center',
                        theme: 'dark'
                    }
                );
            break;
        case 'warning':
            
            break;
        case 'success' :
            toast.success(
                txt, 
                {
                    position: 'top-center',
                    theme: 'dark',
                    autoClose: 1300
                }
            );
            break;
    
        default:
            //info

            break;
    }

};