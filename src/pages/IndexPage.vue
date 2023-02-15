

<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <q-page class="flex flex-center justify-space">
    123
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { usePostStore } from '../stores/post'
import { ref } from 'vue'
const { posts, loading, error } = storeToRefs(usePostStore())
const { fetchPosts, fetchPost } = usePostStore()
export default defineComponent({
  name: 'IndexPage',
  data() {
    return { text: ref(''), text1: ref(''), text2: ref('') }
  },
  async mounted() {


    await fetchPosts()
    await console.log(posts)
  },
  setup() {

    const store = usePostStore();
    const count = computed(() => store.title);
    const doubleCountValue = computed(() => store.title);

    return {
      store,
      count,
      doubleCountValue,
    };
  },

})
</script>

