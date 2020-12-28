import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core'
import axios from "axios"

export default function Home() {
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
  return <Container>
    <div>{serverError}</div>
    <div>{serverMessage}</div>
  </Container>
}