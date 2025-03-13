<template>
  <div>
    <Card class="p-3 min-h-[30vh] h-full">
      <h1 class="uppercase text-2xl">My wishlist</h1>
      <Table>
        <TableHeader>
          <TableRow></TableRow>
        </TableHeader>
      </Table>
    </Card>
  </div>
</template>

<script setup>
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableRow } from "@/components/ui/table";
</script>

<style lang="scss" scoped></style>
