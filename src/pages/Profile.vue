<template>
  <div class="profile_wrap">
    <div class="user-cover">
      <progressive-background src="https://wallpapercave.com/wp/3MDceeP.jpg" />
    </div>
    <div class="user-content wrap">
      <div class="xl-4-12 wrap xl-center user-info">
        <div class="user-photo">
          <img class="user-photo_img" alt="Vue logo" src="../assets/logo.png" />
        </div>
        <div class="xl-1-1 user-name">
          <h3>Fatih Cüre</h3>
        </div>
      </div>
      <div class="col xl-8-12 user-hover">
        <div class="user-badges">
          <ul class="col xl-flexbox xl-center xl-middle">
            <li>
              <b-icon icon="seal" type="is-light" size="is-medium"></b-icon>
            </li>
            <li>
              <b-icon icon="trophy-award" type="is-light" size="is-medium"></b-icon>
            </li>
            <li>
              <b-icon icon="seal" type="is-light" size="is-medium"></b-icon>
            </li>
            <li>
              <b-icon icon="seal-variant" type="is-light" size="is-medium"></b-icon>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import AuthWrapped from "../components/AuthWrapped";

export default {
  name: "Profile",
  components: {
    AuthWrapped
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
  max-width: 150px;
  max-height: 150px;
  background-color: #000;
  overflow: hidden;
  border: 1px solid #0002;
  border-radius: 2rem;
  box-shadow: -5px -5px 1px #111;
}

.user-name {
  margin-top: 10px;
}
.user-name h3 {
  font-size: 20px;
  font-weight: bold;
  position: relative;
}

.user-name h3::before {
  content: "_";
  opacity: 0.2;
  position: absolute;
  bottom: -2px;
}
.user-badges {
  background-color: var(--primary);
  margin-top: 20px;
  border-radius: 0.2em;
  padding: 3px 50px;
  opacity: 0.5;
  overflow: hidden;
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
</style>>