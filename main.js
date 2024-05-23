/* Reset default margin and padding on the body */
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

/* Ensure body-container fills the viewport and sets position to relative */
.body-container {
    min-height: 100vh; /* Ensure body-container fills the viewport */
    position: relative; /* Position relative for absolute positioning within */
}

/* Header styles */
.header {
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 20px; 
    background-color: #999; 
    color: #fff; 
}

.logo-img {
    width: 100px; 
    height: auto; 
}

.nav {
    display: flex;
}

.nav-link {
    color: #fff;
    text-decoration: none;
    padding: 10px 20px;
    margin-right: 50px;
    font-size: 25px;
    transition: background-color 0.3s ease;
}

.nav-link:hover {
    background-color: #555;
}

/* Banner styles */
.banner-container {
    position: relative;
    width: 100%;
    height: 300px;
}

.banner-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 50px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Section styles */
.Section {
    padding: 50px;
    background-color: #f0f0f0;
    position: relative; /* Position relative for absolute positioning within */
}

.Section h1 {
    text-align: center;
    margin-bottom: 30px;
}

/* Photo item styles */
.photo-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.photo-item {
    position: relative;
    width: 30%;
    margin-bottom: 30px;
    text-align: center;
}

.photo-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.caption {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease;
    opacity: 0;
}

.photo-item:hover .caption {
    opacity: 1;
}

/* Bottom section styles */
.bottom-section {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 50px;
    background-color: gray;
    color: white;
    text-align: center;
}

.bottom-section .content {
    max-width: 800px;
    margin: 0 auto;
}

.footer {
   width: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: #999;
    color: #fff;
    text-align: center;
    position: relative; /* Ensure proper positioning */
    bottom: 0; /* Position the footer at the bottom */
}
input{
    width: 200px;
    margin: 10px;
    border: 1px solid #ccc; /* 1 pixel width, solid style, and gray color */

}