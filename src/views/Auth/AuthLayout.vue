<template>
  <div class="grid justify-center">
    <Card class="w-[450px] rounded">
      <Tabs default-value="login">
        <TabsList class="w-full bg-transparent">
          <TabsTrigger class="w-full rounded p-2 font-bold" value="login">
            Login
          </TabsTrigger>
          <TabsTrigger class="w-full rounded p-2 font-bold" value="signup">
            SignUp
          </TabsTrigger>
        </TabsList>
        <hr class="border w-[98%] m-auto" />
        <CardContent>
          <TabsContent value="login">
            <Login :FORM_LOGIN="FORM_LOGIN" />
          </TabsContent>
          <TabsContent value="signup">
            <SignUp :FORM_SIGNUP="FORM_SIGNUP" />
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "@/views/Auth/Login.vue";
import SignUp from "@/views/Auth/SignUp.vue";
import { FORM_SIGNUP, FORM_LOGIN } from "@/constants";
</script>
