"use client";
// import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { MyCopyBlock } from "../ui/MyCopyBlock";

const FormSchema = z.object({
  text: z.string().min(1, {
    message: "TXT must be at least 1 character long",
  }),

  purpose: z.string().optional().or(z.literal("")),
});

export function TxtForm({
  label,
  description,
  action,
}: {
  label?: string;
  description?: string;
  action?: string;
}) {
  const [tagData, setTagData] = useState<z.infer<typeof FormSchema> | null>(
    null,
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    values: {
      text: "",
      purpose: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setTagData(data);
  }

  return (
    <>
      <div className="mb-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-4 lg:w-3/4"
          >
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Text</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  {/* {description && <FormDescription>{description}</FormDescription>} */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Purpose (optional)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    {/* {description && <FormDescription>{description}</FormDescription>} */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit">Generate tag</Button>
          </form>
        </Form>
      </div>
      {tagData && (
        <MyCopyBlock
          text={`<podcast:txt${tagData.purpose && ` purpose="${tagData.purpose}"`}>${tagData.text}</podcast:txt>`}
          language="xml"
          showLineNumbers={false}
          wrapLongLines={true}
        />
      )}
    </>
  );
}
