<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="blog.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="blog.description"
          name="description"
        />
      </div>

      <button @click="saveBlog" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>Blog Post created successfully!</h4>
      <button class="btn btn-success" @click="newBlog">Add</button>
    </div>
  </div>
</template>

<script>
import BlogDataService from "../services/BlogDataService";

export default {
  name: "add-blog",
  data() {
    return {
      blog: {
        id: null,
        name: "",
        description: "",
      },
      submitted: false
    };
  },
  methods: {
    saveBlog() {
      var data = {
        name: this.blog.name,
        description: this.blog.description
      };

      BlogDataService.create(data)
        .then(response => {
          this.blog.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newBlog() {
      this.submitted = false;
      this.blog = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
