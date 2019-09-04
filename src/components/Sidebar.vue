<template>
  <div class="sidebar">
    <div class="sidebar-wrapper wrap xl-1-1 xl-flexbox xl-center xl-between sidebar-list">
      <div class="col siderbar-top xl-top">
        <div class="sidebar-list_item logo">
          <router-link to="/dashboard">
            <img class="sidebar-logo" alt="Vue logo" src="../assets/logo.png" />
          </router-link>
        </div>
      </div>
      <div class="col xl-1-1 sidebar-middle">
        <div class="xl-center">
          <div class="sidebar-list_item">
            <router-link to="/dashboard">
              <div class="sidebar-list_item_icon">
                <b-icon type="is-light" icon="view-dashboard-outline"></b-icon>
              </div>
            </router-link>
          </div>
          <div class="sidebar-list_item">
            <router-link to="/streams">
              <div class="sidebar-list_item_icon">
                <b-icon type="is-light" icon="television-classic"></b-icon>
              </div>
            </router-link>
          </div>
          <div class="sidebar-list_item">
            <router-link to="/messages">
              <div class="sidebar-list_item_icon">
                <b-icon type="is-light" icon="message-outline"></b-icon>
              </div>
            </router-link>
          </div>
          <div class="sidebar-list_item">
            <router-link to="/profile">
              <div class="sidebar-list_item_icon">
                <b-icon type="is-light" icon="account-outline"></b-icon>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col xl-1-1 sidebar-bottom">
        <div class="sidebar-list_item">
          <router-link to="/settings">
            <div class="sidebar-list_item_icon">
              <b-icon type="is-light" icon="settings"></b-icon>
            </div>
          </router-link>
        </div>
        <div class="sidebar-list_item">
          <router-link to="/" exact>
            <div class="sidebar-list_item_icon">
              <b-icon type="is-light" icon="logout"></b-icon>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style >
.sidebar {
  height: 100%;
  width: 60px;
  background-color: #000;
  color: rgba(255, 255, 255, 1);
}
.sidebar-wrapper {
  height: 100%;
}

.sidebar-middle .sidebar-list_item a,
.sidebar-bottom .sidebar-list_item a {
  display: inline-block;
  width: 50px;
  padding: 10px;
  border-radius: 0.3em;
}
.sidebar-logo {
  padding: 10px;
}
.sidebar ul {
  height: 100%;
}

.sidebar-middle .router-link-active,
.sidebar-bottom .router-link-active {
  background-color: var(--primary-dark);
}

.sidebar-bottom {
  margin-bottom: 15px;
}
.sidebar-list_item:last-child {
  border-bottom: none;
}
</style>