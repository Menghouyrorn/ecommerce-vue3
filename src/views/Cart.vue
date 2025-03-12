<template>
  <div class="space-y-3">
    <h1 class="font-bold uppercase">Shopping Cart</h1>
    <div class="gap-x-4 flex">
      <div class="w-[78%]">
        <hr class="border-2 border-blue-400 w-full"/>
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
                    <X color="black" :sixe="22"/>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
      <Card class="rounded shadow min-h-[30vh] h-full w-[22%]">

      </Card>
    </div>
  </div>
</template>

<script setup>
import {X} from 'lucide-vue-next'
import {Card} from "@/components/ui/card/index.js";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table/index.js";
</script>
