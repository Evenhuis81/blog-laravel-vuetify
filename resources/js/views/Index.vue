  <!-- <v-card class="mx-12" max-width="1500"> -->
  <template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="2">
        <v-list dense height="100%" class="text-center">
          <!-- <v-subheader>Categories:</v-subheader> -->
          <v-list-item-group v-model="carousselModel">
            <v-list-item v-for="(item,i) in categories" :key="i" color="primary" class="my-2">
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="10">
        <v-card>
          <v-carousel cycle :show-arrows="false" v-model="carousselModel" hide-delimiters>
            <v-carousel-item
              v-for="(item,i) in categories"
              :key="i"
              :src="item.image_name"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <v-row class="fill-height" align="center" justify="center">
                <p
                  text
                  class="display-3 font-weight-black white--text"
                  color="purple"
                >{{ item.subheader }}</p>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

    <script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      carousselModel: Math.floor(Math.random() * 10)
    };
  },
  name: "Blogs",
  mounted() {
    this.$store.dispatch("fetchBlogs");
    this.$store.dispatch("fetchCategories");
  },
  methods: {
    // deleteBlog(blog) {
    //   this.$store.dispatch("deleteBlog", blog);
    // }
  },
  computed: {
    ...mapGetters(["blogs", "categories"])
  }
};
</script>
