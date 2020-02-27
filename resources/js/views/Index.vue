  <!-- <v-card class="mx-12" max-width="1500"> -->
  <template>
  <v-card class="ma-12">
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
        {
          src: "/storage/categoryimages/Movies-2340x700.jpg"
        }
        //         {
        //   src: "/storage/categoryimages/Upcoming 2020 - online-marketing-trends-2020-2340x700.jpg"
        // },
        //         {
        //   src: "/storage/categoryimages/Music - meisje-luistert-naar-muziek-op-koptelefoon-2340x700.jpg"
        // },
        //         {
        //   src: "/storage/categoryimages/Dating - klantcontact-menscontact-2340x700.jpg"
        // },
        //         {
        //   src: "/storage/categoryimages/Mobile Trends - conversie-optimalisatie-CRO-trends-2340x700.jpg"
        // },
        //         {
        //   src: "/storage/categoryimages/New Inventions - lamp-blog-1-2340x700.jpg"
        // },
        //         {
        //   src: "/storage/categoryimages/Social Media - Facebook-1-2340x700.jpg"
        // },
        // {
        //   src: "./storage/categoryimages/Adventure - customer-journey-roller-coaster-2340x700.jpg"
        // },
        // {
        //   src: "./storage/categoryimages/Art - Linkbuilding-2340x700.jpg"
        // },
        // {
        //   src: "./storage/categoryimages/Classic Stuff - customer-2340x700.jpg"
        // }
      ]
    };
  },
  name: "Blogs",
  mounted() {
    this.$store.dispatch("fetchBlogs");
    this.$store.dispatch("fetchCategories");
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
