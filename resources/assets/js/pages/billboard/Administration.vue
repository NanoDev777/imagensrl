<template>
  <div>
    <uploader @allFilesUploaded="loadFiles" v-if="showUploader"></uploader>

    <div v-for="file in files" :key="file.id">
      <a :href="file.url">{{ file.data.name }}</a>
    </div>
  </div>
  
</template>


<script>
import uploader from '../../components/Uploader.vue'

export default {
  components: { uploader },
  data: () => ({
    files: [],
    showUploader: true
  }),
  methods: {
    loadFiles (files) {
      for (var f in files) {
        var file = files[f]
        this.files.push(file)
      }
      this.showUploader = false
    }
  }
}
</script>