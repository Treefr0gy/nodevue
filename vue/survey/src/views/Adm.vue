<template>
  <section>
    <div v-if="!EventBus.isAdmin">
      <div class="md-form w-75">
        <i class="fa fa-key prefix"></i>
        <input type="password" id="adminKey" v-model="adminKey" class="form-control">
        <label for="adminKey">Admin Key</label>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    beforeCreate() {
      if (this.EventBus.isAdmin) {
        this.$router.replace('/surveylist')
      }
    },
    created() {
      this.$watch('adminKey', this._.debounce(this.checkAdminKey, 300))
    },

    data() {
      return {
        adminKey: null
      }
    },

    methods: {
      checkAdminKey() {
        let url = this.ApiURL + 'adminKey';
        console.log("adminKey.url=", url)
        this.$http.post(url + {key: this.adminKey}).then( ret => {
          console.log("pass!!", ret)
          if (ret.status == 200) {
            this.EventBus.isAdmin = true;
            this.$router.push('surveylist')
          }
        });
      }

    }
  }
</script>