<template>
  <div>
    <Card class="p-3 min-h-[30vh] h-full">
      <h1 class="uppercase text-2xl">My wishlist</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Unit Price</TableHead>
            <TableHead>Stock Status</TableHead>
            <TableHead></TableHead>
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
            <TableCell> Product Name </TableCell>
            <TableCell> $ 200 </TableCell>
            <TableCell class="text-green-500 font-bold"> In Stock </TableCell>
            <TableCell>
              <Button class="text-sm font-bold" variant="destructive">
                Add to Cart
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  </div>
</template>

<script setup>
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableRow } from "@/components/ui/table";
import {
  TableBody,
  TableCell,
  TableHead,
} from "@/components/ui/table/index.js";
import { X } from "lucide-vue-next";
import { Button } from "@/components/ui/button/index.js";
import { product_data } from "@/store/data/index.js";
</script>

<style lang="scss" scoped></style>
