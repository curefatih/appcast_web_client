<template>
  <div class="f_settings">
    <keep-alive>
      <component :is="currentPage"></component>
    </keep-alive>
  </div>
</template>

<script>

import SettingsAbout from "./subPages/SettingsAbout";
import SettingsAccount from "./subPages/SettingsAccount";
import SettingsNotification from "./subPages/SettingsNotification";
import SettingsSafety from "./subPages/SettingsSafety";
import SettingsNotFound from "./subPages/SettingsNotFound";

export default {
  name: "Settings",
  props: ["page"],
  data() {
    return {
      pages: {
        about: SettingsAbout,
        account: SettingsAccount,
        notification: SettingsNotification,
        safety: SettingsSafety
      }
    };
  },
  computed: {
    currentPage(){
      const page = this.$props.page
      if(this.pages[page] !== undefined){
        return this.pages[page]
      }else{
        return SettingsNotFound;
      }
    }
  }
};
</script>

<style>
.f_settings{
  color: #777;
}
.sec-content {
  margin-bottom: 30px;
}
.sec-content > .wrap {
  margin-bottom: 5px;
  border-bottom: 1px solid var(--secondary-dark);
  padding-bottom: 3px;
}
.sec-header {
  margin-bottom: 20px;
  background-color: var(--secondary-dark);
  padding: 3px 5px;
}

p.info {
  font-size: 12px;
}
</style>