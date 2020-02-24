<template>
 
<v-card>
    <v-app-bar dense app clipped-left dark color="primary">
      <!-- <v-container> -->
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <!-- <v-row>
        <v-col cols="12"> -->
      <v-img src="/images/image (1).png" height="40" contain max-width="100"></v-img>
          <v-toolbar-title>Blog Laravel Vue</v-toolbar-title>
          <v-spacer></v-spacer>
   
<v-menu offset-y activator="attMe">
        <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="false"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  <!-- <template v-slot:activator="{ on }"> -->
         <v-text-field
              v-model="searchfield"
              v-on:keyup="search"
                :loading='loading'
                dense
                clearable
                placeholder="Search..."
                hide-details
                autocomplete="off"
                prepend-icon="mdi-magnify"
                @click:clear="loading = false"
                id="attMe"
              >
              </v-text-field>
     
   
        <!-- </template> -->


            
              
            <v-spacer></v-spacer>

          <v-btn text>Sign In
            <v-icon right>mdi-login-variant</v-icon>
          </v-btn>
    </v-app-bar>

    <v-navigation-drawer app clipped>
      <v-list class="mt-4">
        <v-list-item
          v-for="item in items"
          :key="item.title"
           router :to="item.route"
           color="primary"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</v-card>
</template>

<script>

export default {
  data () {
    return {
      asd: true,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      offset: false,


      sdf: '',
      loading: false,
      searchfield: '',
      items: [
        { title: 'Dashboard', icon: 'mdi-magnify', route: '/' },
        { title: 'Account', icon: '', route: 'about' },
      ],
    }
  },
  methods: {
    clearSearch() {
      this.searchfield = ''
    },
    search() {
      if(this.searchfield === '' || null) {
        this.loading = false
      } else {
        this.loading = 'white'
      }
    }
  }
}
</script>