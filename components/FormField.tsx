import React, { FormEvent } from "react";

// UI Components
import {
  Form,
  FormControl,
  FormDescription,
  FormField as BaseFormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// React Hook Form Types & Components
import { Controller, FieldValues, Control, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "file";
}

const FormField = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input className="input" placeholder={placeholder} type={type} {...field} />
        </FormControl>
        <FormDescription>This is your public display {name}.</FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;
