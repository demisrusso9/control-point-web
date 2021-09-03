import React, { createContext } from 'react'

type ControlMethods = {
  setMorningEntry: React.Dispatch<React.SetStateAction<string>>
  setMorningExit: React.Dispatch<React.SetStateAction<string>>
  setAfternoonEntry: React.Dispatch<React.SetStateAction<string>>
  setAfternoonExit: React.Dispatch<React.SetStateAction<string>>
  setMorningActivities: React.Dispatch<React.SetStateAction<string>>
  setAfternoonActivities: React.Dispatch<React.SetStateAction<string>>

  lunch: number
  morning: number
  afternoon: number
  totalTime: string
}

export const ControlContext = createContext({} as ControlMethods)
