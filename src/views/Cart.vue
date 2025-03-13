<template>
  <div class="space-y-3">
    <h1 class="font-bold uppercase">Shopping Cart</h1>
    <div class="gap-x-4 flex">
      <div class="w-[78%]">
        <hr class="border-2 border-blue-400 w-full" />
        <Card class="rounded-none shadow min-h-[30vh] h-full w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead></TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Unit Price</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>SubTotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Button size="icon" variant="gost">
                    <X color="black" :size="24" />
                  </Button>
                </TableCell>
                <TableCell>
                  <img
                    class="w-[55px]"
                    src="https://www.asus.com/media/Odin/Websites/global/Series/15.png"
                    alt="image"
                  />
                </TableCell>
                <TableCell> productname </TableCell>
                <TableCell> 200$ </TableCell>
                <TableCell> 1 </TableCell>
                <TableCell> 200$ </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
      <div class="space-y-4 min-h-[30vh] h-full w-[22%]">
        <div class="w-full border p-3 shadow uppercase text-blue-500">
          Free Shipping in phnom penh
        </div>
        <div class="shadow border w-full min-h-[30vh] h-full">
          <h1 class="uppercase text-blue-500 pl-3">Cart Totals</h1>
          <div class="p-3">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Subtotal</TableCell>
                  <TableCell class="font-bold">$ 120</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Grand Total</TableCell>
                  <TableCell class="font-bold">$ 130</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div class="text-center">
            <Button class="rounded w-[90%] font-bold" variant="destructive"
              >Proceed to checkout</Button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { X } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card/index.js";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table/index.js";
</script>
