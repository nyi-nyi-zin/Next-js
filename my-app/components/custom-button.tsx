"use client"

import { useFormStatus } from "react-dom"

const CustomButton = ({label}:{label:string}) => {
    const {pending} = useFormStatus()
  return (
     <button type="submit" className="border  border-blue-600 p-2 block mt-2 disabled:text-red-800"
     disabled={pending}
      >
        {label || "Default"}
      </button>
  )
}

export default CustomButton