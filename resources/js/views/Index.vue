<template>
  <v-card class="mx-12" max-width="1500">
    <v-container fluid class="mt-12">
      <v-row>
        <!-- <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>-->
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      blogs: null,
      error: null
    };
  },
  beforeRouteEnter(to, from, next) {
    // console.log(next);
    // getPost(to, () => {
    //   next(vm => vm.setData(err, post))
    // })
    axios.get("/blogs").then(response => {
      console.log(response.data);
      next(vm => vm.setData(response.data));
    });
    // });
  },
  // when route changes and this component is already rendered,
  // the logic will be slightly different.
  //   beforeRouteUpdate(to, from, next) {
  // this.blogs = null;
  // getPost(to.params.id, (err, post) => {
  //   this.setData(err, post);
  //   next();
  // });
  //   },
  methods: {
    // setData(blogs) {
    //   this.blogs = blogs;
    // }
  }
};
</script>