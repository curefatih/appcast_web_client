<template>
  <DefaultWrapper>
    <div class="profile_wrap">
      <div class="user-cover">
        <progressive-background src="https://wallpapercave.com/wp/3MDceeP.jpg" />
      </div>
      <div class="user-content">
        <div class="wrap xl-gutter-8">
          <div class="xl-4-12 wrap xl-center user-info">
            <div class="col user-photo">
              <img class="user-photo_img" alt="Vue logo" src="../assets/ppo.jpg" />
            </div>
            <div class="col xl-1-1 user-name">
              <div class="wrap xl-flexbox xl-center xl-center xl-gutter-8">
                <div class="col">
                  <h3>Fatih Cüre</h3>
                </div>
                <div class="col">
                  <b-icon icon="check-decagram" size="is-small"></b-icon>
                </div>
              </div>
            </div>
            <div class="col xl-1-1 user-bio">Ege University - Computer Engineering Department</div>
          </div>
          <div class="col xl-8-12 user-hover">
            <div class="user-badges">
              <ul class="col xl-flexbox xl-center xl-middle">
                <li>
                  <!-- TODO -->
                  <b-tooltip label="Awesome Badge" position="is-bottom" type="is-light" animated>
                    <b-icon icon="seal" type="is-light" size="is-medium"></b-icon>
                  </b-tooltip>
                </li>
                <li>
                  <b-tooltip label="Greet Badge" position="is-bottom" type="is-light">
                    <b-icon icon="trophy-award" type="is-light" size="is-medium"></b-icon>
                  </b-tooltip>
                </li>
                <li>
                  <b-tooltip label="Awesome Badge" position="is-bottom" type="is-light">
                    <b-icon icon="license" type="is-light" size="is-medium"></b-icon>
                  </b-tooltip>
                </li>
                <li>
                  <b-tooltip label="Insane Badge" position="is-bottom" type="is-light">
                    <b-icon icon="seal-variant" type="is-light" size="is-medium"></b-icon>
                  </b-tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultWrapper>
</template>


<script>
import DefaultWrapper from "../wrappers/DefaultWrapper";
export default {
  name: "Profile",
  components: {
    DefaultWrapper
  }
};
</script>

<style>
.profile_wrap {
  height: 100%;
}

.user-cover {
  height: 350px;
  /* background-image: url(https://wallpapercave.com/wp/3MDceeP.jpg); */
  background-size: cover;
  background-color: #292929;
  background-position: 0 -100px;
  transform: translateY(0px);
}

.user-content {
  max-width: 960px;
  margin: 0 auto;
  position: relative;
}
.user-photo {
  margin-top: -75px;
  width: 150px;
  height: 150px;
  background-color: #000;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: -5px -5px 1px #111;
}
.user-photo_img {
  margin-top: 50%;
  transform: translateY(-50%);
}

.user-name {
  margin-top: 10px;
}
.user-name h3 {
  /* font-size: 20px; */
  font-weight: bold;
  position: relative;
}

.user-name h3::before {
  content: "_";
  opacity: 0.2;
  position: absolute;
  bottom: -2px;
}

.user-bio {
  font-size: 0.8rem !important;
  margin-top: 20px;
}

.user-badges {
  background-color: var(--primary);
  margin-top: 20px;
  border-radius: 0.2em;
  padding: 3px 50px;
  opacity: 0.5;
}

.user-badges ul li {
  display: inline;
  /* float: left; */
  margin: 3px;
  cursor: pointer;
  padding: 5px;
}

.user-badges ul li:hover {
  background-color: var(--primary-dark);
  box-shadow: 0 0 5px var(--primary-dark);
}
.tooltip {
  position: relative;
  z-index: 999;
}
</style>>