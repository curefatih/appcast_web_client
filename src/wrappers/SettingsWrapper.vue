<template>
  <DefaultWrapper>
    <div class="settings">
      <div class="f_content">
        <SectionHeader>Settings</SectionHeader>
        <div class="wrap xl-left">
          <div class="col xl-3-12 settings_sidebar">
            <ul class="settings_sidebar-list">
              <li>
                <router-link to="/settings/account">
                  <div>Account</div>
                </router-link>
              </li>
              <li>
                <router-link to="/settings/safety">
                  <div>Privacy and safety</div>
                </router-link>
              </li>
              <li>
                <router-link to="/settings/notification">
                  <div>Notifications</div>
                </router-link>
              </li>
              <li>
                <router-link to="/settings/about">
                  <div>About AppCast</div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="col xl-9-12 settings_container">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </DefaultWrapper>
</template>

<script>
import DefaultWrapper from "../wrappers/DefaultWrapper";
import SectionHeader from "../components/SectionHeader";
// import SettingsNotification from "./subPages/SettingsNotification.vue";
// import SettingsAccount from "./subPages/SettingsAccount";
// import SettingsSafety from "./subPages/SettingsSafety.vue";
// import SettingsAbout from "./subPages/SettingsAbout.vue";

export default {
  name: "Settings",
  components: {
    DefaultWrapper,
    SectionHeader
    // SettingsAccount
  }
  // data: function() {
  //   return {
  //     currentPage: SettingsAccount,
  //     subPages: {
  //       account: SettingsAccount,
  //       safety: SettingsSafety,
  //       notification: SettingsNotification,
  //       about: SettingsAbout
  //     }
  //   };
  // },
  // methods: {
  //   updateCurrentPage: function(page) {
  //     if (this.subPages[page] !== undefined) {
  //       // this.$router.replace('/settings/' + page.toLowerCase());
  //       this.currentPage = this.subPages[page];
  //     }
  //     console.log(page.toLowerCase());

  //   }
  // },
  // beforeMount(){
  //   const page = this.$route.params && this.$route.params.page && this.$route.params.page.toLowerCase();
  //   if(this.subPages[page] !== undefined){
  //     this.currentPage = this.subPages[page]
  //   }
  // }
};
</script>

<style scoped>
/* .settings_sidebar {
  /* background-color: #000; 
}*/
.settings_sidebar-list >>> li {
  list-style: none;
}
.settings_sidebar >>> a {
  color: #dff9fb;
  display: inline-block;
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 3px;
  border-radius: 0.2em;
  opacity: 0.4;
  transition: 0.2s;
}
.settings_sidebar a:hover {
  opacity: 0.5;
  background-color: #333;
}

a.router-link-active,
a.router-link-active:hover {
  opacity: 1;
  background-color: #333;
}

.settings_container {
  padding: 0 50px;
}
</style>