<template>
  <div class="safety-settings">
    <div class="safety_settings-list">
      <div class="safety_sec">
        <div class="sec-header">
          <h4>Messages</h4>
        </div>
        <div class="sec-content">
          <div class="wrap xl-flexbox xl-middle xl-outside-8">
            <div class="col xl-10-12">
              <p
                class="info"
              >You will be able to receive Direct Messages from anyone on Twitter, even if you don’t follow them.</p>
            </div>
            <div class="col xl-2-12 xl-right">
              <div class="field">
                <b-switch :value="true" type="is-info" size="is-small"></b-switch>
              </div>
            </div>
          </div>
          <div class="wrap xl-flexbox xl-middle xl-outside-8">
            <div class="col xl-10-12">
              <p
                class="info"
              >When someone sends you a message, people in the conversation will know when you’ve seen it. If you turn off this setting, you won’t be able to see read receipts from others.</p>
            </div>
            <div class="col xl-2-12 xl-right">
              <div class="field">
                <b-switch :value="true" type="is-info" size="is-small"></b-switch>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="safety_sec">
        <div class="sec-header">
          <h4>Other</h4>
        </div>
        <div class="sec-content">
          <div class="wrap xl-flexbox xl-middle xl-outside-8">
            <div class="col xl-1-1">
              <!-- <p
                class="info"
              >Bloked</p>-->
              <Collapse title="Bloked">heloo</Collapse>
            </div>
            <!-- <div class="col xl-2-12 xl-right">
              <div class="field">
                <b-switch :value="true" type="is-info" size="is-small"></b-switch>
              </div>
            </div>-->
          </div>
          <div class="wrap xl-flexbox xl-middle xl-outside-8">
            <div class="col xl-1-1">
              <Collapse title="Muted">heloo</Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Collapse from "../../components/Collapse";
export default {
  name: "SettingsSafety",
  components: {
    Collapse
  }
};
</script>

<style>

</style>