import toast from "react-hot-toast";

export function toastError (text : string) {
    toast.error(text)
}
export function toasterSuccess (text : string) {
    toast.success(text)
}