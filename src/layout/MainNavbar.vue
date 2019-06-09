<template>
    <navbar position="fixed"
            :transparent="transparent"
            :color-on-scroll="colorOnScroll"
            menu-classes="ml-auto">
        <template slot-scope="{toggle, isToggled}">
                <router-link v-popover:popover1 class="navbar-brand" to="/">
                    Home List
                </router-link>
                <el-popover
                        ref="popover1"
                        popper-class="popover"
                        placement="bottom"
                        width="200"
                        trigger="hover">
                    <div class="popover-body"> Developed by Arthur Bernier Jr</div>
                </el-popover>
        </template>
        <template slot="navbar-menu">
            <drop-down tag="li" title="Components" icon="now-ui-icons design_app" class="nav-item">
                <nav-link to="/">
                    <i class="now-ui-icons business_chart-pie-36"></i> Home
                </nav-link>
            </drop-down>
            <li class="nav-item">
                <a class="nav-link btn btn-primary"
                   href="/">
                    <p>Reload Page</p>
                </a>
            </li>

        </template>
    </navbar>
</template>

<script>
  import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
  import { Popover } from 'element-ui'
  export default {
    name: 'main-navbar',
    props: {
      transparent: Boolean,
      colorOnScroll: Number,
    },
    components: {
      DropDown,
      Navbar,
      NavbarToggleButton,
      NavLink,
      [Popover.name]: Popover
    }
  }
</script>

<style scoped>

</style>
