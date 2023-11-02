import React from "react"
import { useFormContext } from "react-hook-form"

import { cn } from "@/lib/utils"
import { FormInputs } from "@/app/page"

export type VisualProps = {}

export const Visual: React.FC<VisualProps> = () => {
  const { watch } = useFormContext<FormInputs>()

  const pH = watch("p_hypothesis") ?? 0
  const pAltH = watch("p_alt_hypothesis") ?? 0
  const pEH = watch("p_evidence_given_h") ?? 0
  const pEAltH = watch("p_evidence_given_alt_h") ?? 0

  return (
    <div className="w-[50%] border-r border-foreground flex items-center justify-center delay-500 ">
      <div
        id="main"
        className={cn(
          "w-[500px] min-h-[500px]  flex",
          (pEH || pEAltH) && "h-[500px] transition-all"
        )}
      >
        <div
          id="p_h"
          className="flex flex-col shrink-0 delay-500 transition-all bg-lime-300 relative"
          style={{ width: pH * 5 }}
        >
          <div
            id="p_h_alt_e"
            className="w-full grow delay-500 transition-all"
          ></div>
          <div
            id="p_h_e"
            className={cn(
              "bg-pink-500 delay-500 transition-all ",
              (pEH || pEAltH) && "border-b-4 border-l-4 border-pink-700 "
            )}
            style={{ height: pEH * 5 }}
          ></div>
          <span
            className={cn(
              "absolute bottom-[-2rem] left-2 text-lime-600 font-bold",
              (pEH || pEAltH) && "text-pink-700"
            )}
          >
            P(H)
          </span>
          <span
            className={cn(
              "hidden absolute bottom-[1rem] left-[-5rem] text-lime-600 font-bold",
              (pEH || pEAltH) && "block text-pink-700"
            )}
          >
            P(E/H)
          </span>
        </div>
        <div
          id="p_alt_h"
          className="flex flex-col shrink-0 delay-500 transition-all grow bg-slate-300 relative"
        >
          <div
            id="p_alt_h_alt_e"
            className="grow delay-500 transition-all"
          ></div>
          <div
            id="p_alt_h_e"
            className={cn(
              " bg-blue-500 delay-500 transition-all",
              (pEH || pEAltH) && "border-b-4 border-r-4 border-blue-700"
            )}
            style={{ height: pEAltH * 5 }}
          ></div>

          <span
            className={cn(
              " absolute bottom-[-2rem] left-4 text-slate-500 font-bold",
              (pEH || pEAltH) && "text-blue-700"
            )}
          >
            P(_H)
          </span>
          <span
            className={cn(
              "hidden absolute bottom-[4rem] right-[-7rem] text-slate-500 font-bold",
              (pEH || pEAltH) && "block text-blue-700"
            )}
          >
            P(E / _H)
          </span>
        </div>
      </div>
    </div>
  )
}
