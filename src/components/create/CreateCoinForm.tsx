/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";

import { FC, useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import * as z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus, Trash2 } from "lucide-react";
import { Switch } from "../ui/switch";

interface CreateCoinFormProps {}

export const tokenFormSchema = z.object({
  tokenName: z.string().min(3, "Token name must be at least 3 characters"),
  tokenSymbol: z.string().min(2, "Token symbol must be at least 2 characters").max(6, "Token symbol cannot exceed 6 characters"),
  totalSupply: z.string().regex(/^\d+$/, "Must be a valid number").transform(Number),
  maxSupply: z.string().regex(/^\d+$/, "Must be a valid number").transform(Number),
  canMint: z.boolean().default(false),
  canBurn: z.boolean().default(false),
  supplyCapEnabled: z.boolean().default(false),
  signers: z.array(z.string().regex(/^0x[a-fA-F0-9]{40}$/, "Must be a valid Ethereum address")),
  owner: z.string().regex(/^0x[a-fA-F0-9]{40}$/, "Must be a valid Ethereum address"),
});

export type TokenFormValues = z.infer<typeof tokenFormSchema>;

const CreateCoinForm: FC<CreateCoinFormProps> = ({}) => {
  const form = useForm<z.infer<typeof tokenFormSchema>>({
    resolver: zodResolver(tokenFormSchema),
    defaultValues: {
      tokenName: "",
      tokenSymbol: "",
      totalSupply: 0,
      maxSupply: 0,
      canMint: false,
      canBurn: false,
      supplyCapEnabled: false,
      signers: [""] as string[],
      owner: "",
    },
  });

  const [signers, setSigners] = useState<string[]>([""]);

  const appendSigner = () => {
    setSigners([...signers, ""]);
  };

  const removeSigner = (index: number) => {
    setSigners(signers.filter((_, i) => i !== index));
  };

  function onSubmit(values: z.infer<typeof tokenFormSchema>) {
    const finalValues = { ...values, signers };
    toast.success("Token configuration saved!", {
      description: `${finalValues.tokenName} (${finalValues.tokenSymbol}) will be created with a total supply of ${finalValues.totalSupply} tokens.`,
    });
    console.log(finalValues);
  }

  return (
    <section className="py-[200px]">
      <div className="container max-w-5xl mx-auto w-full relative">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Token Info */}
              <div>
                <div className="pt-6">
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="tokenName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Token Name</FormLabel>
                          <FormControl>
                            <Input placeholder="My Awesome Token" {...field} />
                          </FormControl>
                          <FormDescription>The full name of your token</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="tokenSymbol"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Token Symbol</FormLabel>
                          <FormControl>
                            <Input placeholder="MAT" {...field} />
                          </FormControl>
                          <FormDescription>A short symbol for your token (2-6 characters)</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* Supply Configuration */}
              <div>
                <div className="pt-6">
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="totalSupply"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Total Supply</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="1000000" {...field} />
                          </FormControl>
                          <FormDescription>Initial token supply</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="maxSupply"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Maximum Supply</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="1000000" {...field} disabled={!form.watch("supplyCapEnabled")} />
                          </FormControl>
                          <FormDescription>Maximum possible token supply</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Token Features */}
            <div>
              <div className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="canMint"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Mintable</FormLabel>
                          <FormDescription>Allow creating new tokens</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="canBurn"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Burnable</FormLabel>
                          <FormDescription>Allow destroying tokens</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="supplyCapEnabled"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Supply Cap</FormLabel>
                          <FormDescription>Enable maximum supply limit</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Ownership & Access Control */}
            <div>
              <div className="pt-6">
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="owner"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Owner Address</FormLabel>
                        <FormControl>
                          <Input placeholder="0x..." {...field} />
                        </FormControl>
                        <FormDescription>The address that will own and control the token contract</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <FormLabel>Additional Signers</FormLabel>
                      <Button type="button" variant="outline" size="sm" onClick={appendSigner} className="gap-2">
                        <Plus className="h-4 w-4" /> Add Signer
                      </Button>
                    </div>

                    {signers.map((signer, index) => (
                      <div key={index} className="flex gap-2">
                        <FormField
                          control={form.control}
                          name={`signers.${index}`}
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormControl>
                                <Input
                                  placeholder="0x..."
                                  value={signer}
                                  onChange={(e) => {
                                    const newSigners = [...signers];
                                    newSigners[index] = e.target.value;
                                    setSigners(newSigners);
                                  }}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeSigner(index)}
                          className="h-10 w-10 text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Create Token
            </Button>
          </form>
        </Form>
      </div>{" "}
    </section>
  );
};

export default CreateCoinForm;
