"use client"

import { useFormStatus } from "react-dom"

const CustomButton = () => {
    const {pending} = useFormStatus()
  return (
     <button className="border border-white p-2 block mt-2 disabled:text-red-800"
     disabled={pending}
      >Add new Todo</button>
  )
}

export default CustomButton