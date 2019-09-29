<template>
  <DefaultWrapper>
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
                  <h5>Start new conversation</h5>
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
                        <h5>Enes Kaplan</h5>
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
                        <h5>Halid İnce</h5>
                      </div>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col xl-9-12 log-box">
          <div class="wrap log-box_wrapper">
            <div class="col xl-1-1 box_wrapper">
              <div class="log-box_content">
                <div class="content-header">
                  <h6>Enes Kaplan</h6>
                </div>
                <div class="content-messages">
                  <div class="content-message_time xl-center">
                    <b-tag rounded>23 August 2017</b-tag>
                  </div>
                  <div class="content-message_item left">
                    <div class="wrap xl-flexbox xl-outside-8 xl-gutter-8 xl-bottom">
                      <div class="col">
                        <div class="user-avatar">
                          <progressive-img src="/static/welcome.jpg" />
                        </div>
                      </div>
                      <div class="col xl-6-12">
                        <div class="user-message">
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequuntur asperiores eum eveniet optio? Corporis asperiores voluptas voluptates eveniet tempora! Doloremque culpa quos enim blanditiis fugiat architecto est ducimus nemo.</p>
                        </div>
                        <div class="user-message-time">
                          <p>09.15am</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="content-message_item right">
                    <div class="wrap xl-flexbox xl-outside-8 xl-gutter-8 xl-bottom xl-right">
                      <div class="col xl-6-12 xl-right">
                        <div class="user-message">
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequuntur asperiores eum eveniet optio? Corporis asperiores voluptas voluptates eveniet tempora! Doloremque culpa quos enim blanditiis fugiat architecto est ducimus nemo.</p>
                        </div>
                        <div class="user-message-time">
                          <p>09.16am</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="content-send-message xl-bottom">
                  <div class="wrap xl-flexbox xl-middle xl-gutter-8 xl-center">
                    <div class="col xl-11-12">
                      <b-field>
                        <b-input placeholder="write message" size="is-medium"></b-input>
                      </b-field>
                    </div>
                    <div class="col xl-1-12">
                      <b-button size="is-medium" icon-left="send"></b-button>
                    </div>
                  </div>
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
export default {
  name: "Messages",
  components: {
    DefaultWrapper
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
.log-box_wrapper {
  height: 100%;
  padding: 50px;
}
.box_wrapper {
  height: 100%;
}
.log-box_content {
  background-color: #eee;
  border-radius: 0.2em;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.content-header {
  flex: 0 1 auto;
  font-weight: bold;
  /* font-size: 1.5em; */
  color: var(--primary-light);
  padding: 10px;
  background-color: var(--primary-dark);
  border-bottom: 5px solid var(--blue);
}
.content-messages {
  flex: 1 1 auto;
  color: #333;
  overflow: auto;
}
.content-message_time {
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: bold;
}
.content-message_item {
  margin: 15px 0;
}
.user-avatar {
  height: 25px;
  width: 25px;
  border: 2px solid #444;
  border-radius: 0.3em;
  overflow: hidden;
}
.user-message {
  /* background-color: var(--primary-dark); */
  background-color: #fff;
  /* border: 1px solid var(--secondary-light); */
  border-radius: 1em;
  padding: 5px 15px;
  font-size: 14px;
  /* max-width: 50%; */
}
.user-message-time {
  font-size: 10px;
  margin: 3px;
  position: absolute;
  left: 45px;
  color: #999;
}
.right .user-message-time {
  right: 15px;
}
.content-message_item.right .user-message {
  background-color: var(--blue);
}
.content-send-message {
  flex: 0 1 80px;
  width: 100%;
  background-color: #fff;
  padding: 20px 10px;
  /* position: static;
  bottom: 0; */
}
</style>