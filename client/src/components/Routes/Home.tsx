import React, { useEffect, useState } from "react"
import axios from "axios"

export function Home() {
  const [serverMessage, setServerMesage] = useState("")
  const [serverError, setServerError] = useState<string | null>(null)
  useEffect(() => {
    async function fetch() {
      try {
        setServerError(null)
        const res = await axios.get("/api/")
        setServerMesage(res.data)
      } catch (err) {
        setServerError("Server error.")
      }
    }
    fetch()
  }, [])
  return <div>
    <div>Server Error: {serverError || "None"}</div>
    <div>Server Message: {serverMessage}</div>
  </div>
}