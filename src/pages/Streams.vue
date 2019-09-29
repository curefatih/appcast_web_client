<template>
  <DefaultWrapper>
    <div class="stream">
      <div class="channels">
        <div class="channel">
          <SectionHeader>Public</SectionHeader>
          <div class="rooms">
            <div class="wrap xl-flexbox xl-gutter-8 xl-top">
              <div class="col xl-1-5 sm-1-1 sm-1-1 room">
                <router-link to="/streams">
                  <div class="room-avatar">
                    <progressive-img src="/static/welcome.jpg" />
                  </div>
                  <div class="room-name">
                    <h6>Javascript - Beginner</h6>
                  </div>
                </router-link>
                <div class="room-tags">
                  <section>
                    <b-tag>Javascript</b-tag>
                    <b-tag>Beginner</b-tag>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="channel">
          <SectionHeader>Favourites</SectionHeader>
          <div class="rooms">
            <div class="wrap xl-flexbox xl-gutter-8 xl-top">
              <div class="col xl-1-5 sm-1-1 room">
                <router-link to="/streams">
                  <div class="room-avatar">
                    <progressive-img src="/static/welcome.jpg" />
                  </div>
                  <div class="room-name">
                    <h6>Javascript - Beginner</h6>
                  </div>
                </router-link>
                <div class="room-tags">
                  <section>
                    <b-tag>Javascript</b-tag>
                    <b-tag>Beginner</b-tag>
                  </section>
                </div>
              </div>
              <div class="col xl-1-5 sm-1-1 room">
                <router-link to="/streams">
                  <div class="room-avatar">
                    <progressive-img src="/static/welcome.jpg" />
                  </div>
                  <div class="room-name">
                    <h6>Javascript - Beginner</h6>
                  </div>
                </router-link>
                <div class="room-tags">
                  <section>
                    <b-tag>Javascript</b-tag>
                    <b-tag>Beginner</b-tag>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="channel">
          <SectionHeader>Private</SectionHeader>
          <div class="rooms">
            <div class="wrap xl-flexbox xl-gutter-8 xl-top">
              <div class="col xl-1-5 sm-1-1 room">
                <div class="room-avatar">
                  <progressive-img src="/static/welcome.jpg" />
                </div>
                <div class="room-name">
                  <h6>Javascript - Beginner</h6>
                </div>
                <div class="room-tags">
                  <section>
                    <b-tag>Javascript</b-tag>
                    <b-tag>Beginner</b-tag>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultWrapper>
</template>

<script>
import DefaultWrapper from "../wrappers/DefaultWrapper";
import SectionHeader from "../components/SectionHeader";
export default {
  name: "Streams",
  components: {
    DefaultWrapper,
    SectionHeader
  }
};
</script>
<style scoped>
.stream {
  padding: 10px;
}
.channels {
  padding: 10px;
}
.channel-header {
  border-bottom: 1px solid var(--secondary-dark);
  margin-bottom: 30px;
}
.channel-header h1 {
  color: #363636;
  /* font-size: 2em; */
  position: relative;
  display: inline-block;
  margin-bottom: 0.5em;
  line-height: 1.125;
}
.channel-header h1::before {
  content: "";
  width: 100%;
  position: absolute;
  bottom: -0.6em;
  z-index: 2;
  box-sizing: content-box;
  border-bottom: 1px solid var(--blue);
}
.rooms {
  width: 100%;
  padding: 10px;
}
.room {
  margin-bottom: 30px;
}
.room-name {
  /* font-size: 1em; */
  color: #ccc;
  transition: 0.2s;
}
.room-name:hover {
  color: #fff;
}
.room-avatar {
  overflow: hidden;
}
.room-avatar .progressive-image {
  border-radius: 0.2em;
  height: 100px;
  object-fit: cover;
}
.room-tags {
  margin-top: 10px;
}
.room-tags span {
  font-size: 0.6em;
  margin-right: 3px;
}
/* xl */

@media (max-width: 1024px) {
  /* lg */
}

@media (max-width: 768px) {
  /* md */
}

@media (max-width: 667px) {
  /* sm */
}
</style>
