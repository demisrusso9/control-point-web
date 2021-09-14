import { toast, ToastOptions } from 'react-toastify'

export const notification = (action: string, text: string) => {
  const config: ToastOptions = {
    position: 'top-right',
    autoClose: 1700,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  }

  action === 'added' && toast.success(text, config)
  action === 'deleted' && toast.error(text, config)
}
