"use client"

import React from "react"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"

export type DecisionVariablesProps = {}

export const DecisionVariables: React.FC<DecisionVariablesProps> = () => {
  const methods = useForm()
  return (
    <section className=" p-8 flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Decision Variables</h1>
      <Form {...methods}>
        <FormField
          name="x-name"
          render={({}) => (
            <FormItem>
              <FormLabel>X Variable Name</FormLabel>
              <FormControl>
                <Input />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="y-name"
          render={({}) => (
            <FormItem>
              <FormLabel>Y Variable Name</FormLabel>
              <FormControl>
                <Input />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
    </section>
  )
}
