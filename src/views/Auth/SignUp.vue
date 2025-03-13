<template>
  <div>
    <div class="grid justify-center gap-y-1">
      <img class="w-[45px] m-auto rounded-full" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
           alt="image logo">
      <h1 class="font-bold uppercase">SignUp</h1>
    </div>
    <div>
      <form @submit="onSignUp" class="space-y-4">
        <div v-for="items in FORM_SIGNUP">
          <FormField v-slot="{componentField}" :name="items.value">
            <FormItem>
              <FormLabel>{{ items.label }}</FormLabel>
              <FormControl>
                <Input :type="items.type" :placeholder="items.label" v-bind="componentField"/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          </FormField>
        </div>
        <div class="w-[60%] m-auto">
          <Button type="submit" class="w-full">
            SingUp
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {FormField, FormItem, FormControl, FormMessage, FormLabel} from '@/components/ui/form';
import {Input} from '@/components/ui/input'
import {Button} from "@/components/ui/button";
import {SIGNUP_SCHEMA} from "@/schemas";
import {useForm} from "vee-validate";

defineProps({
  FORM_SIGNUP: {
    type: Array,
    required: true
  }
});

const form = useForm({
  validationSchema: SIGNUP_SCHEMA
});

const onSignUp = form.handleSubmit((value) => {
  console.log(value);
})

</script>
