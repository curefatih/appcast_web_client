<template>
  <div class="notification-settings">
    <div class="notification_list">
      <!-- <div class="sec-header">
        <h4>Notifications</h4>
      </div> -->
      <div class="sec-content">
        <div class="wrap xl-flexbox xl-middle xl-outside-8">
          <div class="col xl-10-12">
            <p class="info">Push notifications</p>
          </div>
          <div class="col xl-2-12 xl-right">
            <div class="field">
              <b-switch :value="true" type="is-info" size="is-small"></b-switch>
            </div>
          </div>
        </div>
        <div class="wrap xl-flexbox xl-middle xl-outside-8">
          <div class="col xl-10-12">
            <p class="info">Email notifications</p>
          </div>
          <div class="col xl-2-12 xl-right">
            <div class="field">
              <b-switch :value="true" type="is-info" size="is-small"></b-switch>
            </div>
          </div>
        </div>
        <div class="wrap xl-flexbox xl-middle xl-outside-8">
          <div class="col xl-10-12">
            <p class="info">SMS notifications</p>
          </div>
          <div class="col xl-2-12 xl-right">
            <div class="field">
              <b-switch :value="true" type="is-info" size="is-small"></b-switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsNotification"
};
</script>

<style>
</style>