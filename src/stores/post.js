import { defineStore } from 'pinia';

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async fetchPosts() {
      this.posts = []
      this.loading = true
      try {
        this.posts = await fetch('https://ap-term.nftnews1.ru/api/v1/products')
          .then((response) => response.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchPost(hp, title, attack) {
      this.post = null
      this.loading = true
      try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "hp": hp,
          "title": title,
          "attack": attack
        });

        var requestOptions = {
          method: 'POST',
          body: raw,
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("https://ap-term.nftnews1.ru/api/v1/products", requestOptions)
          .then((response) => response.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
});
