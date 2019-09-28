<template>
  <DefaultWrapper>
    <div class="dashboard">
      <div class="f_content">
        <div class="header">
          <h1>Last activities</h1>
        </div>

        <div class="post-content">
          <div class="wrap xl-gutter-16">
            <div class="post col xl-4-12 sm-1-1">
              <div class="post-user-info">
                <div class="wrap xl-flexbox xl-gutter-8 xl-middle">
                  <div class="user-pp">
                    <img src="../assets/ppo.jpg" alt />
                  </div>
                  <div class="col user-identical">
                    <h6>Fatih Cüre</h6>
                    <a>@curefatih</a>
                  </div>
                </div>
              </div>
              <div class="col xl-1-1 post-box">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore reprehenderit eaque eveniet eum corrupti quae dignissimos delectus? Corporis consequuntur voluptatem, placeat temporibus ducimus vitae doloremque perspiciatis veniam qui excepturi.</p>
              </div>
            </div>
          </div>
          <div class="wrap xl-gutter-16">
            <div class="post col xl-4-12 sm-1-1">
              <div class="post-user-info">
                <div class="wrap xl-flexbox xl-gutter-8 xl-middle">
                  <div class="user-pp">
                    <img src="../assets/ppo.jpg" alt />
                  </div>
                  <div class="col user-identical">
                    <h6>Fatih Cüre</h6>
                    <a>@curefatih</a>
                  </div>
                </div>
              </div>
              <div class="col xl-1-1 post-box">
                <progressive-img src="/static/welcome.jpg" />
                <!-- <img src="../assets/somepicture.jpg" alt /> -->
              </div>
            </div>
          </div>
          <div class="wrap xl-gutter-16">
            <div class="post col xl-4-12 sm-1-1">
              <div class="post-user-info">
                <div class="wrap xl-flexbox xl-gutter-8 xl-middle">
                  <div class="user-pp">
                    <img src="../assets/ppo.jpg" alt />
                  </div>
                  <div class="col user-identical">
                    <h6>Fatih Cüre</h6>
                    <a>@curefatih</a>
                  </div>
                </div>
              </div>
              <div class="col xl-1-1 post-box">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore reprehenderit eaque eveniet eum corrupti quae dignissimos delectus? Corporis consequuntur voluptatem, placeat temporibus ducimus vitae doloremque perspiciatis veniam qui excepturi.</p>
              </div>
            </div>
            <div class="post col xl-4-12 sm-1-1">
              <div class="post-user-info">
                <div class="wrap xl-flexbox xl-gutter-8 xl-middle">
                  <div class="user-pp">
                    <img src="../assets/ppo.jpg" alt />
                  </div>
                  <div class="col user-identical">
                    <h6>Fatih Cüre</h6>
                    <a>@curefatih</a>
                  </div>
                </div>
              </div>
              <div class="col xl-1-1 post-box">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore reprehenderit eaque eveniet eum corrupti quae dignissimos delectus? Corporis consequuntur voluptatem, placeat temporibus ducimus vitae doloremque perspiciatis veniam qui excepturi.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore reprehenderit eaque eveniet eum corrupti quae dignissimos delectus? Corporis consequuntur voluptatem, placeat temporibus ducimus vitae doloremque perspiciatis veniam qui excepturi.</p>
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

export default {
  name: "Dashboard",
  components: {
    DefaultWrapper
  }
};
</script>

<style>

.header {
  border-bottom: 1px solid var(--secondary-dark);
  margin-bottom: 30px;
}
.header h1 {
  position: relative;
  display: inline-block;
}
.header h1::before {
  content: "";
  width: 100%;
  position: absolute;
  bottom: -0.6em;
  z-index: 2;
  box-sizing: content-box;
  border-bottom: 1px solid var(--blue);
}

.post {
  margin-bottom: 20px;
  padding: 0 10px;
}
.user-pp img {
  width: 30px;
  height: 30px;
  object-fit: cover;
  background-color: #0008;
  border: 1px solid #0005;
  padding: 3px;
  border-radius: 0.5rem;
}

.user-identical h6 {
  margin: 0;
}
.user-identical a {
  font-size: 0.8em;
}

.post-box {
  font-size: 12px !important;
  font-weight: 100;
  background-color: var(--secondary-dark);
  margin-top: 10px;
  padding: 15px 10px;
  border-radius: 0.3em;
}
.post-box img {
  width: 100%;
  height: 100%;
  max-height: 400px;
  object-fit: contain;
  /* object-fit: scale-down; */
}
</style>