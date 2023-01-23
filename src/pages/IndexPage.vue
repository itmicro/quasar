

<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <q-page class="flex flex-center justify-space">

    <div class="flex flex-column">
      <div class="q-gutter-y-md column" style="max-width: 300px">
        <q-input rounded standout bottom-slots v-model="text" label="Ник" counter>
          <template v-slot:append>
            <q-icon name="close" @click="text2 = ''" class="cursor-pointer" />
          </template>
        </q-input>

        <q-input rounded standout bottom-slots v-model="text1" label="Атака" counter>
          <template v-slot:append>
            <q-icon name="close" @click="text2 = ''" class="cursor-pointer" />
          </template>
        </q-input>

        <q-input rounded standout bottom-slots v-model="text2" label="HP" counter>
          <template v-slot:append>
            <q-icon name="close" @click="text2 = ''" class="cursor-pointer" />
          </template>
        </q-input>


        <q-btn-group spread>
          <q-btn color="red" label="вступить в бой" icon="timeline" @click="fetchPost(text, text1, text2)" />
          <q-btn color="green" label="не вступать" icon="visibility" />
        </q-btn-group>
      </div>
    </div>




    <q-markup-table flat bordered>
      <thead class="bg-teal">
        <tr>
          <th colspan="5">
            <div class="row no-wrap items-center">
              <q-img style="width: 70px" :ratio="1" class="rounded-borders"
                src="https://cdn.quasar.dev/img/donuts.png" />

              <div class="text-h4 q-ml-md text-white">Treats</div>
            </div>
          </th>
        </tr>
        <tr>
          <th class="text-left">Номер</th>
          <th class="text-right">Ник героя</th>
          <th class="text-right">HP</th>
          <th class="text-right">Атака</th>
          <!-- <th class="text-right">Protein (g)</th> -->
        </tr>
      </thead>
      <tbody class="bg-grey-3">
        <tr v-for="(post, index) in posts" :key="post._id">
          <td class="text-left">{{ index }}</td>
          <td class="text-right">{{ post.title }}</td>
          <td class="text-right">{{ post.hp }}</td>
          <td class="text-right">{{ post.attack }}</td>
          <!-- <td class="text-right">4</td> -->
        </tr>

      </tbody>
    </q-markup-table>
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

