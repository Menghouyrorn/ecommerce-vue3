<template>
  <div>
    <div class="grid justify-center gap-y-1">
      <img
        class="w-[45px] m-auto rounded-full"
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="image logo"
      />
      <h1 class="font-bold uppercase">Login</h1>
    </div>
    <div>
      <form @submit="onLogin" class="space-y-3">
        <div v-for="items in FORM_LOGIN" :key="items.value">
          <FormField v-slot="{ componentField }" :name="items.value">
            <FormItem>
              <FormLabel>{{ items.label }}</FormLabel>
              <FormControl>
                <Input
                  :type="items.type"
                  :placeholder="items.label"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>
        <div class="w-[60%] m-auto">
          <Button class="w-full" type="submit"> Login </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "vee-validate";
import { LoginSchemas } from "@/schemas/login-schemas";
import { Button } from "@/components/ui/button";
import { FormType } from "@/types";

interface propsType {
  FORM_LOGIN: FormType[];
}

defineProps<propsType>();

const form = useForm({
  validationSchema: LoginSchemas,
});

const onLogin = form.handleSubmit((value) => {
  console.log(value);
});
</script>
