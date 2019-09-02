<template>
  <div class="sidebar">
    <ul class="xl-center">
      <li class="sidebar-list_item">
        <a href>
          <img class="sidebar-logo" alt="Vue logo" src="../assets/logo.png" />
        </a>
      </li>
      <li class="sidebar-list_item">
        <router-link to="/dashboard">
          <div class="sidebar-list_item_icon">
            <b-icon type="is-light" icon="home-outline"></b-icon>
          </div>
        </router-link>
      </li>
      <li class="sidebar-list_item">
        <router-link to="/profile">
          <div class="sidebar-list_item_icon">
            <b-icon type="is-light" icon="account-outline"></b-icon>
          </div>
        </router-link>
      </li>
      <li class="sidebar-list_item">
        <router-link to="/settings">
          <div class="sidebar-list_item_icon">
            <b-icon type="is-light" icon="message-settings"></b-icon>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style>
.sidebar {
  height: 100%;
  width: 60px;
  background-color: #000;
  color: rgba(255, 255, 255, 1);
}

.sidebar-logo {
  padding: 10px;
}
.sidebar-list_item:nth-child(1) {
  margin-bottom: 50px;
}

.sidebar-list_item:not(:first-child) {
  overflow: hidden;
  width: 100%;
  border-bottom: 1px solid #fff2;
  padding: 20px 0;
  font-size: 12px;
}

.sidebar-list_item:last-child {
  border-bottom: none;
}

</style>