<script setup>
import {ref} from 'vue'
const drawer = ref(false)
</script>

<template>
    <v-layout class="rounded rounded-md">
      <v-app-bar>
        <template #prepend>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer">
                <v-icon>mdi-menu</v-icon>
            </v-app-bar-nav-icon>
            <v-toolbar-title>
                <router-link to="/" class="text-decoration-none">
                    My Awesome App
                </router-link>
            </v-toolbar-title>
        </template>
        <template #append>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-avatar 
                        image="https://avatars.githubusercontent.com/u/14862217?v=4"
                        color="surface-variant"
                        size="50"
                        v-bind="props">
                    </v-avatar>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(item, index) in ['Dashboard', 'Settings', 'Help', 'About', 'Logout']"
                    :key="index"
                    :value="index"
                    >
                    <v-list-item-title>{{ item }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </template>
      </v-app-bar>
  
      <!-- Navigation drawer -->
      <v-navigation-drawer
        v-model="drawer"
        expand-on-hover="true"
        rail
      >
   
          <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-note-multiple-outline" title="Posts" value="posts" :to="'/posts'"></v-list-item>
          <v-list-item prepend-icon="mdi-comment-multiple-outline" title="Comments" value="comments" :to="'/comments'"></v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-main style="min-height: 300px;">
        <div class="pa-15 pt-5">
            <router-view/>
        </div>
      </v-main>
    </v-layout>
  </template>