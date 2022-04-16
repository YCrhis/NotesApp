import { ChangeEvent, useState } from "react"

export const useForm = (initState: any) => {

    const [forms, setForms] = useState<any>(initState)

    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = target
        setForms({
            ...forms,
            [name]: value
        })
    }

    return {
        forms,
        handleInputChange
    }
}
