  <!-- <v-card class="mx-12" max-width="1500"> -->
  <template>
  <v-card class="ma-10">
    <v-carousel cycle :show-arrows="false">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div text class="display-3 font-weight-black white--text">Slide</div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

    <script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      items: [
        // {
        //   src: "/storage/app/public/categoryimages/writers-block-2340x700.jpg"
        // },
        {
          src: "/categoryimages/beste-intranetten-laptop-2340x700.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  },
  name: "Blogs",
  mounted() {
    this.$store.dispatch("fetchBlogs");
  },
  methods: {
    deleteBlog(blog) {
      this.$store.dispatch("deleteBlog", blog);
    }
  },
  computed: {
    ...mapGetters(["blogs"])
  }
};
</script>
