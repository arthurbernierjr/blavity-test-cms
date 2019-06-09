<template>
    <footer class="footer"
            :class="{[`footer-${type}`]: type}"
            :data-background-color="backgroundColor">
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <a href="/">
                            Arthur Bernier Jr
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="copyright">
                &copy; {{year}}, Developed by
                <a href="https://arthurbernierjr.com" target="_blank">Arthur Bernier Jr</a>. 
            </div>
        </div>
    </footer>
</template>
<script>
  export default {
    props: {
      backgroundColor: String,
      type: String
    },
    data(){
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>
<style>
</style>
