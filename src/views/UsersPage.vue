<template>
  <Modal>
    <User />
  </Modal>
</template>

<script setup>
  import { onMounted } from "vue";
  import Modal from "../components/Modal.vue";
  import User from "../components/User/User.vue";
  import { getAuthToken } from "../auth";
  import { useUserStore } from "../store/user";

  const { loginUser } = useUserStore();

  onMounted(() => {
    if (!!getAuthToken()) {
      loginUser();
    }
  });
</script>
