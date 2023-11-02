"use client"

import React, { useState } from "react"

import { cn } from "@/lib/utils"

import { Textarea } from "../ui/textarea"

export type ObjectiveFunctionProps = {}

const regexPattern = /^[\+\-\*\/]\s*((\d+(\.\d+)?)?[xy](\s|$))+(\d+(\.\d+)?)?$/
export const ObjectiveFunction: React.FC<ObjectiveFunctionProps> = () => {
  const [regexOk, setRegexOk] = useState<boolean>()
  return (
    <section className=" p-8 flex flex-col gap-4">
      <h1
        className={cn(
          "text-xl font-semibold",
          regexOk === false && "text-red-500"
        )}
      >
        Objective Function
      </h1>
      <Textarea
        onChange={(e) => setRegexOk(regexPattern.test(e.target.value))}
      />
    </section>
  )
}
