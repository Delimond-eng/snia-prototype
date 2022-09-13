<template>
    <div class="wrapper">
        <div class="navigation">
            <div class="container">
                <header class="navbar" id="top" role="banner">
                    <div class="navbar-header">
                        <div class="navbar-brand nav" id="brand">
                            <a href="#">
                                <h2 style="font-weight: 900; color: #fff">SNIA</h2>
                            </a>
                        </div>
                    </div>
                    <nav class="collapse navbar-collapse bs-navbar-collapse navbar-right" role="navigation">
                        
                    </nav>
                    <button class="btn btn-primary" style="position:absolute; background-color:#00b9ff; color:#fff; top: 20px; right: 10px"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-map-fill" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"/> </svg>  Cartographier les activités agricoles</button>
                    <!-- /.navbar collapse-->
                    
                </header><!-- /.navbar -->
            </div>
        </div>
        <!-- Search Box -->
         <div class="hero-search">
            <div class="content">
<h1>Tout ce que vous voulez savoir <br> à propos des activités agricoles de la <br> République Démocratique du Congo !</h1>
<div class="form-group">
    <input type="text" name="" value="" placeholder="Veuillez entrer un mot...">
    <button class="btn btn-search">
        <i class="fa fa-search"></i>
    </button>
</div>
            </div>
         </div>
    </div>
</template>

<script>
    export default {
        name: "homePage"
    }
</script>