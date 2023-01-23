

<script setup>
import { RouterLink } from 'vue-router'






</script>
<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { usePostStore } from '../stores/post'

const { posts, loading, error } = storeToRefs(usePostStore())
const { fetchPosts,fetchPost } = usePostStore()
export default defineComponent({
  name: 'IndexPage',
  async mounted(){
    // await fetchPost(1,1,2)
await fetchPosts()
await console.log(posts)
  },
  setup() {
    const store = usePostStore();

    // Option 2: use computed and functions to use the store
    const count = computed(() => store.title);
    const doubleCountValue = computed(() => store.title);
    // const incrementCount = () => store.increment(); // use action
    // const decrementCount = () => store.counter--; // manipulate directly

    // // Option 3: use destructuring to use the store in the template
    // const { counter, doubleCount } = storeToRefs(store); // state and getters need "storeToRefs"
    // const { increment } = store; // actions can be destructured directly

    return {
      // Option 1: return the store directly and couple it in the template
      store,

      // Option 2: use the store in functions and compute the state to use in the template
      count,
      doubleCountValue,
      incrementCount,
      decrementCount,

      // Option 3: pass the destructed state, getters and actions to the template
      counter,
      increment,
      doubleCount,
    };
  },

})
</script>
