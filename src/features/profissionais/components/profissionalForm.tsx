import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProfessional, updateProfessional, type Professional } from '../profissionalSlice'
import { useNavigate, useParams } from 'react-router-dom'
import type { RootState } from '../../../app/store'
import { v4 as uuidv4 } from 'uuid'

export default function ProfessionalForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const existing = useSelector((state: RootState) =>
    state.professionals.list.find((p) => p.id === id)
  )

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (existing) {
      setName(existing.name)
      setEmail(existing.email)
    }
  }, [existing])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const data: Professional = {
      id: id ?? uuidv4(),
      name,
      email,
    }

    if (id && existing) {
      dispatch(updateProfessional(data))
    } else {
      dispatch(addProfessional(data))
    }

    navigate('/professionals')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md ">
      <h1 className="text-2xl font-bold">
        {id ? 'Editar profissional' : 'Novo profissional'}
      </h1>

      <input
        type="text"
        placeholder="Nome"
        className="w-full border p-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Salvar
      </button>
    </form>
  )
}
