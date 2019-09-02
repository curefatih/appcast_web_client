<template>
  <DefaultLayout>
    <div class="messages">
      <div class="wrap">
        <div class="col xl-3-12 inbox">
          <div class="search">
            <b-field label="Search">
              <b-input size="is-small" icon="magnify" custom-class="search-input"></b-input>
            </b-field>
          </div>
          <div class="start-conversation-box">
            <router-link to="/messages/new-conversation">
              <div
                class="start-conversation-box_wrapper wrap xl-flexbox xl-center xl-middle xl-gutter-16"
              >
                <div class="col">
                  <b-icon icon="forum-outline" size="is-default" />
                </div>
                <div class="col">
                  <!-- TODO: bind modal for adding new convarsation -->
                  <h3>Start new conversation</h3> 
                </div>
              </div>
            </router-link>
          </div>
          <div class="inbox-list">
            <ul>
              <li class="inbox-list_item">
                <router-link to="/messages/1">
                  <div class="log-info">
                    <div class="wrap xl-flexbox xl-gutter-8">
                      <div class="col">
                        <div class="log-pps">
                          <progressive-img src="/static/welcome.jpg" />
                        </div>
                      </div>
                      <div class="col log-name">
                        <h3>Enes Kaplan</h3>
                      </div>
                    </div>
                  </div>
                </router-link>
              </li>
              <li class="inbox-list_item">
                <router-link to="/messages/1">
                  <div class="log-info">
                    <div class="wrap xl-flexbox xl-gutter-8">
                      <div class="col">
                        <div class="log-pps">
                          <progressive-img src="/static/welcome.jpg" />
                        </div>
                      </div>
                      <div class="col log-name">
                        <h3>Halid İnce</h3>
                      </div>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col xl-9-12 log-box"></div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../layouts/DefaultLayout";
export default {
  name: "Messages",
  components: {
    DefaultLayout
  }
};
</script>

<style>
.messages,
.messages > .wrap,
.messages > .wrap > .col {
  height: 100%;
}
.inbox {
  background-color: var(--secondary-dark);
  /* padding: 3px; */
}
.start-conversation-box_wrapper {
  padding: 20px 10px;
  background-color: var(--secondary-dark);
  transition: 0.2s all;
}
.start-conversation-box_wrapper:hover {
  background-color: var(--secondary-dark-full);
  color: #fff;
}
.log-box {
  background-color: var(--blue);
}
.search {
  padding: 10px 15px 20px 15px;
  border-bottom: 1px solid var(--secondary-dark);
  transition: 0.2s;
}
.search-input {
  background-color: transparent;
  border: 1px solid var(--secondary-dark);
}
.search-input:hover {
  border: 1px solid #263238;
  box-shadow: 0 0 0 0.125em rgba(38, 50, 56, 0.25);
}
.search-input:focus {
  color: #fff;
}
.inbox-list {
  overflow: auto;
}
.inbox-list_item {
  transition: 0.2s all;
}
.inbox-list_item:nth-child(2n + 1) {
  background-color: #222;
}
.inbox-list_item:hover {
  background-color: #111;
}
.log-info {
  padding: 15px 10px;
}
.log-pps {
  height: 45px;
  width: 45px;
  border: 2px solid #444;
  border-radius: 0.3em;
  overflow: hidden;
}
.log-name {
  color: #fff;
}
</style>