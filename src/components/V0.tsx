// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ArrowRight, Lock, Moon, Search, Shield, Sun, Zap } from "lucide-react";
// // import { Progress } from "@/components/ui/progress";
// // import { Slider } from "@/components/ui/slider";
// import { toast } from "sonner";

// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// const formSchema = z.object({
//   tokenName: z.string().min(2, {
//     message: "Token name must be at least 2 characters.",
//   }),
//   tokenSymbol: z
//     .string()
//     .min(2, {
//       message: "Token symbol must be at least 2 characters.",
//     })
//     .max(5, {
//       message: "Token symbol must not be longer than 5 characters.",
//     }),
//   initialSupply: z.number().min(1, {
//     message: "Initial supply must be at least 1.",
//   }),
// });

// export default function EnhancedMemeCoinLaunchpad() {
//   const [liquidityProgress, setLiquidityProgress] = useState(45);
//   const [bondedTokens, setBondedTokens] = useState(1000000);
//   // const [recentActivity, setRecentActivity] = useState(50);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       tokenName: "",
//       tokenSymbol: "",
//       initialSupply: 1000000,
//     },
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // toast({
//     //   title: "Token Created",
//     //   description: `Created ${values.tokenName} (${values.tokenSymbol}) with initial supply of ${values.initialSupply}`,
//     // })

//     toast.success(`Created ${values.tokenName} (${values.tokenSymbol}) with initial supply of ${values.initialSupply}`);
//   }

//   const handleLiquidityChange = (value: number) => {
//     setLiquidityProgress(value);
//     // toast({
//     //   title: "Liquidity Updated",
//     //   description: ,
//     // })

//     toast.success(`New liquidity: ${value}%`);
//   };

//   // const handleBondedTokensChange = (value: number) => {
//   //   setBondedTokens(value);
//   //   // toast({
//   //   //   title: "Bonded Tokens Updated",
//   //   //   description: `New bonded tokens: ${value.toLocaleString()}`,
//   //   // })

//   //   toast.success(`New bonded tokens: ${value.toLocaleString()}`);
//   // };

//   // const handleRecentActivityChange = (value: number[]) => {
//   //   setRecentActivity(value[0]);
//   //   const action = value[0] > 50 ? "bought" : "sold";

//   //   toast.success(`User ${action} MemeCoins`, {
//   //     action: {
//   //       label: "View on Etherscan",
//   //       onClick: () => {
//   //         window.open(`https://sepolia.etherscan.io/address/${5}`);
//   //       },
//   //     },
//   //   });
//   // };

//   return (
//     <main className="container mx-auto py-12">
//       <section className="text-center mb-16">
//         <h1 className="text-[42px] font-extrabold leading-[75.6px] tracking-[10%] font-detacher">
//           Launch Your <span className="text-primary">MemeCoin</span> Securely
//         </h1>
//         <span className="text-[24px] leading-[43.2px] font-light tracking-[6%]">
//           Create, provide liquidity, and trade with built-in rugpull protection
//         </span>

//         <Button size="lg">
//           Create Your MemeCoin <ArrowRight className="ml-2" />
//         </Button>
//       </section>

//       <div className="mb-8">
//         <Label htmlFor="searchToken" className="text-white-foreground mb-2 block">
//           Search Token
//         </Label>
//         <div className="relative">
//           <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
//           <Input id="searchToken" className="pl-10" placeholder="Enter token name or address" />
//         </div>
//       </div>

//       <Tabs defaultValue="create" className=" rounded-lg shadow-xl">
//         <TabsList className="grid grid-cols-5 gap-4 p-4">
//           <TabsTrigger value="create">Create Token</TabsTrigger>
//           <TabsTrigger value="liquidity">Liquidity</TabsTrigger>
//           <TabsTrigger value="vesting">Vesting</TabsTrigger>
//           <TabsTrigger value="multisig">Multisig</TabsTrigger>
//           <TabsTrigger value="bonding">Bonding</TabsTrigger>
//         </TabsList>
//         <TabsContent value="create" className="p-6">
//           <h3 className="text-2xl font-bold mb-4">Create Your MemeCoin</h3>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//               <FormField
//                 control={form.control}
//                 name="tokenName"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Token Name</FormLabel>
//                     <FormControl>
//                       <Input placeholder="e.g. Doge Coin" {...field} />
//                     </FormControl>
//                     <FormDescription>This is the full name of your token.</FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="tokenSymbol"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Token Symbol</FormLabel>
//                     <FormControl>
//                       <Input placeholder="e.g. DOGE" {...field} />
//                     </FormControl>
//                     <FormDescription>This is the trading symbol for your token (2-5 characters).</FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="initialSupply"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Initial Supply</FormLabel>
//                     <FormControl>
//                       <Input
//                         type="number"
//                         {...field}
//                         onChange={(e: { target: { value: string | number } }) => field.onChange(+e.target.value)}
//                       />
//                     </FormControl>
//                     <FormDescription>The initial number of tokens to create.</FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <Button type="submit">Create Token</Button>
//             </form>
//           </Form>
//         </TabsContent>
//         <TabsContent value="liquidity" className="p-6">
//           <h3 className="text-2xl font-bold mb-4">Provide Liquidity</h3>
//           <div className="grid gap-4">
//             <div>
//               <Label htmlFor="liquidityAmount">USDC/USDT Amount</Label>
//               <Input id="liquidityAmount" type="number" placeholder="Enter amount" />
//             </div>

//             <div className="flex flex-col gap-2 bg-muted p-4 rounded-lg">
//               <h4 className="font-semibold mb-2">Liquidity Threshold</h4>
//               <div className="w-full h-[8px] md:h-[12px] rounded-[15px] bg-slate-400">
//                 <div className="h-full bg-black rounded-[15px]" style={{ width: `${liquidityProgress}%` }} />
//               </div>

//               <p className="text-sm mt-2">{liquidityProgress}% of required liquidity provided</p>
//             </div>

//             <Button onClick={() => handleLiquidityChange(Math.min(liquidityProgress + 10, 100))}>Provide Liquidity</Button>
//           </div>
//         </TabsContent>
//         <TabsContent value="vesting" className="p-6">
//           <h3 className="text-2xl font-bold mb-4">Vesting Schedule</h3>
//           <div>
//             <div>
//               <span>10-Month Vesting Period</span>
//               <p>Token release over time</p>
//             </div>
//             <div>
//               <div className="h-48 bg-muted rounded-lg flex items-end justify-between p-4">
//                 {[...Array(10)].map((_, i) => (
//                   <div key={i} className="bg-green-400 w-8" style={{ height: `${(i + 1) * 10}%` }}></div>
//                 ))}
//               </div>
//               <div className="flex justify-between mt-2 text-sm text-muted-foreground">
//                 <span>Month 1</span>
//                 <span>Month 10</span>
//               </div>
//             </div>
//           </div>
//         </TabsContent>
//         <TabsContent value="multisig" className="p-6">
//           <h3 className="text-2xl font-bold mb-4">Multisig Approval</h3>
//           <div>
//             <div>
//               <span>Security Level: 2 of 3 signers required</span>
//               <p>Current approval status</p>
//             </div>
//             <div>
//               <ul className="space-y-2">
//                 {["0x1234...5678", "0xabcd...efgh", "0x9876...5432"].map((address, index) => (
//                   <li key={index} className="flex items-center justify-between p-2 bg-muted rounded">
//                     <span>{address}</span>
//                     <span
//                       className={`px-2 py-1 rounded ${
//                         index < 2 ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
//                       }`}
//                     >
//                       {index < 2 ? "Approved" : "Pending"}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </TabsContent>

//         {/*           
//           <TabsContent value="bonding" className="p-6">
//             <h3 className="text-2xl font-bold mb-4">Token Bonding</h3>
//             <Card>
//               <div>
//                 <span>Bonded Tokens</span>
//                 <p>Visualize bonded tokens and liquidity progress</p>
//               </div>
//               <div>
//                 <div className="mb-4">
//                   <Label htmlFor="bondedTokens">Bonded Tokens</Label>
//                   <Input
//                     id="bondedTokens"
//                     type="number"
//                     value={bondedTokens}
//                     onChange={(e: { target: { value: string } }) => handleBondedTokensChange(parseInt(e.target.value))}
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <Label>Liquidity Progress</Label>
//                   <Progress value={liquidityProgress} className="w-full" />
//                   <p className="text-sm mt-2">{liquidityProgress}% of target liquidity reached</p>
//                 </div>
//                 <div className="bg-muted p-4 rounded-lg">
//                   <h4 className="font-semibold mb-2">Bonding Curve</h4>
//                   <div className="h-32 bg-card rounded-lg flex items-end justify-between p-2">
//                     {[...Array(10)].map((_, i) => (
//                       <div
//                         key={i}
//                         className="bg-primary w-4"
//                         style={{ height: `${Math.min((bondedTokens / 100000) * (i + 1), 100)}%` }}
//                       ></div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </TabsContent> */}
//       </Tabs>

//       <section className="mt-16 grid md:grid-cols-3 gap-8">
//         <div>
//           <div>
//             <Zap className="w-10 h-10 text-white mb-2" />
//             <span>Instant Token Creation</span>
//             <p>Create your MemeCoin in seconds with our ERC-20 factory</p>
//           </div>
//         </div>
//         <div>
//           <div>
//             <Lock className="w-10 h-10 text-white mb-2" />
//             <span>Vesting & Security</span>
//             <p>Built-in vesting and multisig for rugpull protection</p>
//           </div>
//         </div>
//         <div>
//           <div>
//             <Shield className="w-10 h-10 text-white mb-2" />
//             <span>Liquidity Management</span>
//             <p>Easily provide and manage liquidity for your token</p>
//           </div>
//         </div>
//       </section>

//       {/* <section className="mt-16">
//           <h3 className="text-2xl font-bold mb-4 text-white-foreground">Recent Activity</h3>
//           <Card>
//             <div>
//               <span>Token Trading Activity</span>
//               <p>Slide to simulate buy/sell activity</p>
//             </div>
//             <div>
//               <Slider defaultValue={[50]} max={100} step={1} onValueChange={handleRecentActivityChange} />
//               <div className="flex justify-between mt-2">
//                 <span>Selling Pressure</span>
//                 <span>Buying Pressure</span>
//               </div>
//               <p className="mt-4">
//                 Current Activity: {recentActivity < 50 ? "Selling" : "Buying"} pressure ({Math.abs(recentActivity - 50)}%{" "}
//                 {recentActivity < 50 ? "below" : "above"} neutral)
//               </p>
//             </div>
//           </Card>
//         </section> */}
//     </main>
//   );
// }
