"use client"

import React, { useEffect } from "react"
import { useFormContext } from "react-hook-form"

import { FormInputs } from "@/app/page"

import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"

export type FormProps = {}

export const Form: React.FC<FormProps> = () => {
  const { control, watch, setValue } = useFormContext<FormInputs>()
  const pH = watch("p_hypothesis") ?? 0
  const pAltH = watch("p_alt_hypothesis") ?? 0
  const pEH = watch("p_evidence_given_h") ?? 0
  const pEAltH = watch("p_evidence_given_alt_h") ?? 0

  useEffect(() => {
    setValue("p_alt_hypothesis", 100 - pH)
  }, [pH])

  const upper = (pH / 100) * (pEH / 100)

  const lower = upper + (pAltH / 100) * (pEAltH / 100)

  const result = upper / lower

  return (
    <div className="flex flex-col gap-4 grow">
      <div className="h-fit w-full grid grid-cols-2 gap-4 p-8 border-b border-foreground">
        <FormField
          name="p_hypothesis"
          render={({ field }) => (
            <FormItem>
              <FormLabel>P(Hypothesis)</FormLabel>
              <Input {...field} type="number" min={0} />
              <FormMessage />
            </FormItem>
          )}
          control={control}
        />
        <FormField
          name="p_alt_hypothesis"
          render={({ field }) => (
            <FormItem>
              <FormLabel>P(_Hypothesis)</FormLabel>
              <Input {...field} disabled type="number" min={0} />
              <FormMessage />
            </FormItem>
          )}
          control={control}
        />
        <FormField
          name="p_evidence_given_h"
          render={({ field }) => (
            <FormItem>
              <FormLabel>P(Evidence / Hypothesis)</FormLabel>
              <Input {...field} type="number" min={0} />
              <FormMessage />
            </FormItem>
          )}
          control={control}
        />
        <FormField
          name="p_evidence_given_alt_h"
          render={({ field }) => (
            <FormItem>
              <FormLabel>P(Evidence / _Hypothesis)</FormLabel>
              <Input {...field} type="number" min={0} />
              <FormMessage />
            </FormItem>
          )}
          control={control}
        />
      </div>
      {pH !== 0 && pEH !== 0 && (
        <div className="px-8 flex flex-col gap-8 h-full">
          <h2 className="text-2xl font-semibold">Calculation</h2>

          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-2 border-b border-foreground grow">
              <div
                className="bg-pink-500"
                style={{ width: pH + "px", height: pEH + "px" }}
              ></div>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="bg-pink-500"
                style={{ width: pH + "px", height: pEH + "px" }}
              ></div>
              <div>+</div>
              <div
                className="bg-blue-500"
                style={{ width: 100 - pH + "px", height: pEAltH + "px" }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-2 border-b border-foreground grow">
              <div className="text-pink-500">P(H)P(E/H)</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-pink-500">P(H)P(E/H)</div>
              <div>+</div>
              <div className="text-blue-500">P(_H)P(E/_H)</div>
            </div>
          </div>
          <p>P(Hypothesis / Evidence) = {result.toFixed(2)}</p>
        </div>
      )}
    </div>
  )
}
