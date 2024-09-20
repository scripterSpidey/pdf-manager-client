import axios from "axios"
import toast from "react-hot-toast"

const handleError = (error: unknown) => {
    console.log(error)
    if (axios.isAxiosError(error)) {
        if (error.status === 404) {
            toast.error('The requested resource can not be found')
        } else if (error.status == 400) {
            toast.error('Invalid request datas')
        } else if (error.status === 500) {
            toast.error('Internal server error')
        } else {
            toast.error('Something went wrong')
        }
    }
}

export default handleError;