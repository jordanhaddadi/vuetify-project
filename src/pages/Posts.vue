<script setup>
import {ref} from 'vue';

const posts = ref([
    { title: 'Post 1', content: 'Content 1', author: 'Author 1' },
    { title: 'Post 2', content: 'Content 2', author: 'Author 2' },
    { title: 'Post 3', content: 'Content 3', author: 'Author 3' },
    { title: 'Post 4', content: 'Content 4', author: 'Author 4' },
    { title: 'Post 5', content: 'Content 5', author: 'Author 5' },
    { title: 'Post 6', content: 'Content 6', author: 'Author 6' },
    { title: 'Post 7', content: 'Content 7', author: 'Author 7' },
    { title: 'Post 8', content: 'Content 8', author: 'Author 8' },
    { title: 'Post 9', content: 'Content 9', author: 'Author 9' },
    { title: 'Post 10', content: 'Content 10', author: 'Author 10' },
]) 

const selected = ref(null);
const search = ref('');

</script>

<template>
  <div>
    <h1>Posts</h1>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>

    <v-data-table
      :headers="[
        {
          title: 'Post',
          align: 'start',
          sortable: false,
          key: 'title',
        },
        { title: 'Author', align: 'end', key: 'author' },
      ]"
      :items="posts"
      show-select
      item-value="title"
      v-model="selected"
      :search="search"
    >
        <!-- MODAL -->
    <template #item.title="{item}">
        <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
            <button v-bind="activatorProps">{{ item.title }}</button>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="Dialog">
            <v-card-text>
                {{ item.content }}
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                text="Close Dialog"
                @click="isActive.value = false"
                ></v-btn>
            </v-card-actions>
            </v-card>
        </template>
        </v-dialog>
        
    </template>
</v-data-table>
  </div>
</template>

<style>

</style>