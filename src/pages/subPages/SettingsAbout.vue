<template>
  <div class="about-settings">
    <div class="about-settings_list">
      <div>
        <div class="sec-header">
          <h4>About AppCast</h4>
        </div>
        <div class="sec-content">
          <p
            class="info"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officia nam harum, hic laudantium neque temporibus iure! Quo amet porro ducimus autem, cupiditate consequuntur veritatis doloribus, recusandae, fugit adipisci necessitatibus!</p>
        </div>
      </div>
      <div>
        <div class="sec-header">
          <h4>Legal</h4>
        </div>
        <div class="sec-content">
          <div class="wrap">
            <div class="col xl-1-1">
              <Collapse title="Cookies"></Collapse>
            </div>
          </div>
          <div class="wrap">
            <div class="col xl-1-1">
              <Collapse title="Privay policy"></Collapse>
            </div>
          </div>
          <div class="wrap">
            <div class="col xl-1-1">
              <Collapse title="Licences"></Collapse>
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
  name: "SettingsAbout",
  components: {
    Collapse
  }
};
</script>

<style>
</style>