<?php
    session_start();
    session_destroy();
    ?>
    <script>
        location.replace('../session.php#session')
        </script>