<template>
  <div class="account-settings">
    <div class="account-settings_list">
      <!-- <div class="sec-header">
        <h4>Account</h4>
      </div> -->
      <div class="sec-content">
        <div class="wrap xl-flexbox xl-middle xl-gutter-8">
          <div class="col xl-3-12">Username</div>
          <div class="col xl-9-12">
            <DefaultInput placeholder="@curefatih" />
          </div>
        </div>
        <div class="wrap xl-flexbox xl-middle xl-gutter-8">
          <div class="col xl-3-12">Email</div>
          <div class="col xl-9-12">
            <DefaultInput placeholder="contact@fatihcure.com" />
          </div>
        </div>
        <div class="wrap xl-flexbox xl-middle xl-gutter-8">
          <div class="col xl-3-12">Password</div>
          <div class="col xl-9-12">
            <div class="wrap xl-gutter-8">
              <div class="col xl-1-1">
                <DefaultInput placeholder="current password" type="password" />
              </div>
              <div class="col xl-1-1">
                <DefaultInput placeholder="new password" type="password" />
              </div>
            </div>
            <div class="col xl-1-1">
              <DefaultInput placeholder="new password" type="password" />
            </div>
          </div>
        </div>
        <div class="wrap xl-flexbox xl-middle xl-gutter-8">
          <div class="col xl-3-12">Language</div>
          <div class="col xl-9-12">
            <Select placeholder="Language" expanded>
              <option
                v-for="option in data"
                :value="option.id"
                :key="option.id"
              >{{ option.language }}</option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultInput from "../../components/DefaultInput";
import Select from "../../components/Select";
export default {
  name: "SettingsAccount",
  components: {
    DefaultInput,
    Select
  },
  data() {
    return {
      data: [
        {
          id: 1,
          language: "English"
        },
        {
          id: 2,
          language: "Turkish"
        }
      ]
    };
  }
};
</script>

<style>
</style>