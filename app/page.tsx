"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form } from "@/components/ui/form"
import { Form as VisForm } from "@/components/bayes-vis/Form"
import { Visual } from "@/components/bayes-vis/Visual"

const schema = z.object({
  p_hypothesis: z.number(),
  p_alt_hypothesis: z.number(),
  p_evidence_given_h: z.number(),
  p_evidence_given_alt_h: z.number(),
})

export type FormInputs = z.infer<typeof schema>

export default function IndexPage() {
  const methods = useForm<FormInputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      p_hypothesis: 50,
    },
  })

  return (
    <Form {...methods}>
      <div className="h-full flex">
        <Visual />
        <VisForm />
      </div>
    </Form>
  )
}
