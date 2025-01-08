import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input"; 
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const FormItemContext = React.createContext({});

const FormItem = React.forwardRef(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef(({ className, htmlFor, ...props }, ref) => {
  return (
    <Label
      ref={ref}
      className={cn(className)}
      htmlFor={htmlFor}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef(({ id, ...props }, ref) => {
  return (
    <Slot
      ref={ref}
      id={id}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef(({ id, className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      id={id}
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef(({ id, className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      id={id}
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...props}
    >
      {children}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  FormProvider as Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Button,
  Input,
};
